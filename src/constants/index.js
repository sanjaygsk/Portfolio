import Osiz from "../assets/osiz.png";
import MobileStore from "../assets/mobilestore.png";
import OrderEasy from "../assets/ordereasy.png";
import DisneyPlus from "../assets/disney.png";
import Organic from "../assets/orgainc.png";

export const PROFILE_CONTENT = `I am a React Native Developer focused on optimizing app performance and creating reusable UI components. Skilled in cross-platform development for Android, iOS, and Web (PWA) using React Native, Mobx, Redux, and React JS. I aim to deliver high-performance, scalable apps with seamless user experiences and maintainable code. Passionate about improving development processes and enhancing app functionality.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "07/2023 - Present",
    role: "React Native Developer",
    company: "Zoho Corporation",
    companyUrl: "https://www.zoho.com/",
    description: `Modernized legacy code to enhance app performance and built scalable UI components for faster development. Ensured cross-platform consistency across Android, iOS, and Web (PWA), improving overall functionality. Led the React Native upgrade to ensure app stability and feature enhancements. Streamlined the build process to improve development efficiency and release speed. Designed custom solutions for white-label applications, providing tailored products for clients.`,
    technologies: [
      "React Native",
      "React Native Web",
      "Mobx",
      "Build Pipelines",
    ],
  },
  {
    year: "03/2022 - 07/2023",
    role: "React Native Developer",
    company: "Gofrugal Technologies",
    companyUrl: "https://www.gofrugal.com/",
    description: `Developed mobile applications with PWA support using React Native, ensuring seamless performance across platforms. Worked closely with the development team to streamline the build process through Jenkins, improving efficiency and consistency in releases. Utilized Mantis for effective bug tracking and issue management, ensuring quick resolution of technical challenges. Focused on optimizing app performance and user experience throughout the development lifecycle.`,
    technologies: [
      "React Native",
      "React Native Web",
      "Mobx",
      "Mantis",
      "Jenkins",
    ],
  },
  {
    year: "08/2021 - 03/2022",
    role: "React JS Developer",
    company: "Osiz Technologies",
    companyUrl: "https://www.osiztechnologies.com/",
    description: `Gained expertise in Hooks and Redux to improve app functionality and maintainability. Served as the React JS web developer, leveraging web interfaces to build the core features. Focused on delivering efficient and scalable web solutions for seamless user experiences. Collaborated with the team to ensure smooth integration between web. Contributed to enhancing the overall development process by applying best practices and optimizing performance.`,
    technologies: ["React JS", "Redux", "TailwindCSS", "Firebase"],
  },
];

export const PROJECTS = [
  {
    title: "Mobile Store - Mobile App",
    image: MobileStore,
    description:
      "Developed a cross-platform app from scratch, managing API architecture, UI/UX, and end-to-end build processes. Integrated Zoho Pay for payment systems and Zoho Apptics for analytics, streamlining the build flow and improving efficiency by connecting internal and external build machines. Implemented Android & iOS Native SDK integration for the signing page using Kotlin and Swift, and handled Native WebView for payments in the mobile store app.",
    technologies: ["React Native", "Mobx", "Build Pipelines"],
    companyUrl: "https://zakya.com/",
    webUrl: "https://zakya.com/",
    androidUrl: "",
    iosUrl: "",
    projectName: "Zakya",
    isMobileApp: true,
    isReleased: false,
  },
  {
    title: "Mobile Store - PWA",
    image: Organic,
    description:
      "Led the development of reusable UI components and completely revamped the Mobile Store Progressive Web App (PWA) for enhanced performance and scalability. Utilized React Native Web to ensure seamless functionality across devices. Focused on optimizing the app for better speed, responsiveness, and user experience. The improvements significantly boosted app performance and scalability for future updates.",
    technologies: ["React Native", "React Native Web", "Mobx"],
    companyUrl: "https://zakya.com/",
    webUrl: "https://organicstore.zakyastore.com/",
    androidUrl: "",
    iosUrl: "",
    projectName: "Zakya",
    isMobileApp: false,
    isReleased: true,
  },
  {
    title: "OrderEasy - Mobile Apps & PWA",
    image: OrderEasy,
    description:
      "Developed a cross-platform online ordering app integrated with the GoFrugal POS system. Built reusable UI components and implemented key features like Offers, Referral Programs, and Analytics to boost user engagement and improve reporting. The app enhanced overall customer experience and provided valuable insights for better decision-making.",
    technologies: ["React Native", "React Native Web", "Mobx", "Jenkins"],
    companyUrl: "https://www.gofrugal.com/online-ordering-app/",
    webUrl: "https://amulgreen.ordereasyapp.com/",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.gofrugal.ordereasy734023&hl=en_IN",
    iosUrl: "https://apps.apple.com/in/app/amul-green/id1602359988",
    projectName: "OrderEasy",
    isMobileApp: true,
    isReleased: true,
  },
  {
    title: "Fantasy Sports - Web App",
    image: Osiz,
    description:
      "Developed a Dream 11 clone using React JS, focusing on creating reusable components and optimizing code structure. Implemented Redux for efficient state management, enhancing data flow and scalability. Worked on improving user experience and ensuring seamless interaction across the platform.",
    technologies: ["React", "Redux", "CSS", "TailwindCSS", "Firebase"],
    companyUrl: "https://www.osiztechnologies.com/",
    webUrl: "",
    androidUrl: "",
    iosUrl: "",
    projectName: "Osiz Technologies",
    isMobileApp: false,
    isReleased: false,
  },
  {
    title: "Disney Plus Clone - Web App",
    image: DisneyPlus,
    description:
      "Built a Disney Plus clone as a self-learning project to explore modern web technologies. Integrated Firebase for authentication and hosting, used Styled Components for dynamic UI styling, and leveraged Redux Toolkit for efficient state management.",
    technologies: ["React", "Redux", "Styled Components", "Firebase"],
    webUrl: "https://disney.gskkumar.online/",
    companyUrl: "",
    androidUrl: "",
    iosUrl: "",
    projectName: "",
    isMobileApp: false,
    isReleased: true,
  },
];

export const CONTACT = {
  address: "Chennai, Tamil Nadu, India",
  phoneNo: "+91 95243 57221",
  email: "gopigskkumar@gmail.com",
};
