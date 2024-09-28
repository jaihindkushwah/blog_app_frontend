"use client";
import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  Lock,
  ShoppingBag,
  FileText,
  RefreshCcw,
  Camera,
  Mail,
  Phone,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
// import { getAuthState } from "@/store/auth";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getAvatarFallbackName } from "@/lib/getAvatarFallbackName";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useSession } from "next-auth/react";
// import ProfileViewer from '@/components/ProfileViewer';

function Profile() {
  // const { profile } = useSelector(getAuthState);
  const { data: session } = useSession();
  const router = useRouter();

  const backHandler = () => {
    router.back();
  };

  return (
    <div className="relative min-h-screen w-full bg-background p-4">
      <Button
        onClick={backHandler}
        variant="ghost"
        className="sticky top-4 left-4 p-2 hover:bg-accent"
      >
        <ArrowLeft className="w-5 h-5" />
      </Button>

      <div className="flex flex-col items-center space-y-8 pt-12 pb-8">
        <ProfileViewer userData={session?.user} />
        <RecentPurchase />
        <ResetPassword />
        <HelpComponent />
      </div>
    </div>
  );
}

export default Profile;

const ProfileViewer = ({ userData }: { userData: any }) => {
  const [avatarUrl, setAvatarUrl] = useState(userData?.avatar);

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (!event.target.files) return;
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result);
        // Here you would typically upload the file to your server
        console.log("Avatar updated:", file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="flex flex-col items-center">
        <div className="relative group">
          <Avatar className="w-32 h-32 cursor-pointer group-hover:opacity-75 transition-opacity">
            <AvatarImage src={avatarUrl} alt={userData.name} />
            <AvatarFallback className="text-xl sm:text-2xl sm:tracking-widest">
              {getAvatarFallbackName(userData.name)}
            </AvatarFallback>
          </Avatar>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera className="w-8 h-8 dark:text-white text-black" />
          </div>
          <Input
            type="file"
            accept="image/*"
            className="hidden"
            id="avatar-upload"
            onChange={handleAvatarUpload}
          />
          <label
            htmlFor="avatar-upload"
            className="absolute inset-0 cursor-pointer"
          />
        </div>
        <CardTitle className="mt-4 text-2xl font-bold">
          {userData.name
            ? userData.name.slice(0, 1).toUpperCase() + userData.name.slice(1)
            : ""}
        </CardTitle>
        <Badge variant="secondary" className="mt-2">
          {userData.role}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Mail className="w-5 h-5 text-gray-500" />
          <span>{userData.email}</span>
        </div>
        {userData.phone && (
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-gray-500" />
            <span>{userData.phone}</span>
          </div>
        )}
        <div className="flex items-center space-x-2">
          <Badge
            variant={"secondary"}
            // variant={userData.verified ? "secondary" : "destructive"}
            // className="bg-green-500"
            className={userData.verified ? "bg-green-600" : "bg-red-600"}
          >
            {userData.verified ? "Verified" : "Not Verified"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const RecentPurchase = () => {
  const [visiblePurchases, setVisiblePurchases] = useState(3);

  const handleViewMore = () => {
    setVisiblePurchases((prevVisible) => prevVisible + 3);
  };
  const handleViewLess = () => {
    setVisiblePurchases((prevVisible) => Math.max(prevVisible - 3, 3));
  };
  const handleViewInvoice = (purchaseId: any) => {
    // Implement view invoice logic here
    console.log(`Viewing invoice for purchase ${purchaseId}`);
  };

  const handleRefund = (purchaseId: any) => {
    // Implement refund logic here
    console.log(`Refund requested for purchase ${purchaseId}`);
  };

  // Mock data for recent purchases
  const recentPurchases = [
    { id: 1, name: "Product A", date: "2024-09-05", price: "$19.99" },
    { id: 2, name: "Product B", date: "2024-09-03", price: "$34.99" },
    { id: 3, name: "Product C", date: "2024-08-28", price: "$24.99" },
    { id: 4, name: "Product D", date: "2024-08-25", price: "$39.99" },
    { id: 5, name: "Product E", date: "2024-08-20", price: "$49.99" },
    { id: 6, name: "Product F", date: "2024-08-15", price: "$29.99" },
    { id: 7, name: "Product G", date: "2024-08-10", price: "$24.99" },
    { id: 8, name: "Product H", date: "2024-08-05", price: "$19.99" },
    { id: 9, name: "Product I", date: "2024-07-30", price: "$34.99" },
    { id: 10, name: "Product J", date: "2024-07-25", price: "$24.99" },
    { id: 11, name: "Product K", date: "2024-07-20", price: "$39.99" },
  ];
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center">
          <ShoppingBag className="w-5 h-5 mr-2" />
          Recent Purchases
        </CardTitle>
      </CardHeader>
      <CardContent>
        {recentPurchases.length > 0 ? (
          <>
            <ul className="space-y-6">
              {recentPurchases.slice(0, visiblePurchases).map((purchase) => (
                <li
                  key={purchase.id}
                  className="border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{purchase.name}</span>
                    <span>{purchase.price}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{purchase.date}</span>
                    <div className="space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewInvoice(purchase.id)}
                      >
                        <FileText className="w-4 h-4 mr-1" />
                        View Invoice
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRefund(purchase.id)}
                      >
                        <RefreshCcw className="w-4 h-4 mr-1" />
                        Refund
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {visiblePurchases > 3 && (
              <div className="mt-4 text-center">
                <Button
                  variant="outline"
                  onClick={handleViewLess}
                  className="w-full"
                >
                  <ChevronUp className="w-4 h-4 mr-2" />
                  View Less
                </Button>
              </div>
            )}
            {visiblePurchases < recentPurchases.length && (
              <div className="mt-4 text-center">
                <Button
                  variant="outline"
                  onClick={handleViewMore}
                  className="w-full"
                >
                  <ChevronDown className="w-4 h-4 mr-2" />
                  View More
                </Button>
              </div>
            )}
          </>
        ) : (
          <p>No recent purchases</p>
        )}
      </CardContent>
    </Card>
  );
};

const ResetPassword = ({}) => {
  const handlePasswordReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement password reset logic here
    console.log("Password reset requested");
  };
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Lock className="w-5 h-5 mr-2" />
          Password Reset
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handlePasswordReset} className="space-y-4">
          <Input type="password" placeholder="New Password" required />
          <Input type="password" placeholder="Confirm New Password" required />
          <Button type="submit">Reset Password</Button>
        </form>
      </CardContent>
    </Card>
  );
};

const helpItems = [
  {
    question: "How do I change my password?",
    answer:
      "To change your password, go to the 'Password Reset' section above and enter your new password twice. Click 'Reset Password' to save your changes.",
  },
  {
    question: "How can I view my purchase invoice?",
    answer:
      "In the 'Recent Purchases' section, find the purchase you're interested in and click the 'View Invoice' button next to it. This will open your invoice in a new window or tab.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "Our refund policy allows returns within 30 days of purchase. To request a refund, click the 'Refund' button next to the item in your 'Recent Purchases' list. Please note that some items may not be eligible for refund.",
  },
  {
    question: "How do I update my profile information?",
    answer:
      "To update your profile information, click on the 'Edit Profile' button at the top of this page. You can modify your name, email, and other details there.",
  },
  {
    question: "I'm having trouble with my account. Who do I contact?",
    answer:
      "If you're experiencing issues with your account, please contact our support team at support@example.com or call us at 1-800-123-4567. We're available 24/7 to assist you.",
  },
];

const HelpComponent = () => {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center">
          <HelpCircle className="w-5 h-5 mr-2" />
          Help & FAQ
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {helpItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};
