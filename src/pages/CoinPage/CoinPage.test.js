import axios from 'axios'
import CoinPage from 'pages/CoinPage/CoinPage'
import { render, fire, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import marketChartJson from '__mocks__/marketChart.json'

describe('render component', () => {
  test('test render text', async () => {
    const { getByText } = render(<CoinPage />)
    expect(getByText('Bitcoin')).toBeInTheDocument()
  })

  test('test render cryptocurrency name from api', async () => {
    const { getByText } = render(<CoinPage />)
    const cryptoName = await waitFor(() => getByText('Bitcoin'))
    expect(cryptoName).toBeInTheDocument()
  })
})

// describe('test api call', async () => {
//   beforeEach(() => {
//     jest.resetAllMocks()
//     jest.spyOn(axios, 'get').mockImplementation(() =>
//       Promise.resolve({
//         json: () => Promise.resolve(marketChartJson),
//       })
//     )
//   })

//   test('call api for market chart', async () => {
//     const { getByText } = render(<CoinPage />)
//   })

//   test('renders error when json is invalid', async () => {
//     const { getByText } = render(<CoinPage />)
//   })
// })
