import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import CalendarGrid from "@/components/ui/calander-grid";
import NavItems from "./NavItems";
import DashboardUserProfile from "./DashboardUserProfile";

interface Props {
  children?: React.ReactNode;
}
export default function DashboardPage({ children }: Props) {
  return (
    <div className="flex h-full ">
      {/* Sidebar for desktop */}
      <aside className="hidden  md:flex flex-col w-[200px]  p-4 shadow-lg">
        <nav className="space-y-2 sticky top-16">
          <NavItems />
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 overflow-auto">
        <div className="md:hidden mb-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[300px]">
              <nav className="flex flex-col space-y-2 mt-4">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="grid grid-cols-5 ">
          <div className="lg:col-span-3 col-span-5">{children}</div>
          <div className="col-span-2 top-0 relative h-full lg:flex items-center flex-col hidden ">
            <DashboardUserProfile />
            {/* <CalendarGrid
              className="sticky top-16 "
              daysOfWeek={["M", "T", "W", "T", "F", "S", "S"]}
            /> */}
          </div>
        </div>
      </main>
    </div>
  );
}
