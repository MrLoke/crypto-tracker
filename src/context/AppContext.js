import { useState, useEffect, useContext, createContext } from 'react'

const AppContext = createContext()

const currencies = ['usd', 'eur', 'pln']

export const AppCtxProvider = ({ children }) => {
  const [currency, setCurrency] = useState(
    () => localStorage.getItem('currency') || 'usd' // useState lazy initialization trick
  )
  const [watchList, setWatchList] = useState(
    () => localStorage.getItem('watchList')?.split(',') || []
  )

  useEffect(() => {
    localStorage.setItem('currency', currency)
    localStorage.setItem('watchList', watchList)
  }, [currency, watchList])

  const toggleCurrency = (currentCurrency) => {
    setCurrency(currentCurrency)
  }

  const handleAddCoin = (coin) => {
    if (watchList.indexOf(coin) === -1) {
      setWatchList([...watchList, coin])
    }
  }

  const handleRemoveCoin = (coin) => {
    setWatchList(watchList.filter((el) => el !== coin))
  }

  const value = {
    watchList,
    handleAddCoin,
    handleRemoveCoin,
    currency,
    toggleCurrency,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  return useContext(AppContext)
}
