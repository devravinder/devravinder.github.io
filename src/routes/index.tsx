import PageLoader from "components/PageLoader";
import MainLayout from "layout/MainLayout";
import { ElementType, lazy, Suspense } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component {...props} />
    </Suspense>
  );
};

const EMPTY_PATH = "";
const ANY_MATCH = "*";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: EMPTY_PATH, element: <HomePage /> },
        {
          path: "/projects",
          element: <ProjectsPage />,
        },
        {
          path: "/projects/:id",
          element: <ProjectDetailsPage />,
        },
      ],
    },
    {
      path: "/spin",
      element: <PageLoader />,
    },

    { path: "not-found", element: <Page404></Page404> },
    { path: ANY_MATCH, element: <Navigate to={"not-found"} replace /> },
  ]);

  return <RouterProvider router={router} />;
}

// main layout pages
const HomePage = Loadable(lazy(() => import("pages/home/HomePage")));
const ProjectsPage = Loadable(
  lazy(() => import("pages/projects/ProjectsPage")),
);
const ProjectDetailsPage = Loadable(
  lazy(() => import("pages/projects/details/ProjectDetailsPage")),
);

// error pages
const Page404 = Loadable(lazy(() => import("pages/error/Page404")));
