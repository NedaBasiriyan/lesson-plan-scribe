import { Save, Database, FileDown, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function Settings() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 max-w-4xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">تنظیمات</h1>
          <p className="text-muted-foreground">مدیریت تنظیمات نرم‌افزار</p>
        </div>

        <div className="space-y-6">
          {/* General Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                <CardTitle>تنظیمات عمومی</CardTitle>
              </div>
              <CardDescription>تنظیمات اصلی نرم‌افزار</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="schoolName">نام مدرسه</Label>
                <Input
                  id="schoolName"
                  placeholder="نام مدرسه خود را وارد کنید"
                  defaultValue="دبیرستان شهید بهشتی"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currentYear">سال تحصیلی</Label>
                <Input
                  id="currentYear"
                  placeholder="۱۴۰۳-۱۴۰۴"
                  defaultValue="۱۴۰۳-۱۴۰۴"
                />
              </div>
            </CardContent>
          </Card>

          {/* Database Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                <CardTitle>پایگاه داده</CardTitle>
              </div>
              <CardDescription>مدیریت و پشتیبان‌گیری از داده‌ها</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">پشتیبان‌گیری خودکار</p>
                  <p className="text-sm text-muted-foreground">
                    آخرین پشتیبان: ۱۴۰۳/۰۸/۱۰
                  </p>
                </div>
                <Button variant="outline">
                  <FileDown className="h-4 w-4 ml-2" />
                  دانلود پشتیبان
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">بازیابی از فایل</p>
                  <p className="text-sm text-muted-foreground">
                    بازگردانی اطلاعات از پشتیبان
                  </p>
                </div>
                <Button variant="outline">انتخاب فایل</Button>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              ذخیره تغییرات
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
