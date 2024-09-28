// "use client";
// import { DashboardSidebar } from "./Sidebar";
// import { useSearchParams } from "next/navigation";
// import { useEffect } from "react";
// import { dashboardRouteHandler } from "./route";
// import ProtectedHeader from "../components/ProtectedHeader";
import DashboardContent from "../components/DashboardContent";
// import PromotionalBanner from "./PromotionalBanner";
interface Props {
  searchParams: {
    route: string;
  };
}

async function Dashboard(props: Props) {
  // const { searchParams } = props;
  // let routeName = searchParams?.route;
  // console.log(routeName);

  // return <>{dashboardRouteHandler(routeName)}</>;
  return <DashboardContent />;
}
export default Dashboard;
