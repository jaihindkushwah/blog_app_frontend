import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";

const problemCardVariants = cva(
  "flex dark:bg-blend-lighten  max-w-[840px] dark:bg-[#071a34] justify-between cursor-pointer shadow-slate-600 hover:shadow-lg w-full items-center flex-wrap font-sans px-6 py-4 border-2  rounded-xl",
  {
    variants: {
      variant: {
        default: "border-slate-500 hover:border-slate-600 hover:inset-2 gap-2",
        primary: "border-sky-500",
        secondary: "border-slate-500",
        danger: "border-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
export interface IProblemCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof problemCardVariants> {
  title: string;
  description?: string;
  difficulty: string;
  id: string;
  attempt?: string;
  href?: string;
  btnTitle?: string;
  status?: string;
}

export const ProblemCard: React.FC<IProblemCardProps> = ({
  title,
  difficulty,
  description = "This is a description of the problem",
  id,
  attempt = "1.5k",
  className,
  href,
  status,
  // btnTitle = "Solve",
}) => {
  const link = !href ? "/pages/protected/compiler/" + id : href;
  return (
    <Link
      href={link}
      className={cn(problemCardVariants({ variant: "default", className }))}
    >
      <span className=" flex flex-1 flex-col  items-start gap-2">
        <span>
          <p className="text-base">{title}</p>
          <p className="text-xs  text-green-700">{difficulty}</p>
        </span>
        <p className="text-xs mt-1">{description}</p>
      </span>
      <span className="flex justify-center flex-col items-end text-sm gap-2">
        <span className="flex gap-3 flex-col items-center">
          <button
            title={status === "solved" ? "Solved" : "Solve"}
            // href={link}
            className="dark:bg-[#071426] hover:dark:bg-[#01060c] hover:bg-slate-300 bg-slate-200 px-4 py-1 font-medium rounded-md text-sm"
          >
            {status === "solved" ? "Solved" : "Solve"}
          </button>
          <p className="">{attempt}</p>
        </span>
      </span>
    </Link>
  );
};
