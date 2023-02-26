import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Title = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
`;