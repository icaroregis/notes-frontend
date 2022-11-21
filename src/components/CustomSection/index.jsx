import { Section } from './style';

export default function CustomSection({ title, children }) {
  return (
    <Section>
      <h2>{title}</h2>
      {children}
    </Section>
  );
}
