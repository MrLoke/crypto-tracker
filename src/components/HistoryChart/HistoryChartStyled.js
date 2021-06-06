import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5rem;
  ${({ theme }) => theme.media.lg} {
    width: 65%;
    margin-right: 5rem;
  }
`

export const ChooseTimeLine = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 0;
  border-radius: ${({ theme }) => theme.utils.smallRadius};
  width: 90%;
  margin: 0 auto;
`

export const TimeLineBtn = styled.button`
  border: none;
  outline: none;
  background-color: rgba(23, 25, 36);
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 1rem;
  padding: 1rem;
  border-radius: 12px;
  font-size: ${({ theme }) => theme.size.xxs};
`

export const CurrentTimeLine = styled.h3`
  text-align: center;
  padding: 1rem 0 2rem 0;
`
