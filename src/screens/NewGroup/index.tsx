import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { SafeArea } from '@screens/NewGroup/styles';
import { Container, Content, Icon } from './styles';
export function NewGroup() {
  return (
    <SafeArea>
      <Container>
        <Header showBackButton />
        <Content>
          <Icon />
          <Highlight 
            title="Nova Turma"
            subtitle="Crie uma turma para adicionar pessoas"
          />
          <Input placeholder='Nome da Turma'/>
          <Button title="Cadastrar turma" style={{marginTop: 16}} />
        </Content>
        
      </Container>
    </SafeArea>
  );
}