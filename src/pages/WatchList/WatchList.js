import axios from 'axios'
import CryptocurrenciesList from 'components/CryptocurrenciesList/CryptocurrenciesList'
import CoinDetail from 'components/CoinDetail/CoinDetail'
import { useAppContext } from 'context/AppContext'
import { useQuery } from 'react-query'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Wrapper, Container } from './WatchListStyled'

const fetchCryptocurrencies = async (currency, watchList) => {
  const response = await axios(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${watchList}&order=market_cap_desc`
  )
  return response.data
}

const WatchList = () => {
  const { watchList, currency } = useAppContext()
  const { isLoading, isError, error, data } = useQuery(
    ['watchListCrypto', watchList],
    () => fetchCryptocurrencies(currency, watchList)
  )

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
    <Wrapper>
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
      </Container>
    </Wrapper>
  )
}

export default WatchList
