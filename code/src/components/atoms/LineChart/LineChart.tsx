import { useMantineTheme } from '@mantine/core'
import { LineChartProps } from './LineChart.interfaces'
import { ResponsiveLine } from '@nivo/line'
import {
  generateFills,
  generateGradientsForArea,
  generateGradientsForLine,
  generateTicksFromData
} from './LineChart.utils'
import styles from './LineChart.module.css'

function LineChart({
  data = [],
  showLegend,
  yFormat: numberFormat = ' >-',
  tickGap = 40,
  hasGradient = false,
  height = 400,
  ...props
}: LineChartProps) {
  const theme = useMantineTheme()

  const tickValues = generateTicksFromData(data, tickGap)
  const defs = hasGradient ? generateGradientsForArea(data) : []
  const lineDefs = hasGradient ? generateGradientsForLine(data) : []
  const fill = hasGradient ? generateFills(data) : []

  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveLine
        data-testid="line-chart"
        colors={
          hasGradient
            ? (serie) => {
                return `url(#line-${serie.id})`
              }
            : { scheme: 'category10' }
        }
        theme={{
          axis: {
            legend: {
              text: {
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizes.sm
              }
            },
            ticks: {
              text: {
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizes.sm
              }
            }
          },
          legends: {
            text: {
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizes.sm
            }
          }
        }}
        data={data}
        lineWidth={6}
        margin={{ top: 50, right: showLegend ? 110 : 50, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 0,
          max: 'auto'
        }}
        yFormat={numberFormat}
        curve="monotoneX"
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          tickValues
        }}
        gridYValues={tickValues}
        enableGridX={false}
        useMesh
        enableArea
        areaOpacity={0.3}
        pointColor="white"
        pointBorderWidth={3}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        pointSize={9}
        defs={[...defs, ...lineDefs]}
        fill={fill}
        tooltip={({ point }) => {
          return <div className={styles.Tooltip}>{point.data.y as number}</div>
        }}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: showLegend ? 80 : 0,
            itemHeight: showLegend ? 20 : 0,
            itemOpacity: 0.75,
            symbolSize: showLegend ? 14 : 0,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'hsl(198, 100%, 33%)',
                  itemOpacity: 1,
                  itemTextColor: '#fff'
                }
              }
            ]
          }
        ]}
        {...props}
      />
    </div>
  )
}

export default LineChart
