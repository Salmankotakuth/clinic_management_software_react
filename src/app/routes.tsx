import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { Patients } from "./components/Patients";
import { Appointments } from "./components/Appointments";
import { Doctors } from "./components/Doctors";
import { Billing } from "./components/Billing";
import { Inventory } from "./components/Inventory";
import { Reports } from "./components/Reports";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "patients", Component: Patients },
      { path: "appointments", Component: Appointments },
      { path: "doctors", Component: Doctors },
      { path: "billing", Component: Billing },
      { path: "inventory", Component: Inventory },
      { path: "reports", Component: Reports },
      { path: "*", Component: NotFound },
    ],
  },
]);
