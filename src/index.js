import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home";
import Page404 from "./pages/404";

const Layout = () => (
    <>
      <Header classname="header" />
      <div className="main-content">
        <Outlet/>
      </div>
      <Footer classname="footer" />
    </>
);


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
