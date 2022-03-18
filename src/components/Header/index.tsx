import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <h1>fCmoney</h1>
        <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>


      </Content>
    </Container>
  )
}