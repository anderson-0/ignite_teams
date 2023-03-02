import { Button } from '@components/Button';
import { EmptyList } from '@components/EmptyList';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';


export function Groups() {
  const [groups, setGroups] = useState([]);
  return (
    <Container>
      <Header showBackButton />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
        contentContainerStyle={groups.length === 0 ? { flex: 1 } : {
          paddingHorizontal: 24,
          paddingBottom: 24,
        }}
        ListEmptyComponent={() => (
         <EmptyList title="Nenhuma turma encontrada" message="Que tal cadastrar a primeira turma?"/>
        )}
      />
      <Button title="Cadastrar turma" />
    </Container>
  );
}