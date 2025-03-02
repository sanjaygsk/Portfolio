import LinkedIn from "./svgs/LinkedIn";
import ProfilePhoto from "../assets/logo.png";
import DailyDev from "./svgs/DailyDev";
import Github from "./svgs/Github";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" area-label="Home">
          <img src={ProfilePhoto} className="mx-2" width={70} height={70} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sanjay-gopinathan"
          target="_blank"
          rel="noopener noreferrer"
          area-label="Linked In"
        >
          <LinkedIn />
        </a>
        <a
          href="https://github.com/sanjaygsk"
          target="_blank"
          rel="noopener noreferrer"
          area-label="Linked In"
        >
          <Github />
        </a>
        <a
          href="https://dly.to/mbsMLX6KLlk"
          target="_blank"
          rel="noopener noreferrer"
          area-label="Linked In"
        >
          <DailyDev />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
