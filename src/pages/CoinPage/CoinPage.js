import { useEffect, useState } from 'react'
import CoinDataHeader from 'components/CoinDataHeader/CoinDataHeader'
import CoinData from 'components/CoinData/CoinData'
import HistoryChart from 'components/HistoryChart/HistoryChart'
import coinGecko from 'apis/coinGecko'
import { useParams } from 'react-router'
import { useAppContext } from 'context/AppContext'
import { Container } from './CoinPageStyled'

const CoinPage = () => {
  const { id } = useParams()
  const { currency } = useAppContext()
  const [coinData, setCoinData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const formatData = (data) => {
    return data.map((el) => {
      return {
        x: el[0],
        y: el[1].toFixed(2),
      }
    })
  }

  useEffect(() => {
    // Why i don't use useQueries for multiple async api call ?!
    // I have some issues with it... unlucky XD
    const fetchData = async () => {
      setIsLoading(true)
      const [day, week, year, detail] = await Promise.all([
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: currency,
            days: '1',
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: currency,
            days: '7',
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: currency,
            days: '365',
          },
        }),
        coinGecko.get('/coins/markets/', {
          params: {
            vs_currency: currency,
            ids: id,
          },
        }),
      ])

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      })
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <>
      {!isLoading ? (
        <>
          <CoinDataHeader data={coinData.detail} />
          <Container>
            <HistoryChart data={coinData} />
            <CoinData data={coinData.detail} />
          </Container>
        </>
      ) : null}
    </>
  )
}

export default CoinPage
