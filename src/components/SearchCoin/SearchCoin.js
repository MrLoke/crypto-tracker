import { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import Autosuggest from 'react-autosuggest'
import './SearchCoin.css' // specifics styles in normal file css for react-autosuggest library instead of styled components

const SearchCoin = () => {
  const [value, setValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [coins, setCoins] = useState([])
  const history = useHistory()

  useEffect(() => {
    const getSuggestionszAPI = async (value) => {
      try {
        const res = await axios(`https://api.coingecko.com/api/v3/coins/list`)
        setCoins(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    getSuggestionszAPI()
  }, [])

  const getSuggestionValue = (suggestion) => suggestion.name

  const renderSuggestion = (suggestion) => {
    return (
      <div onClick={() => history.push(`/coin/${suggestion.id}`)}>
        <p>{suggestion.name}</p>
      </div>
    )
  }

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0
      ? []
      : coins
          .filter(
            (coin) =>
              coin.name.toLowerCase().slice(0, inputLength) === inputValue
          )
          .slice(0, 15) // display 15 results... show all btn
  }

  const handleOnChange = (e, { newValue }) => {
    setValue(newValue)
  }

  const onSuggestionsFetchRequested = async ({ value }) => {
    console.log(value)
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const inputProps = {
    placeholder: 'e.g. Dogecoin',
    value,
    onChange: handleOnChange,
  }

  return (
    <>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </>
  )
}

export default SearchCoin
