import { FileQuestion, FileText, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "کل سوالات",
    value: "۱۲۴",
    icon: FileQuestion,
    description: "در بانک سوالات",
  },
  {
    title: "برگه‌های امتحانی",
    value: "۸",
    icon: FileText,
    description: "برگه آماده‌شده",
  },
  {
    title: "دروس",
    value: "۵",
    icon: BookOpen,
    description: "دروس مختلف",
  },
  {
    title: "رشد ماهانه",
    value: "+۲۳٪",
    icon: TrendingUp,
    description: "افزایش سوالات",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">داشبورد</h1>
          <p className="text-muted-foreground">خلاصه اطلاعات بانک سوالات</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>آخرین سوالات اضافه‌شده</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { subject: "ریاضی", text: "حاصل ۵ + ۳ چیست؟", time: "۲ ساعت پیش" },
                  { subject: "علوم", text: "فتوسنتز را توضیح دهید", time: "۵ ساعت پیش" },
                  { subject: "فارسی", text: "شعر گر چه بیمارم...", time: "۱ روز پیش" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.subject}</p>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>دسته‌بندی سوالات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { subject: "ریاضی", count: 45, percentage: 36 },
                  { subject: "علوم", count: 32, percentage: 26 },
                  { subject: "فارسی", count: 28, percentage: 23 },
                  { subject: "عربی", count: 19, percentage: 15 },
                ].map((item) => (
                  <div key={item.subject} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item.subject}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.count} سوال
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
