import LoadingFullScreen from "components/LoadingFullScreen";
import ROUTERS_PATHS from "consts/router-paths";
import MainLayout from "layouts/MainLayout";
import React, { Fragment, lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export interface IRoutesState {
  exact?: boolean;
  path?: string;
  guard?: React.FC<any>;
  layout?: React.FC<any>;
  component?: any;
  routes?: IRoutesState[];
}

export const renderRoutes = (routes: IRoutesState[]) => (
  <Suspense fallback={<LoadingFullScreen />}>
    <Routes>
      {routes.map((route, i) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;
        return <Route key={i} path={route.path} element={<Layout>{route.routes ? renderRoutes(route.routes) : <Component />}</Layout>} />;
      })}
    </Routes>
  </Suspense>
);

const routes: IRoutesState[] = [
  {
    path: ROUTERS_PATHS.ALL,
    layout: MainLayout,
    routes: [
      {
        path: ROUTERS_PATHS.HOME,
        component: lazy(() => import("pages/Home")),
      },
      {
        path: "*",
        component: () => <Navigate to={ROUTERS_PATHS.NOT_FOUND} replace />,
      },
    ],
  },
];

export default routes;
