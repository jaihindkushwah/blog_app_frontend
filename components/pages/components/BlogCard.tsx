import React from "react";
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

import Link from "next/link";
import ShareButton from "@/components/share-btn";

interface IBlogCardProps {
  item: any;
  handleEdit: any;
  handleDelete: any;
}
function BlogCard({ item, handleEdit, handleDelete }: IBlogCardProps) {
  return (
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
          <Link href={`/${item.titleId}`}>
            <Button title="View" variant="ghost" size="icon">
              <ViewIcon className="h-4 w-4" />
            </Button>
          </Link>

          {/* <Share2Icon className="h-4 w-4" /> */}

          <span className="inline-flex items-center" title={item.status}>
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
  );
}

export default BlogCard;
