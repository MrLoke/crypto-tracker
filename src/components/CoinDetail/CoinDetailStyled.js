import styled from 'styled-components/macro'

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2.5rem 0 2.5rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primaryCardBg};
  font-weight: 500;
  font-size: ${({ theme }) => theme.size.xs};
  ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.size.s};
  }
`

export const Rank = styled.span`
  margin: 0 1.5rem;
`

export const CoinImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
`

export const CoinInfo = styled.span`
  margin: 0 2rem;
  width: 20%;
  display: ${({ mobileHidden }) => (mobileHidden ? 'none' : 'flex')};
  a {
    color: ${({ theme }) => theme.colors.primaryText};
    text-decoration: none;
  }
  ${({ theme }) => theme.media.md} {
    display: flex;
  }
`

export const CoinPercentage = styled.span`
  padding-right: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isUp, theme }) => (isUp ? theme.colors.green : theme.colors.red)};
`
