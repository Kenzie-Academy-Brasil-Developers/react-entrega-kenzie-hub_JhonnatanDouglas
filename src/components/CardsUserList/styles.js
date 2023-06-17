import styled from 'styled-components'

export const StyledCard = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 3rem;
  margin: 0.75rem 0rem;
  padding: 0rem 0.75rem;

  background-color: var(--color-grey-3);
  border: 0.125rem solid var(--color-grey-3);
  border-radius: var(--border-radius-1);

  transition: 0.7s;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-2);
    border: 0.125rem solid var(--color-grey-2);
  }

  h3 {
    color: var(--color-grey-0);
  }

  p {
    color: var(--color-grey-1);
  }
`
