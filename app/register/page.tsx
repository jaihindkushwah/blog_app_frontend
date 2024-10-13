"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { signIn } from "next-auth/react";

const FormSchema = z
  .object({
    name: z.string().min(3, {
      message: "Name must be at least 3 characters.",
    }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(100, "Password must be at most 100 characters long")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/\d/, "Password must contain at least one number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // Path of the error
    message: "Passwords do not match",
  });

export default function Register() {
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(inputs: z.infer<typeof FormSchema>) {
    const { name, email, password } = inputs;
    try {
      const response = await axios.post("/api/auth/register", {
        name,
        email,
        password,
        role,
      });
      const data = await response.data;
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/create",
      });
      console.log(data);
    } catch (error: any) {
      if (error instanceof Error) {
        console.log(error);
      }
      setError(error.response.data.error);
    }
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="hidden md:flex w-1/2 bg-black p-12 text-white flex-col justify-between">
        <div>
          <GaugeIcon className="h-8 w-8 text-white" />
          <h1 className="mt-4 text-3xl font-semibold">The Founded.In</h1>
        </div>
        <div>
          <blockquote className="italic">
            The key to success is to focus on what you love.
          </blockquote>
          <p className="mt-4">-The Founded.In</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2"></div>
            <Link
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
              href="/login"
              prefetch={false}
            >
              Login
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 py-8 px-6 shadow rounded-lg sm:px-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Create an account
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Enter your details below to create your account
              </p>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mb-0 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="Full Name"
                          {...field}
                          className="dark:bg-gray-700 dark:text-gray-100"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          {...field}
                          className="dark:bg-gray-700 dark:text-gray-100"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password"
                          {...field}
                          className="dark:bg-gray-700 dark:text-gray-100"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Confirm password"
                          {...field}
                          className="dark:bg-gray-700 dark:text-gray-100"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <Select
                    defaultValue="user"
                    onValueChange={(value) => setRole(value)}
                    name="role"
                  >
                    <SelectTrigger
                      title="Select a role"
                      name="select role"
                      className="w-full mt-1 dark:bg-gray-700 dark:text-gray-100"
                    >
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-700 dark:text-gray-100">
                      <SelectGroup>
                        <SelectLabel>Roles</SelectLabel>
                        <SelectItem title="User" value="user">
                          User
                        </SelectItem>
                        <SelectItem title="Creator" value="creator">
                          Creator
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full bg-[#bd1e59] hover:bg-[#cf356d] text-white dark:bg-[#bd1e59] dark:hover:bg-pink-700"
                  >
                    Register
                  </Button>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </form>
            </Form>
            <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
              By clicking continue, you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GaugeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}
