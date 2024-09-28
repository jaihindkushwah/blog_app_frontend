"use client";
import { Button } from "@/components/ui/button";

// import { Button } from "@/components/ui/button";
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

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
});

function Forget() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    console.log("form data res ", data);
    form.reset();
  }
  return (
    <main className="flex  max-w-screen flex-col  items-center justify-start sm:justify-center">
      <div className="flex items-center mt-5 flex-col md:w-[640px] sm:w-[560px] w-screen">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <h1 className="text-xl sm:text-3xl font-bold text-center">
              Forget Password
            </h1>
            {/* {registerError && (
              <p className="text-red-500 text-center">{registerError}</p>
            )} */}
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

            <div className="text-left flex gap-2">
              <Button
                type="submit"
                className="rounded-full px-8 border-2 text-white hover:text-white dark:hover:text-black  border-white bg-black text-[15px]"
              >
                Reset Password
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}

export default Forget;
