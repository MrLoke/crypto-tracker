import { useState } from 'react'
import axios from 'axios'
import CoinDetail from 'components/CoinDetail/CoinDetail'
import CryptocurrenciesList from 'components/CryptocurrenciesList/CryptocurrenciesList'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useAppContext } from 'context/AppContext'
import { Container, Select } from './HomePageStyled'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const fetchCryptocurrencies = async (page = 1, currency) => {
  const response = await axios(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
  )
  return response.data
}

const HomePage = () => {
  const queryClient = useQueryClient()
  const [page, setPage] = useState(1)
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
      refetchInterval: 10000,
      staleTime: 1000,
      initialData: () => queryClient.getQueryData('cryptoCurrency'),
    }
  )

  const addMutation = useMutation(
    (currency) =>
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
      ),
    {
      onSuccess: () => queryClient.refetchQueries('cryptoCurrency'),
    }
  )

  const handleUpdateCurrency = async (curr) => {
    addMutation.mutate(currency, {
      onSuccess: () => {
        refetch()
        toggleCurrency(curr)
      },
    })
    toggleCurrency(curr)
  }

  const notifyAdd = (coinName) =>
    toast.success(`${coinName} added to watch list`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  const notifyDelete = (coinName) =>
    toast.error(`${coinName} was deleted from watch list`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  return (
    <Container>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <label htmlFor='select-currency'>Select currency </label>
      <Select
        defaultValue={currency}
        id='select-currency'
        onChange={(e) => {
          handleUpdateCurrency(e.target.value)
        }}>
        <option value='usd'>USD</option>
        <option value='eur'>EUR</option>
        <option value='pln'>PLN</option>
      </Select>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <CryptocurrenciesList />
          {data.map((coin) => (
            <CoinDetail
              key={coin.id}
              coin={coin}
              notifyAdd={notifyAdd}
              notifyDelete={notifyDelete}
            />
          ))}
        </>
      )}
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
    </Container>
  )
}

export default HomePage
