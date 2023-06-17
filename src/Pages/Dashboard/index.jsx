import { useState } from 'react'
import { HeaderDefault } from '../../Components/Headers/HeaderDefault'
import { StyledUserHeader } from '../../Components/Headers/UserHeader'
import {
  StyledContainer,
  StyledHeaderContainer,
  StyledNavContainer,
} from '../../styles/grid'
import { EmptyUserList } from '../../Components/EmptyUserList'
import { CardsList } from '../../Components/CardsUserList'

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
