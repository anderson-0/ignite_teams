import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { EmptyList } from '@components/EmptyList';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { PlayerCard } from '@components/PlayerCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Form, HeaderList, NumPlayers } from './styles';

export function Players() {
  const [team, setTeam] = useState('Team A');
  const [players, setPlayers] = useState(['Joao da Silva']);
  return (
    <Container>
      <Header showBackButton />
      <Highlight title='Nome da Turma' subtitle='adicione a galera e separe os times' />
      <Form>
        <Input placeholder='Nome da pessoa' autoCorrect={false} />
        <ButtonIcon icon='add' type='PRIMARY'/>
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumPlayers>{players.length}</NumPlayers>
      </HeaderList>
      <FlatList 
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={()=>{}} />
        )}
        ListEmptyComponent={() => <EmptyList message='Não há pessoas no time'/>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 20 },
          players.length === 0 && { flex: 1 }
        ]}
      />
      <Button title='Remover turma' type='SECONDARY'/>
    </Container>
  );
}