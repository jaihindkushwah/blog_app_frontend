"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { useSession } from "next-auth/react";

function DashboardUserProfile() {
  const { data: session } = useSession();
  return (
    <Card className="w-64 sticky top-2 mt-10">
      <CardContent className="flex flex-col items-center pt-6">
        <Avatar className="rounded-none h-52 w-52 mb-4">
          <AvatarImage
            src={
              session?.user?.image ??
              "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
            }
            alt="User avatar"
          />
          <AvatarFallback className="rounded-none text-4xl">JD</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-xl font-semibold">
            {session?.user?.name ?? "John Doe"}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {session?.user?.email ?? "abc@example.com"}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            DOB: {"DD:MM:YYYY"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default DashboardUserProfile;
