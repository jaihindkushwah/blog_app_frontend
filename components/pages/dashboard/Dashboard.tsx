import DashboardContent from "../components/DashboardContent";
interface Props {
  searchParams: {
    route: string;
  };
}

async function Dashboard(props: Props) {
  return <DashboardContent />;
}
export default Dashboard;
