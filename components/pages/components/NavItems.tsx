import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  LayoutDashboard,
  FileText,
  Menu,
  PlusCircle,
  User,
  Edit,
  Trash2,
  CheckCircle2,
  XCircle,
  Clock,
  Settings,
  SquarePenIcon,
  FileIcon,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// interface Props {
//   setActiveTab: React.Dispatch<React.SetStateAction<string>>;
//   activeTab: string;
// }
const NavItems: React.FC = () => (
  <>
    <Link
      //   variant="ghost"
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "w-full justify-start"
      )}
      //   onClick={() => setActiveTab("create")}
      href="/dashboard"
    >
      <LayoutDashboard className="mr-2 h-4 w-4" />
      Overview
    </Link>

    <Link
      //   variant="ghost"
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "w-full justify-start"
      )}
      //   onClick={() => setActiveTab("create")}
      href="/dashboard/reports"
    >
      <FileText className="mr-2 h-4 w-4" />
      Reports
    </Link>
    <Link
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "w-full justify-start"
      )}
      href="/create"
    >
      <SquarePenIcon className="mr-2 h-4 w-4" />
      Write
    </Link>
    <Link
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "w-full justify-start"
      )}
      href="/dashboard/drafts"
    >
      <FileIcon className="mr-2 h-4 w-4" />
      Drafts
    </Link>

    <Link
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "w-full justify-start"
      )}
      href="#"
    >
      <Settings className="mr-2 h-4 w-4" />
      Settings
    </Link>

    <Link
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "w-full justify-start"
      )}
      href="/dashboard/profile"
    >
      <User className="mr-2 h-4 w-4" />
      Profile
    </Link>
  </>
);

export default NavItems;
