import styled from 'styled-components'

export const StyledUserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2.8125rem 0rem;
  gap: 4.375rem;
  
  > h1 {
    width: 55%;
    color: var(--color-white);
  }
  
  > p {
    text-align: end;
    width: 45%;
    color: var(--color-grey-1);
  }
`
