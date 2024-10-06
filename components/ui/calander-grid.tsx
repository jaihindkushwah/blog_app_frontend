import { Card } from "./card";

const CalendarGrid = () => {
  const totalDays = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  ).getDate();
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const todayDate = new Date().getDate();
  const dayOfWeek = new Date().getDay();
  const skip = Math.abs(dayOfWeek + 7 - (todayDate % 7));
  const skipArray = new Array(skip).fill(0).map((_, i) => i + 1);

  return (
    <div className="max-w-[500px] mx-auto p-4">
      <Card className="p-4 bg-inherit">
        <div className="p-1 grid grid-cols-7 gap-[1px]">
          {daysOfWeek.map((day, index) => (
            <div
              key={day}
              className={`w-12 hover:text-white hover:bg-green-600 ${
                dayOfWeek === index + 1 ? " text-white bg-green-600" : ""
              } cursor-pointer h-9 flex items-center justify-center border border-gray-600 text-sm`}
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
              className={`w-12 hover:text-white hover:bg-green-600 ${
                todayDate === day ? " text-white bg-green-600" : ""
              } cursor-pointer h-12 flex items-center justify-center border border-gray-500 text-sm`}
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
