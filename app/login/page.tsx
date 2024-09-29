"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
// import { Switch } from "@/components/ui/switch";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      console.log("Logging in with:", email, password);
      router.push("/dashboard");
    } else {
      setError("Please enter both email and password.");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Logging in with Google");
    // Google login logic here
  };

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
              href="/register"
              prefetch={false}
            >
              Register
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 py-8 px-6 shadow rounded-lg sm:px-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Login to account
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Enter your email below to create your account
              </p>
            </div>
            <form onSubmit={handleEmailLogin} className="mb-0 space-y-6">
              <div>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="dark:bg-gray-700 dark:text-gray-100"
                />
              </div>
              <div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="dark:bg-gray-700 dark:text-gray-100"
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full bg-[#bd1e59] hover:bg-[#cf356d] text-white dark:bg-[#bd1e59] dark:hover:bg-pink-700"
                >
                  Sign In with Email
                </Button>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    OR CONTINUE WITH
                  </span>
                </div>
              </div>
              <div>
                <Button
                  onClick={handleGoogleLogin}
                  className="w-full bg-white hover:bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 shadow-sm"
                >
                  <GoogleIcon className="mr-2 h-4 w-4" />
                  Google
                </Button>
              </div>
            </form>
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

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
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
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  );
}
