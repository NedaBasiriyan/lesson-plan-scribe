import { Home, FileQuestion, FileText, Settings, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "داشبورد", url: "/", icon: Home },
  { title: "بانک سوالات", url: "/questions", icon: FileQuestion },
  { title: "برگه‌های امتحانی", url: "/exams", icon: FileText },
  { title: "تنظیمات", url: "/settings", icon: Settings },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <aside
        className={cn(
          "bg-sidebar text-sidebar-foreground transition-all duration-300 flex flex-col border-l border-sidebar-border",
          isCollapsed ? "w-16" : "w-64"
        )}
      >
        <div className="p-4 border-b border-sidebar-border">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.url}
              to={item.url}
              end={item.url === "/"}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                    : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )
              }
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {!isCollapsed && <span>{item.title}</span>}
            </NavLink>
          ))}
        </nav>

        {!isCollapsed && (
          <div className="p-4 border-t border-sidebar-border">
            <p className="text-sm opacity-75">نرم‌افزار مدیریت بانک سوالات</p>
            <p className="text-xs opacity-60 mt-1">نسخه ۱.۰</p>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
