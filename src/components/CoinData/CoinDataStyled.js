import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryCardBg};
  border-radius: 12px;
  padding: 4rem 3rem;
  ${({ theme }) => theme.media.lg} {
    width: 35%;
  }
`

export const CoinName = styled.h2`
  padding-bottom: 1.5rem;
`

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.secondaryText};
`

export const CoinDataInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.size.xs};
  ${({ theme }) => theme.media.lg} {
    font-size: ${({ theme }) => theme.size.s};
  }
`

export const InfoName = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(50, 53, 70);
`

export const CoinPercentage = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isUp, theme }) => (isUp ? theme.colors.green : theme.colors.red)};
`
