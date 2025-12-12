import { Routes, Route, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./components/layout/MainLayout";
import { useState, useEffect } from "react";

import DairyLoadingAnimation from "./components/ui/Loading";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import AboutSection from "./pages/About";
import ProjectsSection from "./pages/Projects";



const Home = lazy(() => import("./pages/Home"));

// Responsive component wrapper

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Set a timer to hide initial loading after animation completes
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 3000); // Adjust this duration based on your loading animation

    return () => clearTimeout(timer);
  }, []);

  if (isInitialLoading) {
    return <DairyLoadingAnimation />;
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen">
          <DairyLoadingAnimation />
        </div>
      }
    >
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Outlet />
            </MainLayout>
          }
        >
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/project" element={<ProjectsSection />} />
          
        </Route>
        <Route
          path="/404"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
