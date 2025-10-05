import { useState } from "react";
import { Plus, Search, Edit, Trash2, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

// Sample data - will be replaced with database
const sampleQuestions = [
  {
    id: 1,
    subject: "ریاضی",
    type: "تستی",
    text: "حاصل ۵ + ۳ چیست؟",
    answer: "۸",
    year: "۱۴۰۳",
    term: "اول",
  },
  {
    id: 2,
    subject: "علوم",
    type: "تشریحی",
    text: "فتوسنتز را توضیح دهید.",
    answer: "فرآیندی که گیاهان از نور خورشید برای تولید غذا استفاده می‌کنند",
    year: "۱۴۰۳",
    term: "دوم",
  },
  {
    id: 3,
    subject: "فارسی",
    type: "جای‌خالی",
    text: "شعر «گر چه بیمارم ز رنج تو _____ نخواهم»",
    answer: "شفا",
    year: "۱۴۰۲",
    term: "اول",
  },
];

const questionTypes = ["همه", "تستی", "تشریحی", "جای‌خالی"];
const subjects = ["همه", "ریاضی", "علوم", "فارسی", "عربی", "انگلیسی"];

export default function Questions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("همه");
  const [selectedSubject, setSelectedSubject] = useState("همه");

  const filteredQuestions = sampleQuestions.filter((q) => {
    const matchesSearch = q.text.includes(searchTerm) || q.subject.includes(searchTerm);
    const matchesType = selectedType === "همه" || q.type === selectedType;
    const matchesSubject = selectedSubject === "همه" || q.subject === selectedSubject;
    return matchesSearch && matchesType && matchesSubject;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">بانک سوالات</h1>
          <p className="text-muted-foreground">مدیریت و ذخیره‌سازی سوالات امتحانی</p>
        </div>

        {/* Actions Bar */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="جستجو در سوالات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-2">
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="درس" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="نوع سوال" />
                  </SelectTrigger>
                  <SelectContent>
                    {questionTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  <span className="hidden sm:inline">افزودن سوال</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Questions Table */}
        <Card>
          <CardHeader>
            <CardTitle>لیست سوالات</CardTitle>
            <CardDescription>
              {filteredQuestions.length} سوال یافت شد
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">درس</TableHead>
                    <TableHead className="text-right">نوع سوال</TableHead>
                    <TableHead className="text-right">متن سوال</TableHead>
                    <TableHead className="text-right">سال</TableHead>
                    <TableHead className="text-right">ترم</TableHead>
                    <TableHead className="text-right">عملیات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredQuestions.map((question) => (
                    <TableRow key={question.id}>
                      <TableCell className="font-medium">
                        <Badge variant="secondary">{question.subject}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            question.type === "تستی"
                              ? "default"
                              : question.type === "تشریحی"
                              ? "outline"
                              : "secondary"
                          }
                        >
                          {question.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="max-w-md truncate">
                        {question.text}
                      </TableCell>
                      <TableCell>{question.year}</TableCell>
                      <TableCell>{question.term}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="icon" variant="ghost">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
