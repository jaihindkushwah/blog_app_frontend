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

function Drafts() {
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recentlyPublished, setRecentlyPublished] = useState<PublishedItem[]>(
    []
  );
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user.id) {
      setLoading(true);
      getAllContentByUser(session?.user.id)
        .then((res) => {
          setRecentlyPublished([res.data[0]]);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [session?.user.id, refresh]);
  const handleEdit = (id: string) => {
    console.log(`Edit item with id: ${id}`);
    // Add your edit logic here
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this item?")) {
      setRefresh((prev) => !prev);
    }
  };

  return (
    <div className="space-y-4 pb-14">
      <div className="px-5 py-3 rounded-xl flex from-slate-300 to-slate-400 bg-gradient-to-r dark:from-slate-800 dark:to-slate-600 flex-col gap-2">
        <span className="text-2xl font-semibold">Drafts</span>

        <p className="mb-4">
          Welcome to your Drafts. Here&apos;s your recent saved drafts
        </p>
      </div>
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
        <div className="w-full ">
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
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(item._id)}
                      title="Edit"
                    >
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      title="Delete"
                      onClick={() => handleDelete(item._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>

                    <span
                      className="inline-flex items-center"
                      title={"Pending"}
                    >
                      <Clock className="h-4 w-4 text-blue-500" />
                    </span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Drafts;
