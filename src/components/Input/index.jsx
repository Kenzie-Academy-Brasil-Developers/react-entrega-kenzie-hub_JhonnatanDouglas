import React from 'react'
import { StyledFieldBox, StyledInput, StyledLabel } from '../../styles/form'
import { StyledSpan } from '../../styles/typography'

export const StyledInputLabel = ({
  id,
  label,
  type,
  placeholder,
  error,
  register,
}) => {
  return (
    <StyledFieldBox>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        id={id}
        placeholder={placeholder}
        {...register}
      />
      {error ? (
        <StyledSpan errorMessage={true} sizeText='sm'>
          {error.message}
        </StyledSpan>
      ) : null}
    </StyledFieldBox>
  )
}
