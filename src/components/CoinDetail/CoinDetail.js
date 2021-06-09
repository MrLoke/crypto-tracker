import { AiOutlineCaretUp } from 'react-icons/ai'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { useAppContext } from 'context/AppContext'
import {
  Container,
  AddCoinBtn,
  Rank,
  CoinImg,
  CoinInfo,
  CoinPercentage,
} from './CoinDetailStyled'
import { Link } from 'react-router-dom'

const CoinDetail = ({ coin, notifyAdd, notifyDelete }) => {
  const { watchList, currency, handleAddCoin, handleRemoveCoin } =
    useAppContext()

  return (
    <Container key={coin.id}>
      {watchList.includes(coin.id) ? (
        <AddCoinBtn
          onClick={() => {
            handleRemoveCoin(coin.id)
            notifyDelete(coin.name)
          }}>
          <AiFillStar size='2rem' />
        </AddCoinBtn>
      ) : (
        <AddCoinBtn
          onClick={() => {
            handleAddCoin(coin.id)
            notifyAdd(coin.name)
          }}>
          <AiOutlineStar size='2rem' />
        </AddCoinBtn>
      )}
      <Rank>{coin.market_cap_rank}</Rank>
      <CoinImg src={coin.image} alt='' width='60' height='60' />
      <CoinInfo>
        <Link to={`/coin/${coin.id}`}>
          {coin.name}, {coin.symbol.toUpperCase()}
        </Link>
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
