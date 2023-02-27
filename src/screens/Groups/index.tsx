import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
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
        ListEmptyComponent={() => (
          <Highlight title="Nenhum grupo encontrado" subtitle="Crie um grupo para começar" />
        )}
      />
    </Container>
  );
}