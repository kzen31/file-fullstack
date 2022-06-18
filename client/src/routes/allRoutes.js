import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"


/////////////////////////////////
import PageUsers from "pages/Users/PageUsers/index"
import RegisterUsers from "pages/Users/Register/RegisterUser"
import TableCatering from "pages/Report/Catering/Complaint/TableCatering"
import TableRatingCatering from "pages/Report/Catering/RatingCatering/TableRatingCatering"
import TableHousekeeping from "pages/Report/Housekeeping/Complaint/TableHousekeeping"
import TableHousekeepingTask from "pages/Report/Housekeeping/Task/TableHousekeepingTask"
import TableLaundry from "pages/Report/Laundry/TableLaundry"
import TableMaintenance from "pages/Report/Maintenance/Complaint/TableMaintenance"
import TableMaintenanceTask from "pages/Report/Maintenance/Task/TableMaintenanceTask"

import FastCatering from "pages/Dashboard/CateringDashboard/index"
import FastHousekeeping from "pages/Dashboard/HousekeepingDashboard/index"
import FastLaundry from "pages/Dashboard/LaundryDashboard/index"
import FastMaintenance from "pages/Dashboard/MaintenanceDashboard/index"

/////////////////////////////////

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

//  // Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login"
import Register1 from "../pages/AuthenticationInner/Register"
import Recoverpw from "../pages/AuthenticationInner/Recoverpw"
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen"

// Dashboard
import Dashboard from "../pages/Dashboard/MainDashboard/index"

//Charts
import ChartsAppex from "../pages/Charts/charts-appex";
import ChartsChartist from "../pages/Charts/charts-chartist";
import ChartsJs from "../pages/Charts/charts-chartjs";
import ChartsKnob from "../pages/Charts/charts-knob";
import ChartsC3 from "../pages/Charts/charts-c3";
import ChartsSparkLine from "../pages/Charts/charts-sparkline";

//Tables
import BasicTables from "../pages/Tables/BasicTables"
import DatatableTables from "../pages/Tables/DatatableTables"
import ResponsiveTables from "../pages/Tables/ResponsiveTables"
import EditableTables from "../pages/Tables/EditableTables"

// Forms
import FormElements from "../pages/Forms/FormElements"
import FormAdvanced from "../pages/Forms/FormAdvanced"
import FormEditors from "../pages/Forms/FormEditors"
import FormValidations from "../pages/Forms/FormValidations"
import FormUpload from "../pages/Forms/FormUpload"
import FormXeditable from "../pages/Forms/FormXeditable"

//Extra Pages
import PagesTimeline from "../pages/Extra Pages/pages-timeline";
import PagesInvoice from "../pages/Extra Pages/pages-invoice";
import PagesDirectory from "../pages/Extra Pages/pages-directory";
import PagesBlank from "../pages/Extra Pages/pages-blank";
import Pages404 from "../pages/Extra Pages/pages-404";
import Pages500 from "../pages/Extra Pages/pages-500";

const userRoutes = [
  { path: "/dashboard", component: Dashboard },



  ///////////////////////////////
  { path: "/page-users", component: PageUsers },
  { path: "/register-users", component: RegisterUsers },
  { path: "/table-catering", component: TableCatering },
  { path: "/table-rating", component: TableRatingCatering },
  { path: "/table-housekeeping", component: TableHousekeeping },
  { path: "/task-housekeeping", component: TableHousekeepingTask },

  { path: "/table-laundry", component: TableLaundry },
  { path: "/table-maintenance", component: TableMaintenance },
  { path: "/task-maintenance", component: TableMaintenanceTask },

  { path: "/info-catering", component: FastCatering },
  { path: "/info-laundry", component: FastLaundry },
  { path: "/info-housekeeping", component: FastHousekeeping },
  { path: "/info-maintenance", component: FastMaintenance },



  ///////////////////////////////



  // // //profile
  { path: "/profile", component: UserProfile },


  // //Charts
  { path: "/apex-charts", component: ChartsAppex },
  { path: "/charts-chartist", component: ChartsChartist },
  { path: "/charts-chartjs", component: ChartsJs },
  { path: "/charts-knob", component: ChartsKnob },
  { path: "/charts-c3", component: ChartsC3 },
  { path: "/sparkline-charts", component: ChartsSparkLine },
  
  // // Tables
  { path: "/tables-basic", component: BasicTables },
  { path: "/tables-datatable", component: DatatableTables },
  { path: "/tables-responsive", component: ResponsiveTables },
  { path: "/tables-editable", component: EditableTables },

  // // Forms
  { path: "/form-elements", component: FormElements },
  { path: "/form-advanced", component: FormAdvanced },
  { path: "/form-editors", component: FormEditors },
  { path: "/form-uploads", component: FormUpload },
  { path: "/form-validation", component: FormValidations },
  { path: "/form-xeditable", component: FormXeditable },

  // //Extra Pages
  { path: "/pages-timeline", component: PagesTimeline },
  { path: "/pages-invoice", component: PagesInvoice },
  { path: "/pages-directory", component: PagesDirectory },
  { path: "/pages-blank", component: PagesBlank },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },

  { path: "/pages-404", component: Pages404 },
  { path: "/pages-500", component: Pages500 },

  // Authentication Inner
  { path: "/pages-login", component: Login1 },
  { path: "/pages-register", component: Register1 },
  { path: "/page-recoverpw", component: Recoverpw },
  { path: "/auth-lock-screen", component: LockScreen },
]

export { userRoutes, authRoutes }