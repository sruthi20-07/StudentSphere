import React, { useState, lazy, Suspense } from "react";
import TabBar from "./components/layout/TabBar.jsx";
import Footer from "./components/layout/Footer.jsx";
import WAFloat from "./components/layout/WAFloat.jsx";
import { usePageSEO } from "./hooks/usePageSEO.js";

const HomeTab = lazy(() => import("./components/sections/HomeTab.jsx"));
const AboutTab = lazy(() => import("./components/sections/AboutTab.jsx"));
const ServicesTab = lazy(() => import("./components/sections/ServicesTab.jsx"));
const PricingTab = lazy(() => import("./components/sections/PricingTab.jsx"));
const ReviewsTab = lazy(() => import("./components/sections/ReviewsTab.jsx"));
const ContactTab = lazy(() => import("./components/sections/ContactTab.jsx"));

export default function App() {
  const [active, setActive] = useState("home");

  usePageSEO(active);

  const switchTab = (id) => {
    setActive(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderTab = () => {
    switch (active) {
      case "home":
        return <HomeTab setActive={switchTab} />;
      case "about":
        return <AboutTab />;
      case "services":
        return <ServicesTab />;
      case "pricing":
        return <PricingTab />;
      case "reviews":
        return <ReviewsTab />;
      case "contact":
        return <ContactTab />;
      default:
        return <HomeTab setActive={switchTab} />;
    }
  };

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-white focus:text-gray-800 focus:shadow-lg">
        Skip to main content
      </a>
      <TabBar active={active} setActive={switchTab} />
      <main
        id="main-content"
        style={{ paddingTop: 60 }}
        key={active}
        className="animate-fadeIn"
        role="main"
        tabIndex={-1}
        aria-label={`${active.charAt(0).toUpperCase() + active.slice(1)} section`}
      >
        <Suspense fallback={null}>{renderTab()}</Suspense>
      </main>
      <Footer setActive={switchTab} />
      <WAFloat />
    </>
  );
}
