import { cn } from "@/lib/utils";
import Link from "next/link";

export const CardLink = ({
  link,
  className,
  title,
  childClassName,
  icon,
  ...props
}: {
  link: string;
  title: string;
  className?: string;
  icon?: JSX.Element;
  childClassName?: string;
}) => {
  return (
    <Link
      href={link}
      className={cn("gap-2 w-fit group/sidebar py-1", className)}
      {...props}
    >
      <span
        className={cn(
          "text-neutral-700  dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre flex !p-0 !m-0",
          childClassName
        )}
      >
        {icon}
        {title}
      </span>
    </Link>
  );
};
