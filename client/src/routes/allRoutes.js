import React from "react"
import { Redirect } from "react-router-dom"

import PageUsers from "pages/Users/PageUsers/index"
import RegisterUsers from "pages/Users/Register/RegisterUser"
import TableCatering from "pages/Report/Catering/Complaint/TableCatering"
import TableRatingCatering from "pages/Report/Catering/RatingCatering/TableRatingCatering"
import TableHousekeeping from "pages/Report/Housekeeping/Complaint/TableHousekeeping"
import TableHousekeepingTask from "pages/Report/Housekeeping/Task/TableHousekeepingTask"
import TableLaundry from "pages/Report/Laundry/TableLaundry"
import TableMaintenance from "pages/Report/Maintenance/Complaint/TableMaintenance"
import TableMaintenanceTask from "pages/Report/Maintenance/Task/TableMaintenanceTask"

import InfoCatering from "pages/Dashboard/CateringDashboard/index"
import InfoHousekeeping from "pages/Dashboard/HousekeepingDashboard/index"
import InfoLaundry from "pages/Dashboard/LaundryDashboard/index"
import InfoMaintenance from "pages/Dashboard/MaintenanceDashboard/index"

import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"

import Dashboard from "../pages/Dashboard/MainDashboard/index"
import LandingPage from "pages/LandingPage"

import Pages404 from "../pages/Extra Pages/pages-404";
import Pages500 from "../pages/Extra Pages/pages-500";

const userRoutes = [
  
  { path: "/page-users", component: PageUsers },
  { path: "/register-users", component: RegisterUsers },
  { path: "/table-catering", component: TableCatering },
  { path: "/table-rating", component: TableRatingCatering },
  { path: "/table-housekeeping", component: TableHousekeeping },
  { path: "/task-housekeeping", component: TableHousekeepingTask },
  
  { path: "/table-laundry", component: TableLaundry },
  { path: "/table-maintenance", component: TableMaintenance },
  { path: "/task-maintenance", component: TableMaintenanceTask },
  
  { path: "/info-catering", component: InfoCatering },
  { path: "/info-laundry", component: InfoLaundry },
  { path: "/info-housekeeping", component: InfoHousekeeping },
  { path: "/info-maintenance", component: InfoMaintenance },
  
  { path: "/dashboard", component: Dashboard },

  { path: "/", exact: true, component: () => <Redirect to="/home" /> },
]

const authRoutes = [
  { path: "/home", component: LandingPage },
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/register", component: Register },


  { path: "/pages-404", component: Pages404 },
  { path: "/pages-500", component: Pages500 },
]

export { userRoutes, authRoutes }