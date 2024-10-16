"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Edit, Trash2, CheckCircle2, XCircle, Clock } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNextButton,
  PaginationPreviousButton,
} from "@/components/ui/pagination";
import { deleteContentById, getAllContentByUser } from "@/lib/content";
import { useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";

type Status = "published" | "failed" | "pending" | string;

interface PublishedItem {
  title: string;
  titleId: string;
  content: string;
  createBy: string;
  createdAt: string;
  updatedAt: string;
  category: string;
  description: string;
  author?: string;
  status: Status;
  _id: string;
}

// const recentlyPublished: PublishedItem[] = [
//   {
//     id: 1,
//     title: "New Feature: Dark Mode",
//     description:
//       "We've just launched a new dark mode feature for better nighttime viewing.",
//     date: "2024-10-05",
//     status: "published",
//   },
//   {
//     id: 2,
//     title: "Q3 Financial Report",
//     description:
//       "The Q3 financial report is now available for all stakeholders to review.",
//     date: "2024-10-04",
//     status: "pending",
//   },
//   {
//     id: 3,
//     title: "Team Building Event",
//     description: "Join us for our annual team building event next month!",
//     date: "2024-10-03",
//     status: "published",
//   },
//   {
//     id: 4,
//     title: "Product Update v2.0",
//     description:
//       "We've released a major update to our product. Check out the new features!",
//     date: "2024-10-02",
//     status: "failed",
//   },
//   {
//     id: 5,
//     title: "Customer Feedback Survey",
//     description: "Please participate in our annual customer feedback survey.",
//     date: "2024-10-01",
//     status: "published",
//   },
//   {
//     id: 6,
//     title: "New Office Opening",
//     description:
//       "We're excited to announce the opening of our new office in San Francisco.",
//     date: "2024-09-30",
//     status: "pending",
//   },
//   {
//     id: 7,
//     title: "Webinar: Future of AI",
//     description:
//       "Join us for an insightful webinar on the future of AI in business.",
//     date: "2024-09-29",
//     status: "published",
//   },
// ];

const COLORS = ["#4CAF50", "#F44336", "#2196F3"];

function Overview() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [recentlyPublished, setRecentlyPublished] = useState<PublishedItem[]>(
    []
  );
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user.id) {
      setLoading(true);
      getAllContentByUser(session?.user.id, currentPage + "")
        .then((res) => {
          setRecentlyPublished(res.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [session?.user.id, currentPage]);
  const handleEdit = (id: string) => {
    console.log(`Edit item with id: ${id}`);
    // Add your edit logic here
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this item?")) {
      // console.log(`Delete item with id: ${id}`);

      deleteContentById(id)
        .then((res) => {
          // console.log(res);
          if (res.data) {
            setCurrentPage(1);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const paginate = (pageNumber: number) => {
    if (pageNumber < 1) return;
    setCurrentPage(pageNumber);
  };

  // const statusCounts = recentlyPublished.reduce((acc, item) => {
  //   acc[item.status] = (acc[item.status] || 0) + 1;
  //   return acc;
  // }, {} as Record<Status, number>);

  // const chartData = [
  //   { name: "Published", value: statusCounts.published || 0 },
  //   { name: "Failed", value: statusCounts.failed || 0 },
  //   { name: "Pending", value: statusCounts.pending || 0 },
  // ];
  return (
    <div className="space-y-4">
      <div className="px-5 py-3 rounded-xl flex bg-slate-300 flex-col gap-2">
        <span className="text-2xl font-semibold">Overview</span>

        <p className="mb-4">
          Welcome to your dashboard. Here&apos;s your recent submission&apos;s
        </p>
      </div>
      {/* <Card>
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
      </Card> */}

      {loading ? (
        <div className="min-h-[30vh]">
          <div className="flex flex-col gap-2">
            <div className="w-full flex items-center space-x-4">
              <Skeleton className="h-14 dark:bg-slate-800 bg-gray-300 w-16 rounded-full" />
              <div className="space-y-2 w-full">
                <Skeleton className="h-3 dark:bg-slate-800 bg-gray-300 w-full" />
                <Skeleton className="h-3 dark:bg-slate-800 bg-gray-300 w-full" />
              </div>
            </div>
            <Skeleton className="h-3 dark:bg-slate-800 bg-gray-300 w-full " />
            <Skeleton className="h-3 dark:bg-slate-800 bg-gray-300 w-full " />
            <Skeleton className="h-3 dark:bg-slate-800 bg-gray-300 w-full " />
          </div>
        </div>
      ) : (
        <div className="w-full">
          <Pagination>
            <PaginationContent className="w-full flex justify-end">
              <PaginationItem className="cursor-pointer">
                <PaginationPreviousButton
                  disabled={currentPage == 1}
                  onClick={() => paginate(currentPage - 1)}
                />
              </PaginationItem>

              <PaginationItem className="cursor-pointer">
                <PaginationNextButton
                  disabled={
                    recentlyPublished.length == 0 ||
                    recentlyPublished.length < 5
                  }
                  onClick={() => paginate(currentPage + 1)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <div className="space-y-4">
            {recentlyPublished?.map((item) => (
              <Card key={item._id}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-semibold flex items-center">
                    <span>{item.title}</span>
                  </CardTitle>
                  <div className="flex sm:gap-2 gap-1 sm:flex-row items-center flex-col-reverse">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(item._id)}
                    >
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(item._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                    <span className="inline-flex items-center">
                      {item.status === "published" && (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      )}
                      {item.status === "failed" && (
                        <XCircle className="h-4 w-4 text-red-500" />
                      )}
                      {item.status === "pending" && (
                        <Clock className="h-4 w-4 text-blue-500" />
                      )}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </CardDescription>
                  <p className="mt-2">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Overview;
