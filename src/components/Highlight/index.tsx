import { Container, Subtitle, Title } from './styles';

type HighlightProps = {
  title: string;
  subtitle: string;
};

export function Highlight({ title, subtitle }: HighlightProps) {
  return (
    <Container>
      <Title>Highlight</Title>
      <Subtitle>Subtitle</Subtitle>
    </Container>
  );
}