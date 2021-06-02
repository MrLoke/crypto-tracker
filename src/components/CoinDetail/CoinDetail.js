import { AiOutlineCaretUp } from 'react-icons/ai'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { useAppContext } from 'context/AppContext'
import {
  Container,
  Rank,
  CoinImg,
  CoinInfo,
  CoinPercentage,
} from './CoinDetailStyled'

const CoinDetail = ({ coin }) => {
  const { currency } = useAppContext()

  return (
    <Container key={coin.id}>
      <AiOutlineStar size='2rem' />
      <Rank>{coin.market_cap_rank}</Rank>
      <CoinImg src={coin.image} alt='' width='60' height='60' />
      <CoinInfo>
        {coin.name}, {coin.symbol.toUpperCase()}
      </CoinInfo>
      <CoinInfo>
        {coin.current_price.toLocaleString('en-EN', {
          style: 'currency',
          currency: currency,
        })}
      </CoinInfo>
      {coin.price_change_percentage_24h < 0 ? (
        <CoinInfo mobileHidden>
          <CoinPercentage>
            <AiOutlineCaretDown size='2rem' />
            {coin.price_change_percentage_24h.toFixed(2)}%
          </CoinPercentage>
        </CoinInfo>
      ) : (
        <CoinInfo mobileHidden>
          <CoinPercentage isUp>
            <AiOutlineCaretUp size='2rem' />
            {coin.price_change_percentage_24h.toFixed(2)}%
          </CoinPercentage>
        </CoinInfo>
      )}
      <CoinInfo mobileHidden>
        {coin.total_volume.toLocaleString('en-EN', {
          style: 'currency',
          currency: currency,
        })}
      </CoinInfo>
      <CoinInfo mobileHidden>
        {coin.market_cap.toLocaleString('en-EN', {
          style: 'currency',
          currency: currency,
        })}
      </CoinInfo>
    </Container>
  )
}

export default CoinDetail
