import { AiOutlineCaretUp } from 'react-icons/ai'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { useAppContext } from 'context/AppContext'
import {
  Container,
  CoinDataInfo,
  CoinName,
  Span,
  InfoName,
  CoinPercentage,
} from './CoinDataStyled'

const CoinData = ({ data }) => {
  const { currency } = useAppContext()

  return (
    <Container>
      {data ? (
        <CoinDataInfo>
          <CoinName>{data.symbol.toUpperCase()} Price Statistics</CoinName>
          <InfoName>
            <Span>Market Cap</Span>
            {data.current_price.toLocaleString('en-EN', {
              style: 'currency',
              currency: currency,
            })}
          </InfoName>

          <InfoName>
            <Span>Volume(24H)</Span>
            {data.total_volume.toLocaleString('en-EN', {
              style: 'currency',
              currency: currency,
            })}
          </InfoName>
          <InfoName>
            <Span>High 24h</Span>
            {data.high_24h.toLocaleString('en-EN', {
              style: 'currency',
              currency: currency,
            })}
          </InfoName>
          <InfoName>
            <Span>Low 24h</Span>
            {data.low_24h.toLocaleString('en-EN', {
              style: 'currency',
              currency: currency,
            })}
          </InfoName>
          <InfoName>
            <Span>Price Change 24h</Span>

            {data.price_change_percentage_24h < 0 ? (
              <div>
                {data.price_change_24h.toLocaleString('en-EN', {
                  style: 'currency',
                  currency: currency,
                })}
                <CoinPercentage>
                  <AiOutlineCaretDown size='2rem' />
                  {data.price_change_percentage_24h.toFixed(2)}%
                </CoinPercentage>
              </div>
            ) : (
              <div>
                {data.price_change_24h.toLocaleString('en-EN', {
                  style: 'currency',
                  currency: currency,
                })}
                <CoinPercentage isUp>
                  <AiOutlineCaretUp size='2rem' />
                  {data.price_change_percentage_24h.toFixed(2)}%
                </CoinPercentage>
              </div>
            )}
          </InfoName>
          <InfoName>
            <Span>Total Supply</Span>
            {data.total_supply?.toLocaleString('en-EN', {
              style: 'currency',
              currency: currency,
            })}
          </InfoName>
          <InfoName>
            <Span>Circulating Supply</Span>
            {data.circulating_supply.toLocaleString('en-EN', {
              style: 'currency',
              currency: currency,
            })}
          </InfoName>
          <InfoName>
            <Span>Fully Diluted Market Cap</Span>
            {data.fully_diluted_valuation?.toLocaleString('en-EN', {
              style: 'currency',
              currency: currency,
            })}
          </InfoName>
        </CoinDataInfo>
      ) : null}
    </Container>
  )
}

export default CoinData
