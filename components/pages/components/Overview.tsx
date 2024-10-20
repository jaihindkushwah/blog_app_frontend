"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Edit,
  Trash2,
  CheckCircle2,
  XCircle,
  Clock,
  ShareIcon,
  Share2Icon,
  ViewIcon,
} from "lucide-react";
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
import Link from "next/link";
import ShareButton from "@/components/share-btn";

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

const COLORS = ["#4CAF50", "#F44336", "#2196F3"];

function Overview() {
  const [refresh, setRefresh] = useState(false);
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
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [session?.user.id, currentPage, refresh]);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this item?")) {
      // console.log(`Delete item with id: ${id}`);

      deleteContentById(id)
        .then((res) => {
          // console.log(res);
          if (res.data) {
            setCurrentPage(1);
            setRefresh((prev) => !prev);
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
      <div className="px-5 py-3 rounded-xl flex from-slate-300 to-slate-400 bg-gradient-to-r dark:from-slate-800 dark:to-slate-600 flex-col gap-2">
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
                  title="Previous"
                  disabled={currentPage == 1}
                  onClick={() => paginate(currentPage - 1)}
                />
              </PaginationItem>

              <PaginationItem className="cursor-pointer">
                <PaginationNextButton
                  disabled={
                    recentlyPublished?.length == 0 ||
                    recentlyPublished?.length < 5
                  }
                  title="Next"
                  onClick={() => paginate(currentPage + 1)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <div className="space-y-4">
            {!recentlyPublished || recentlyPublished.length == 0 ? (
              <div className="flex justify-center items-center">
                <p className="text-red-500 text-base sm:text-lg mt-5">
                  Data Not Found
                </p>
              </div>
            ) : null}
            {recentlyPublished?.map((item) => (
              <Card
                key={item._id}
                className="from-slate-200 to-slate-300 bg-gradient-to-r dark:from-slate-900 dark:to-slate-700"
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-semibold flex items-center">
                    <span>{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {new Date(item.createdAt).toLocaleDateString()} &nbsp;&nbsp;
                    {new Date(item.createdAt).toLocaleTimeString()}
                  </CardDescription>
                  <p className="mt-2">{item.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center flex-wrap-reverse gap-1">
                  <div className="flex sm:gap-2 gap-1 sm:flex-row items-center mt-1">
                    <Link href={`/create/${item._id}`}>
                      <Button
                        variant="ghost"
                        size="icon"
                        // onClick={() => handleEdit(item._id)}
                        title="Edit"
                      >
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      title="Delete"
                      onClick={() => handleDelete(item._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                    <Link href={`/${item.titleId}`}>
                      <Button title="View" variant="ghost" size="icon">
                        <ViewIcon className="h-4 w-4" />
                      </Button>
                    </Link>

                    {/* <Share2Icon className="h-4 w-4" /> */}

                    <span
                      className="inline-flex items-center"
                      title={item.status}
                    >
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
                  <ShareButton
                    url={`https://thefounded.in/${item.titleId}`}
                    title={item.title}
                  />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Overview;
