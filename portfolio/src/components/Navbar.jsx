import LinkedIn from "./svgs/LinkedIn";
import ProfilePhoto from "../assets/logo.png";

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
      </div>
    </nav>
  );
};

export default Navbar;
