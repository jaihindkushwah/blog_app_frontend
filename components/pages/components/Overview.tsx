"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  LayoutDashboard,
  FileText,
  Settings,
  Menu,
  PlusCircle,
  User,
  Edit,
  Trash2,
  CheckCircle2,
  XCircle,
  Clock,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import CalendarGrid from "@/components/ui/calander-grid";

type Status = "published" | "failed" | "pending";

interface PublishedItem {
  id: number;
  title: string;
  description: string;
  date: string;
  status: Status;
}

const recentlyPublished: PublishedItem[] = [
  {
    id: 1,
    title: "New Feature: Dark Mode",
    description:
      "We've just launched a new dark mode feature for better nighttime viewing.",
    date: "2024-10-05",
    status: "published",
  },
  {
    id: 2,
    title: "Q3 Financial Report",
    description:
      "The Q3 financial report is now available for all stakeholders to review.",
    date: "2024-10-04",
    status: "pending",
  },
  {
    id: 3,
    title: "Team Building Event",
    description: "Join us for our annual team building event next month!",
    date: "2024-10-03",
    status: "published",
  },
  {
    id: 4,
    title: "Product Update v2.0",
    description:
      "We've released a major update to our product. Check out the new features!",
    date: "2024-10-02",
    status: "failed",
  },
  {
    id: 5,
    title: "Customer Feedback Survey",
    description: "Please participate in our annual customer feedback survey.",
    date: "2024-10-01",
    status: "published",
  },
  {
    id: 6,
    title: "New Office Opening",
    description:
      "We're excited to announce the opening of our new office in San Francisco.",
    date: "2024-09-30",
    status: "pending",
  },
  {
    id: 7,
    title: "Webinar: Future of AI",
    description:
      "Join us for an insightful webinar on the future of AI in business.",
    date: "2024-09-29",
    status: "published",
  },
];

const COLORS = ["#4CAF50", "#F44336", "#2196F3"];

function Overview() {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleEdit = (id: number) => {
    console.log(`Edit item with id: ${id}`);
    // Add your edit logic here
  };

  const handleDelete = (id: number) => {
    console.log(`Delete item with id: ${id}`);
    // Add your delete logic here
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = recentlyPublished.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const statusCounts = recentlyPublished.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {} as Record<Status, number>);

  const chartData = [
    { name: "Published", value: statusCounts.published || 0 },
    { name: "Failed", value: statusCounts.failed || 0 },
    { name: "Pending", value: statusCounts.pending || 0 },
  ];
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Welcome to your dashboard. Here&apos;s what&apos;s new:
          </p>
          <ChartContainer
            config={{
              published: {
                label: "Published",
                color: "hsl(var(--chart-1))",
              },
              failed: {
                label: "Failed",
                color: "hsl(var(--chart-2))",
              },
              pending: {
                label: "Pending",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px] w-[300px] sm:w-full min-w-[300px] max-w-3xl"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      {currentItems.map((item) => (
        <Card key={item.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              {item.title}
              {item.status === "published" && (
                <CheckCircle2 className="ml-2 h-4 w-4 text-green-500" />
              )}
              {item.status === "failed" && (
                <XCircle className="ml-2 h-4 w-4 text-red-500" />
              )}
              {item.status === "pending" && (
                <Clock className="ml-2 h-4 w-4 text-blue-500" />
              )}
            </CardTitle>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleEdit(item.id)}
              >
                <Edit className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(item.id)}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>
              {new Date(item.date).toLocaleDateString()}
            </CardDescription>
            <p className="mt-2">{item.description}</p>
          </CardContent>
        </Card>
      ))}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => paginate(currentPage - 1)}
              //   disabled={currentPage === 1}
            />
          </PaginationItem>
          {Array.from({
            length: Math.ceil(recentlyPublished.length / itemsPerPage),
          }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                onClick={() => paginate(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => paginate(currentPage + 1)}
              //   disabled={currentPage === Math.ceil(recentlyPublished.length / itemsPerPage)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default Overview;
