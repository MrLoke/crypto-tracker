import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CoinNav = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 0;
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const CoinNavItem = styled.li`
  width: 20%;
  text-align: center;
  &:first-child {
    padding-left: 4rem
  }
`

export const CoinDetail = styled.li`
  display: flex;
  align-items: center;
  padding: 2.5rem 0 2.5rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primaryCardBg};
  font-weight: 500;
`

export const Rank = styled.span`
  margin: 0 1.5rem;
`

export const CoinImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: ${({theme})=>theme.utils.bigRadius};
`

export const CoinInfo = styled.span`
  margin: 0 2rem;
  width: 20%;
`

export const CoinPercentage = styled.span`
  padding-right: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isUp, theme }) => (isUp ? theme.colors.green : theme.colors.red)};
`