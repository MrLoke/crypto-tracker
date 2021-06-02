import {
  useState,
  useEffect,
  useContext,
  createContext,
  useReducer,
} from 'react'

// const CurrencyReducer = (state, action) => {
//   switch (action.type) {
//     case 'DELETE_TODO':
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       }
//     case 'ADD_TODO':
//       return {
//         ...state,
//         todos: [action.payload, ...state.todos],
//       }
//     default:
//       return state
//   }
// }

const initialState = {
  todos: [],
}

const AppContext = createContext()

const currencies = ['usd', 'eur', 'pln']

export const AppCtxProvider = ({ children }) => {
  const [currency, setCurrency] = useState(
    () => localStorage.getItem('currency') || 'usd' // useState lazy initialization trick
  )

  useEffect(() => {
    localStorage.setItem('currency', currency)
  }, [currency])

  const toggleCurrency = (currentCurrency) => {
    setCurrency(currentCurrency)
  }

  const value = {
    currency,
    toggleCurrency,
  }

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
