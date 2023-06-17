import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const ButtonSettings = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0 1rem;

  font-family: var(--font-family);
  font-weight: var(--font-weight-1);

  border-radius: var(--border-radius-1);
  transition: 0.7s;

  &:disabled {
    cursor: not-allowed;
  }

  ${({ buttonstyled }) => {
    switch (buttonstyled) {
      case 'primary':
        return css`
          color: var(--color-white);
          background-color: var(--color-primary);
          border: 0.0625rem solid var(--color-primary);

          &:hover {
            background-color: var(--color-primary-hover);
            border: 0.0625rem solid var(--color-primary-hover);
          }
        `

      case 'negative':
        return css`
          color: var(--color-white);
          background-color: var(--color-primary-disable);
          border: 0.0625rem solid var(--color-primary-disable);
        `

      case 'disabled':
        return css`
          color: var(--color-white);
          background-color: var(--color-grey-1);
          border: 0.0625rem solid var(--color-grey-1);

          &:hover {
            background-color: var(--color-grey-2);
            border: 0.0625rem solid var(--color-grey-2);
          }
        `

      case 'default':
        return css`
          color: var(--color-grey-0);
          background-color: var(--color-grey-3);
          border: 0.0625rem solid var(--color-grey-3);

          &:hover {
            background-color: var(--color-grey-2);
            border: 0.0625rem solid var(--color-grey-2);
          }
        `
    }
  }}

  ${({ buttonfont }) => {
    switch (buttonfont) {
      case 'xl':
        return css`
          font-size: var(--font-size-6);
        `
      case 'xl-bold':
        return css`
          font-size: var(--font-size-6);
          font-weight: var(--font-weight-2);
        `
      case 'lg':
        return css`
          font-size: var(--font-size-5);
        `
      case 'lg-bold':
        return css`
          font-size: var(--font-size-5);
          font-weight: var(--font-weight-2);
        `
      case 'md':
        return css`
          font-size: var(--font-size-4);
        `
      case 'md-bold':
        return css`
          font-size: var(--font-size-4);
          font-weight: var(--font-weight-2);
        `
      case 'sm':
        return css`
          font-size: var(--font-size-3);
        `
      case 'sm-bold':
        return css`
          font-size: var(--font-size-3);
          font-weight: var(--font-weight-2);
        `
    }
  }}

  ${({ buttonsize }) => {
    switch (buttonsize) {
      case 'max-lg':
        return css`
          width: 100%;
          height: 3rem;
        `
      case 'max-sm':
        return css`
          height: 2.5rem;
        `
      case 'min-lg':
        return css`
          width: 100%;
          height: 2rem;
        `

      case 'min-sm':
        return css`
          height: 2rem;
        `

      case 'plus':
        return css`
          font-size: var(--font-size-8);
          padding: 0rem 0.5rem 0.125rem;
          height: 2rem;
        `
    }
  }}
`

export const StyledButton = styled.button`
  ${ButtonSettings};
`

export const StyledLink = styled(Link)`
  ${ButtonSettings};
`
