import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./components/layout/MainLayout";
import { useState, useEffect } from "react";

import DairyLoadingAnimation from "./components/ui/Loading";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import AboutSection from "./pages/About";
import ProjectsSection from "./pages/Projects";
import FireServicePage from "./pages/FireService";

const Home = lazy(() => import("./pages/Home"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

// Page wrapper with scroll animations
const AnimatedPageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

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
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Outlet />
            </MainLayout>
          }
        >
          <Route 
            index 
            element={
              <AnimatedPageWrapper>
                <Home />
              </AnimatedPageWrapper>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <AnimatedPageWrapper>
                <Contact />
              </AnimatedPageWrapper>
            } 
          />
          <Route 
            path="/about" 
            element={
              <AnimatedPageWrapper>
                <AboutSection />
              </AnimatedPageWrapper>
            } 
          />
          <Route 
            path="/project" 
            element={
              <AnimatedPageWrapper>
                <ProjectsSection />
              </AnimatedPageWrapper>
            } 
          />
          <Route
            path="/fire-service"
            element={
              <AnimatedPageWrapper>
                <FireServicePage />
              </AnimatedPageWrapper>
            }
          />
        </Route>
        <Route
          path="/404"
          element={
            <MainLayout>
              <AnimatedPageWrapper>
                <NotFound />
              </AnimatedPageWrapper>
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <MainLayout>
              <AnimatedPageWrapper>
                <NotFound />
              </AnimatedPageWrapper>
            </MainLayout>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
