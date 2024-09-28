"use client";
import { Button } from "@/components/ui/button";
// import GoogleIcon from '@/components/icons/GoogleIcon';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import useLogin from "@/hooks/useLogin";
// import { getAuthState } from "@/store/auth";
// import { useSelector } from "react-redux";

const FormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password must be at most 100 characters long")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/\d/, "Password must contain at least one number"),
});

import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

function Login() {
  const [loginError, setLoginError] = useState<string | null | undefined>();
  // const authState = useSelector(getAuthState);

  const { data: session } = useSession();
  console.log(session);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmitForm(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    // console.log(data);
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/pages/protected/dashboard",
    }).then((res) => {
      // console.log(res);
      // if (res?.error) {
      setLoginError(res?.error);
      // }
    });
    // handleLogin(data).then(() => {
    //   form.reset();
    // });
  }
  return (
    <main className="flex  max-w-screen flex-col  items-center justify-start sm:justify-center">
      <div className="flex items-center mt-5 flex-col md:w-[640px] sm:w-[560px] w-screen">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitForm)}
            className="w-2/3 space-y-6"
          >
            <h1 className="text-xl sm:text-3xl font-bold text-center">Login</h1>
            {loginError && (
              <p className="text-red-500 text-center">{loginError}</p>
            )}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
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
                  <FormLabel>Password:</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="text-left flex gap-2">
              <Button
                type="submit"
                variant={"default"}
                className="w-full text-base py-1.5 h-full dark:bg-slate-200 dark:hover:bg-slate-300"

                // className="rounded-full px-8 border-2 text-white hover:text-white dark:hover:text-black  border-white bg-black text-[15px]"
              >
                Login
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Separator className="my-4 flex-1" />
              <p className="text-center">Or continue with</p>
              <Separator className="my-4 flex-1" />
            </div>
            <Button
              type="button"
              variant={"outline"}
              className="w-full text-base py-1.5 h-full flex items-center justify-center gap-2"
              onClick={() => {
                signIn("google");
              }}
            >
              {/* <span className="w-4 h-4"> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>{" "}
              {/* </span> */}
              <span>Google</span>
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}

export default Login;
