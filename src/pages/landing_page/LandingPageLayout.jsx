import React from "react";
import {
  About,
  MainSection,
  Navbar,
  Services,
  Projects,
  Reviews,
  Discussion,
  MemeberShip,
  Footer,
  ContactUs,
} from "./contant";

const LandingPageLayout = () => {
  return (
    <div className="">
      <MainSection />
      <About />
      <Services />
      <Projects />
      <Reviews />
      <MemeberShip />
      <Discussion />
      <ContactUs />
    </div>
  );
};

export default LandingPageLayout;
