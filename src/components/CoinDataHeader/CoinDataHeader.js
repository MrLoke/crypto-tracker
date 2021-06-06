import { AiOutlineStar } from 'react-icons/ai'
import {
  Container,
  InfoContainer,
  Rank,
  CoinImage,
  CoinName,
  CoinInfo,
} from './CoinDataHeaderStyled'

const CoinDataHeader = ({ data }) => {
  return (
    <Container>
      {data ? (
        <>
          <InfoContainer>
            <CoinInfo>
              <Rank>Rank # {data.market_cap_rank}</Rank>
              <CoinImage src={data.image} alt='' />
              <CoinName>
                {data.name}, {data.symbol.toUpperCase()}
              </CoinName>
              <AiOutlineStar size='2rem' />
            </CoinInfo>
          </InfoContainer>
        </>
      ) : null}
    </Container>
  )
}

export default CoinDataHeader
