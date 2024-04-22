import SideBarIcon from "./SideBarIcon";
import SideBarSocialIcon from "./SideBarSocialIcon";

const App = () => {
  return (
    <nav className="fixed left-0 top-0 h-screen w-12 lg:w-28 bg-stone-950 flex justify-between items-center flex-col">
      <img src="/logo1024_transparent.png" alt="Logo" className="w-28 h-auto" />

      <ul className="w-auto flex flex-col gap-8 lg:gap-10">
        <SideBarIcon
          iconUrl="/home-office-line.svg"
          iconLabel="Kezdés"
          url="/"
        />
        <SideBarIcon iconUrl="/user-line.svg" iconLabel="Rólam" url="/" />
        <SideBarIcon iconUrl="/palette-line.svg" iconLabel="Munkáim" url="/" />
        <SideBarIcon
          iconUrl="/chat-1-line.svg"
          iconLabel="Keress fel"
          url="/"
        />
      </ul>

      <div className="mb-32 sm:mb-12 bg-stone-900 rounded-full px-2 lg:px-3 py-3 lg:py-6 flex flex-col gap-3">
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
