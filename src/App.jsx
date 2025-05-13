import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SubscriptionPlan from "./components/SubscriptionPlan";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <SubscriptionPlan />
      <AboutUs />
    </>
  );
}

export default App;
