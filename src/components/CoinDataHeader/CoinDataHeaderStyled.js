import styled from 'styled-components/macro'

export const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiaryText};
  background-image: linear-gradient(
    to bottom,
    #222531,
    #20212b,
    #1d1e25,
    #1a1a20,
    #17171a
  );
  ${({ theme }) => theme.media.md} {
    padding: 2rem 0;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  ${({ theme }) => theme.media.md} {
    width: 50%;
  }
`

export const Rank = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  font-size: ${({ theme }) => theme.size.xs};
  margin-left: 1rem;
  ${({ theme }) => theme.media.md} {
    margin-left: 0;
    font-size: ${({ theme }) => theme.size.s};
  }
`

export const CoinImage = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 1rem;
  border-radius: 50px;
`

export const CoinName = styled.p`
  font-weight: 500;
  padding-right: 1rem;
  font-size: ${({ theme }) => theme.size.s};
  ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.size.m};
  }
`

export const CoinInfo = styled.span`
  display: ${({ mobileHidden }) => (mobileHidden ? 'none' : 'flex')};
  align-items: center;
  font-weight: 500;
  a {
    color: ${({ theme }) => theme.colors.primaryText};
    text-decoration: none;
  }
  ${({ theme }) => theme.media.md} {
    display: flex;
  }
`
