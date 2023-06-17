import { StyledParagraph, StyledTittleH3 } from '../../styles/typography'
import { StyledCard } from './styles'

export const CardsList = ({ title, level }) => {
  return (
    <StyledCard>
      <StyledTittleH3>{title}</StyledTittleH3>
      <StyledParagraph>Level {level}</StyledParagraph>
    </StyledCard>
  )
}
