import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Container, Content, Icon } from './styles';
export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight 
          title="Nova Turma"
          subtitle="Crie uma turma para adicionar pessoas"
        />
        <Input />
        <Button title="Cadastrar turma" style={{marginTop: 16}} />
      </Content>
      
    </Container>
  );
}