import NotFound from "@/components/NotFound";
import DashboardContent from "../components/DashboardContent";
import Leaderboard from "../leaderboard/Leaderboard";
import ProblemExplore from "../programming/ProblemExplore";
import LiveProblems from "../programming/LiveProblems";

const allDashboardRoute = [
  {
    name: "dashboard",
    component: <DashboardContent />,
  },
  {
    name: "leaderboard",
    component: <Leaderboard />,
  },
  // {
  //   name: "explore",
  //   component: <ProblemExplore />,
  // },
  {
    name: "livedsachallenges",
    component: <LiveProblems />,
  },
];

export const dashboardRouteHandler = (routeName?: string | null) => {
  if (!routeName) {
    return <DashboardContent />;
  }
  const component = allDashboardRoute.filter(
    (route) => route.name == routeName
  );
  console.log(component);
  if (component.length > 0) {
    return component[0].component;
  }
  return <NotFound />;
};
