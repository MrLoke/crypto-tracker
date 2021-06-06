import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { chartStyles, chartOptions } from 'chartConfig/chartConfig'
import {
  Container,
  ChooseTimeLine,
  TimeLineBtn,
  CurrentTimeLine,
} from './HistoryChartStyled'

const HistoryChart = ({ data }) => {
  const { day, week, year, detail } = data
  const [timeFormat, setTimeFormat] = useState('24h')
  const [timeLine, setTimeLine] = useState(day)

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case '24h':
        return day
      case '7d':
        return week
      case '1y':
        return year
      default:
        return day
    }
  }

  const mapTimeLine = () => timeLine?.map((el) => new Date(el.x).toUTCString())

  const dataChart = {
    labels: mapTimeLine(timeLine),
    datasets: [
      {
        label: detail && `${detail.name} price`,
        data: determineTimeFormat(),
        ...chartStyles,
      },
    ],
  }

  const handleChangeTimeLine = (time1, time2) => {
    setTimeFormat(time1)
    setTimeLine(time2)
  }

  return (
    <Container>
      <ChooseTimeLine>
        <TimeLineBtn onClick={() => handleChangeTimeLine('24h', day)}>
          24H
        </TimeLineBtn>
        <TimeLineBtn onClick={() => handleChangeTimeLine('7d', week)}>
          7D
        </TimeLineBtn>
        <TimeLineBtn onClick={() => handleChangeTimeLine('1y', year)}>
          1Y
        </TimeLineBtn>
        <TimeLineBtn onClick={() => handleChangeTimeLine('all', year)}>
          ALL
        </TimeLineBtn>
      </ChooseTimeLine>
      <CurrentTimeLine>{timeFormat}</CurrentTimeLine>
      <Line data={dataChart} options={chartOptions} />
    </Container>
  )
}

export default HistoryChart
