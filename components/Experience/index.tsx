import { Section } from "../Layout";
import SectionHeader from "../Text/SectionHeader";
import ExperienceList, { ExperienceItem } from "./ExperienceList";
import { SiNextdotjs, SiRedux } from "react-icons/si";
import { DiDocker, DiJenkins, DiNodejsSmall, DiReact } from "react-icons/di";

const experienceItems: ExperienceItem[] = [
  {
    image: "/images/newtech.png",
    title: "Newtech - 2 Years",
    text: "Migrating and Developing different types of web applications using modern web technologies.",
    techStack: [
      <DiReact size={80} key="react" title="React" />,
      <SiRedux size={50} key="redux" title="Redux" />,
      <SiNextdotjs size={50} key="nextjs" title="NextJS" />,
      <DiNodejsSmall size={80} key="nodejs" title="NodeJS" />,
      <DiDocker size={80} key="docker" title="Docker" />,
      <DiJenkins size={80} key="jenkins" title="Jenkins" />,
    ],
  },
  {
    image: "/images/elaniin.png",
    title: "Elaniin - 1 month",
    text: "Developing web applications concentrating on providing high availability and scalability.",
    techStack: [<DiReact size={80} key="react" />],
  },
  {
    image: "/images/gmedia.png",
    title: "GMedia - 3 months",
    text: "Developing websites for marketing and advertising purposes.",
    techStack: [<DiReact size={80} key="react" />],
  },
];

export default function Experience() {
  return (
    <Section>
      <SectionHeader>Experience</SectionHeader>
      <ExperienceList items={experienceItems} />
    </Section>
  );
}
