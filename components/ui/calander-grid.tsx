import { cn } from "@/lib/utils";
import { Card } from "./card";
import { cva, VariantProps } from "class-variance-authority";

export const calenderGridVariants = cva("max-w-[500px] mx-auto p-4", {
  variants: {
    gridWidth: {},
    gridHeight: {},
  },
  defaultVariants: {},
});

interface ICalendarGridProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof calenderGridVariants> {
  gridClassName?: string;
  daysOfWeek?: string[];
}

const CalendarGrid: React.FC<ICalendarGridProps> = ({
  className,
  gridClassName,
  daysOfWeek,
  gridWidth,
  gridHeight,
  ...props
}) => {
  // gridHeight = gridHeight ? gridHeight : "48";
  // gridWidth = gridWidth ? gridWidth : "48";

  const totalDays = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  ).getDate();
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);
  daysOfWeek = daysOfWeek?.length
    ? daysOfWeek
    : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const todayDate = new Date().getDate();
  const dayOfWeek = new Date().getDay();
  const skip = Math.abs(dayOfWeek + 7 - (todayDate % 7));
  const skipArray = new Array(skip).fill(0).map((_, i) => i + 1);

  return (
    <div className={cn(["max-w-[500px] mx-auto p-4", className])} {...props}>
      <Card className="p-4 w-fit bg-inherit">
        <div className="p-1 grid grid-cols-7 gap-[1px]">
          {daysOfWeek.map((day, index) => (
            <div
              key={day}
              className={cn([
                `w-10 hover:text-white hover:bg-green-600 ${
                  dayOfWeek === index + 1 ? " text-white bg-green-600" : ""
                } cursor-pointer flex items-center justify-center border border-gray-600 text-sm`,
                gridClassName,
                "aspect-video",
              ])}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="p-1 grid grid-cols-7 gap-[1px]">
          {skipArray.map((_, index) => (
            <div key={index + "skip"}></div>
          ))}
          {days.map((day) => (
            <div
              key={day}
              className={cn([
                `h-10 w-10 hover:text-white hover:bg-green-600 ${
                  todayDate === day ? " text-white bg-green-600" : ""
                } cursor-pointer  flex items-center justify-center border border-gray-500 text-sm`,
              ])}
            >
              {day}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CalendarGrid;
