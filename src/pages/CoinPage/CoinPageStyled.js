import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5rem;
  ${({ theme }) => theme.media.lg} {
    max-width: 1280px;
    margin: 5rem auto;
    flex-direction: row;
  }
`
