import styled from 'styled-components/macro'

export const Container = styled.main`
  max-width: 1200px;
  margin: 100px auto;
`

export const Select = styled.select`
  padding: 0.5rem 2rem;
  margin-bottom: 2rem;
  cursor: pointer;
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const PaginationBtn = styled.button`
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.brand};
  border: none;
  outline: none;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.size.s};
  cursor: pointer;
  margin: 2rem 1rem;
`
