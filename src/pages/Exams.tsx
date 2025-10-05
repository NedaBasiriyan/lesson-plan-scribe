import { Plus, FileText, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const exams = [
  {
    id: 1,
    title: "آزمون میان‌ترم ریاضی",
    subject: "ریاضی",
    questionCount: 20,
    date: "۱۴۰۳/۰۸/۱۵",
    grade: "هفتم",
  },
  {
    id: 2,
    title: "آزمون پایانی علوم",
    subject: "علوم",
    questionCount: 15,
    date: "۱۴۰۳/۰۸/۲۰",
    grade: "هشتم",
  },
  {
    id: 3,
    title: "آزمون نوبت اول فارسی",
    subject: "فارسی",
    questionCount: 25,
    date: "۱۴۰۳/۰۹/۰۱",
    grade: "نهم",
  },
];

export default function Exams() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              برگه‌های امتحانی
            </h1>
            <p className="text-muted-foreground">مدیریت و ایجاد برگه‌های آزمون</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            ایجاد برگه جدید
          </Button>
        </div>

        {/* Exams Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exams.map((exam) => (
            <Card key={exam.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <FileText className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">{exam.grade}</Badge>
                </div>
                <CardTitle className="mt-4">{exam.title}</CardTitle>
                <CardDescription>{exam.subject}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    <span>{exam.questionCount} سوال</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{exam.date}</span>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      ویرایش
                    </Button>
                    <Button size="sm" className="flex-1 gap-2">
                      <Download className="h-4 w-4" />
                      دانلود
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {exams.length === 0 && (
          <Card className="mt-8">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <FileText className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">هنوز برگه‌ای ایجاد نشده</h3>
              <p className="text-muted-foreground text-center mb-4">
                برای شروع، یک برگه امتحانی جدید ایجاد کنید
              </p>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                ایجاد اولین برگه
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
