import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Movie from "./components/pages/Movie";
import Country from "./components/pages/Country";
import NotFount from "./components/pages/NotFount";

const App = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "/movie",
              element: <Movie />,
            },
            {
              path: "/country",
              element: <Country />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFount />,
        },
      ])}
    </>
  );
};

export default React.memo(App);
