import { AboutContent } from "./AboutContent";
import pasPoto2 from '../assets/pas-poto-alpin1.jpg';


export default function AboutSection() {
  const aboutData = {
    title: "About",
    heading: "About Me",
    content: [
      "Bachelor of Information Systems from Singaperbangsa Karawang University, specializing in Quality Assurance with a strong foundation in programming, system analysis, and product management. Skilled in analytical thinking, problem-solving, and collaboration within cross-functional teams.",
      "Passionate about ensuring software quality through meticulous testing and continuous improvement, with a proven ability to adapt and contribute to dynamic projects."
    ]
  };

  return (
    <section id="About" className="z-10 flex flex-wrap items-center justify-center object-cover min-h-screen gap-10 px-5 py-24" style={{ backgroundColor: "rgb(254, 245, 239)" }}>
      <img
        loading="lazy"
        src={pasPoto2}
        alt="About section illustration"
        className="object-contain aspect-[0.82] min-w-[240px] w-[513px] max-md:max-w-full"
      />
      <AboutContent {...aboutData} />
    </section>
  );
}
