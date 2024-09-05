
import { Navigate } from "react-router-dom";
import PrivateRoutes from "../components/privateRouter";
import LayoutDefault from "../layouts/LayoutDefault";
import Company from "../pages/Company";
import CompanyDetail from "../pages/CompanyDetail";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import InfoCompany from "../pages/InfoCompany";
import JobDetail from "../pages/JobDetail";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Register";
import Search from "../pages/Search";



export const routes = [
      {
            path: "/",
            element: <LayoutDefault />,
            children: [
                  {
                        index: true,
                        element: <Home />
                  },
                  {
                        path: "login",
                        element: <Login />
                  },
                  {
                        path: "register",
                        element: <Register />
                  },
                  {
                        path: "logout",
                        element: <Logout />
                  },
                  {
                        path: "search",
                        element: <Search />
                  },
                  {
                        path: "job/:id",
                        element: <JobDetail />
                  },
                  {
                        path: "company",
                        element: <Company />
                  },
                  {
                        path: "company/:id",
                        element: <CompanyDetail />
                  },
                  {
                        path: "*",
                        element: <Navigate to="/" />
                  }       
            ]
      },
      {
            element: <PrivateRoutes />,
            children: [
                  {
                        path: "admin",
                        element: <Dashboard />
                  },
                  {
                        path: "info-company",
                        element: <InfoCompany />
                  },
                  // {
                  //       path: "job-manage",
                  //       element: <JobManage />
                  // },
                  // {
                  //       path: "create-job",
                  //       element: <CreateJob />
                  // },
                  // {
                  //       path: "detail-job/:id",
                  //       element: <JobDetailAdmin />
                  // },
                  // {
                  //       path: "cv-manage",
                  //       element: <CVManage />
                  // },
                  // {
                  //       path: "detail-cv/:id",
                  //       element: <CVDetail />
                  // }
            ]
      }
]