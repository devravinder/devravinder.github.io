import { lazy, Suspense, type ElementType } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import Loader from "@/components/Loader";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<Loader/>}>
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
        { path: EMPTY_PATH, element: <OverViewPage /> },

        {
          path: "/experience",
          element: <ExperiencePage />,
        },
        {
          path: "/projects",
          element: <ProjectsPage />,
        },
        {
          path: "/skills",
          element: <SkillsPage />,
        },
        {
          path: "/education",
          element: <EducationPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
    { path: "not-found", element: <Page404 /> },

    { path: ANY_MATCH, element: <Navigate to={"/not-found"} replace /> },
  ]);

  return <RouterProvider router={router} />;
}

// main layout pages
const OverViewPage = Loadable(lazy(() => import("@/pages/overview/OverViewPage")));
const ExperiencePage = Loadable(lazy(() => import("@/pages/experience/ExperiencePage")));
const ProjectsPage = Loadable(lazy(() => import("@/pages/projects/ProjectsPage")));
const SkillsPage = Loadable(lazy(() => import("@/pages/skills/SkillsPage")));
const EducationPage = Loadable(lazy(() => import("@/pages/education/EducationPage")));
const ContactPage = Loadable(lazy(() => import("@/pages/contact/ContactPage")));



const Page404 = Loadable(lazy(() => import("@/pages/Page404")));
