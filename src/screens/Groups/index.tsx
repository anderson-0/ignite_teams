import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles';


export function Groups() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Highlight" subtitle="Subtitle" />
    </Container>
  );
}