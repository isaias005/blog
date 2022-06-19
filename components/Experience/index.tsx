import { Section } from "../Layout";
import SectionHeader from "../Text/SectionHeader";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <Section>
      <SectionHeader>Experience</SectionHeader>
      <ExperienceCard
        image="/images/newtech.png"
        title="Newtech SRL - 2 years"
        secondaryTitle="Tech Stack"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
        leo faucibus, faucibus justo quis, aliquet urna. Ut efficitur volutpat
        mattis. Phasellus facilisis enim at mauris egestas accumsan placerat id
        ipsum.
      </ExperienceCard>
    </Section>
  );
}
