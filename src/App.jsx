import React, { useState } from "react";
import TabBar from "./components/layout/TabBar.jsx";
import Footer from "./components/layout/Footer.jsx";
import WAFloat from "./components/layout/WAFloat.jsx";
import HomeTab from "./components/sections/HomeTab.jsx";
import AboutTab from "./components/sections/AboutTab.jsx";
import ServicesTab from "./components/sections/ServicesTab.jsx";
import PricingTab from "./components/sections/PricingTab.jsx";
import ContactTab from "./components/sections/ContactTab.jsx";

export default function App() {
  const [active, setActive] = useState("home");

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
      case "contact":
        return <ContactTab />;
      default:
        return <HomeTab setActive={switchTab} />;
    }
  };

  return (
    <>
      <TabBar active={active} setActive={switchTab} />
      <main style={{ paddingTop: 60 }} key={active} className="animate-fadeIn">
        {renderTab()}
      </main>
      <Footer setActive={switchTab} />
      <WAFloat />
    </>
  );
}
