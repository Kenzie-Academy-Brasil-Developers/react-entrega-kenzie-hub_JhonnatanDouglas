import { useState } from 'react'
import {
  StyledContainer,
  StyledHeaderContainer,
  StyledNavContainer,
} from '../../styles/grid'
import { HeaderDefault } from '../../components/HeaderDefault'
import { StyledUserHeader } from '../../components/HeaderUser'
import { EmptyUserList } from '../../components/EmptyUserList'
import { CardsList } from '../../components/CardsUserList'


export const DashboardPage = () => {
  const [cardList, setCardList] = useState(false)

  return (
    <>
      <StyledNavContainer>
        <HeaderDefault />
      </StyledNavContainer>

      <StyledHeaderContainer>
        <div>
          <StyledUserHeader />
        </div>
      </StyledHeaderContainer>

      <StyledContainer>
        {cardList ? (
          <ul>
            <CardsList title='Modulo' level='2' />
            <CardsList title='Modulo' level='4' />
            <CardsList title='Modulo' level='5' />
            <CardsList title='Modulo' level='1' />
          </ul>
        ) : (
          <EmptyUserList />
        )}
      </StyledContainer>
    </>
  )
}
