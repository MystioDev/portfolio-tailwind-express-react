import { useState } from "react";
import SideBarIcon from "./SideBarIcon";
import SideBarSocialIcon from "./SideBarSocialIcon";

const App = () => {
  let isAlertSent = false;

  return (
    <nav
      onMouseEnter={(e) => {
        if (!isAlertSent && window.outerWidth < 1024) {
          console.log(
            "The schreen's width is smaller then 1024px. No SideBar animation!"
          );

          isAlertSent = true;

          return;
        }

        if (window.outerWidth < 1024) {
          return;
        }

        e.target.classList.add("w-64");
        e.target.classList.remove("lg:w-28");
      }}
      onMouseLeave={(e) => {
        e.target.classList.remove("w-64");
        e.target.classList.add("lg:w-28");
      }}
      className="group/nav overflow-hidden transition-all fixed left-0 top-0 h-screen w-12 lg:w-28 bg-stone-950 flex justify-between items-center flex-col"
    >
      <img src="/logo1024_transparent.png" alt="Logo" className="w-28 h-auto" />

      <ul className="w-auto flex flex-col gap-8 lg:gap-10">
        <SideBarIcon svgName="HomeIcon" iconLabel="Kezdés" url="/" />

        <SideBarIcon svgName="AboutIcon" iconLabel="Rólam" url="/" />

        <SideBarIcon svgName="ReferencesIcon" iconLabel="Munkáim" url="/" />

        <SideBarIcon svgName="ContactIcon" iconLabel="Keress fel" url="/" />
      </ul>

      <div className="mb-32 sm:mb-12 bg-stone-900 rounded-full px-2 lg:px-3 py-3 lg:py-6 flex flex-col  gap-3 group-hover/nav:flex-row group-hover/nav:lg:py-3 group-hover:lg:px-6">
        <SideBarSocialIcon
          iconUrl="/discord-icon.svg"
          iconLabel="Discord elérhetőség"
          url="/"
          target="_blank"
        />

        <SideBarSocialIcon
          iconUrl="/instagram-icon.svg"
          iconLabel="Instagra elérhetőség"
          url="/"
          target="_blank"
        />

        <SideBarSocialIcon
          iconUrl="/mail-icon.svg"
          iconLabel="E-mail elérhetőség"
          url="/"
          target="_blank"
        />
      </div>
    </nav>
  );
};

export default App;
