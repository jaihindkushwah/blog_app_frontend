"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { useSession } from "next-auth/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function DashboardUserProfile() {
  const { data: session } = useSession();
  return (
    <Card className="w-full  bg-inherit bg-blend-darken">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Profile & Address</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center mb-6">
          <Avatar className="w-24 h-24 mb-4">
            <AvatarImage src={session?.user?.image} alt={session?.user?.name} />
            <AvatarFallback>
              {session?.user?.name
                ?.split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold">{session?.user?.name}</h2>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={session?.user?.email}
              readOnly
              className="bg-muted"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={"Mumbai"}
              readOnly
              className="bg-muted"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" value={"Mumbai"} readOnly className="bg-muted" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                value={"India"}
                readOnly
                className="bg-muted"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="postalCode">Postal Code</Label>
            <Input
              id="postalCode"
              value={400000}
              readOnly
              className="bg-muted"
            />
          </div>
        </div>
      </CardContent>
    </Card>
    // <Card className="w-64 sticky top-2 mt-10">
    //   <CardContent className="flex flex-col items-center pt-6">
    //     <Avatar className="rounded-none h-52 w-52 mb-4">
    //       <AvatarImage
    //         src={
    //           session?.user?.image ??
    //           "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    //         }
    //         alt="User avatar"
    //       />
    //       <AvatarFallback className="rounded-none text-4xl">JD</AvatarFallback>
    //     </Avatar>
    //     <div className="text-center">
    //       <h2 className="text-xl font-semibold">
    //         {session?.user?.name ?? "John Doe"}
    //       </h2>
    //       <p className="text-sm text-muted-foreground mt-1">
    //         {session?.user?.email ?? "abc@example.com"}
    //       </p>
    //       <p className="text-sm text-muted-foreground mt-1">
    //         DOB: {"DD:MM:YYYY"}
    //       </p>
    //     </div>
    //   </CardContent>
    // </Card>
  );
}

export default DashboardUserProfile;
