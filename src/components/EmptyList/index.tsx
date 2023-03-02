import { Container, Message, Title } from './styles';

type EmptyListProps = {
  title?: string;
  message: string;
};

export function EmptyList({ title, message }: EmptyListProps) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Message>{message}</Message>
    </Container>
  )
}