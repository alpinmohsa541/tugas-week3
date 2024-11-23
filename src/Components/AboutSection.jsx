import { AboutContent } from "./AboutContent";
import pasPoto from '../assets/pas-poto-alpin2.jpg';


export default function AboutSection() {
  const aboutData = {
    title: "About",
    heading: "About Me",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.",
      "Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r."
    ]
  };

  return (
    <section className="z-10 flex flex-wrap items-center justify-center min-h-screen gap-10 px-5 py-24">
      <img
        loading="lazy"
        src={pasPoto}
        alt="About section illustration"
        className="object-contain aspect-[0.82] min-w-[240px] w-[513px] max-md:max-w-full"
      />
      <AboutContent {...aboutData} />
    </section>
  );
}
