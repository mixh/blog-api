import { useAuth } from "./utils";

import DashboardSetup from "../Components/DashboardSetup";

export default function Dashboard() {
  useAuth();

  return (
    <>
      <DashboardSetup />
    </>
  );
}
