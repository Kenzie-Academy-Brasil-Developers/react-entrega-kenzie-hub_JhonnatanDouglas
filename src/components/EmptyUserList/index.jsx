import { StyledParagraph, StyledTittleH1 } from '../../styles/typography'
import { StyledEmptyList } from './styles'

export const EmptyUserList = () => {
  return (
    <StyledEmptyList>
      <StyledTittleH1 sizeText='xl' emphasis='bold'>
        Que pena! Estamos em desenvolvimento :&#40;
      </StyledTittleH1>
      <StyledParagraph sizeText='sm'>
        Nossa aplicação está em desenvolvimento, em breve teremos novidades
      </StyledParagraph>
    </StyledEmptyList>
  )
}
