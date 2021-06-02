import { useState, useEffect } from 'react'
import axios from 'axios'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { AiOutlineCaretUp } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { useSelect, useCombobox } from 'downshift'
import { useAppContext } from 'context/AppContext'
import {
  Container,
  CoinNav,
  CoinDetail,
  CoinNavItem,
  Rank,
  CoinImg,
  CoinInfo,
  CoinPercentage,
} from './CryptocurrenciesListStyled'

const fetchCryptocurrencies = async (page = 1, currency) => {
  const response = await axios(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
  )
  return response.data
}

const CryptocurrenciesList = () => {
  const queryClient = useQueryClient()
  const [page, setPage] = useState(1)
  // const [currency, setCurrency] = useState('usd')
  const { currency, toggleCurrency } = useAppContext()
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    refetch,
    isPreviousData,
  } = useQuery(
    ['cryptoCurrency', page],
    () => fetchCryptocurrencies(page, currency),
    {
      keepPreviousData: true,
    }
  )

  const addMutation = useMutation(
    (currency) =>
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
      ),
    {
      onSuccess: () => queryClient.invalidateQueries('cryptoCurrency'),
    }
  )

  useEffect(() => {
    // fetchCryptocurrencies()
  }, [])

  return (
    <div>
      <button
        onClick={() => {
          addMutation.mutate(currency, {
            onSuccess: () => {
              refetch()
              toggleCurrency('usd')
            },
          })
          toggleCurrency('usd')
        }}>
        usd
      </button>
      <button
        onClick={() => {
          addMutation.mutate(currency, {
            onSuccess: () => {
              refetch()
              toggleCurrency('eur')
            },
          })
          toggleCurrency('eur')
        }}>
        eur
      </button>
      <button
        onClick={() => {
          addMutation.mutate(currency, {
            onSuccess: () => {
              refetch()
              toggleCurrency('pln')
            },
          })
          toggleCurrency('pln')
        }}>
        pln
      </button>
      {console.log(data)}
      <Container>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div style={{width: '100%'}}>
            <CoinNav>
              <CoinNavItem>Name</CoinNavItem>
              <CoinNavItem>Price</CoinNavItem>
              <CoinNavItem>24H Change</CoinNavItem>
              <CoinNavItem>24H Volume</CoinNavItem>
              <CoinNavItem>Market Cup</CoinNavItem>
            </CoinNav>
            {data.map((coin) => (
              <CoinDetail key={coin.id}>
                  <AiOutlineStar size='2.5rem' />
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
                    <CoinInfo>
                      <CoinPercentage>
                        <AiOutlineCaretDown size='2rem' />
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </CoinPercentage>
                    </CoinInfo>
                  ) : (
                    <CoinInfo>
                      <CoinPercentage isUp>
                        <AiOutlineCaretUp size='2rem' />
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </CoinPercentage>
                    </CoinInfo>
                  )}
                  <CoinInfo>
                    {coin.total_volume.toLocaleString('en-EN', {
                      style: 'currency',
                      currency: currency,
                    })}
                  </CoinInfo>
                  <CoinInfo>
                    {coin.market_cap.toLocaleString('en-EN', {
                      style: 'currency',
                      currency: currency,
                    })}
                  </CoinInfo>
              </CoinDetail>
            ))}
          </div>
        )}
      </Container>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}>
        Previous Page
      </button>{' '}
      <span>Current Page: {page}</span>
      <button
        onClick={() => {
          if (!isPreviousData) {
            setPage((old) => old + 1)
          }
        }}
        disabled={isPreviousData}>
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{' '}
    </div>
  )
}

export default CryptocurrenciesList
