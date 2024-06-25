import { useMantineColorScheme, useMantineTheme } from '@mantine/core'
import { BarChartProps } from './BarChart.interfaces'
import { ResponsiveBar } from '@nivo/bar'
import styles from './BarChart.module.css'
import { ColorSchemes } from '@/enums/colorSchemes'
import { getDefs } from './BarChart.utils'

function BarChart({
  data = [],
  indexKey,
  hasLegend,
  hasGradient,
  isHorizontal,
  height = 400,
  ...props
}: BarChartProps) {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()
  const keys = data.length ? Object.keys(data[0]).filter((key) => key !== indexKey && !key.includes('Color')) : []
  const defs = hasGradient ? getDefs(data, indexKey, isHorizontal) : []

  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveBar
        theme={{
          axis: {
            legend: {
              text: {
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizes.sm,
                fontWeight: 600,
                fill: colorScheme === ColorSchemes.DARK ? theme.colors.dark[0] : theme.colors.gray[7]
              }
            },
            ticks: {
              text: {
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizes.sm,
                fill: colorScheme === ColorSchemes.DARK ? theme.colors.dark[0] : theme.colors.gray[7]
              }
            }
          },
          legends: {
            text: {
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizes.sm,
              fill: colorScheme === ColorSchemes.DARK ? theme.colors.dark[0] : theme.colors.gray[7]
            }
          }
        }}
        layout={isHorizontal ? 'horizontal' : 'vertical'}
        groupMode="grouped"
        data={data}
        keys={keys}
        indexBy={indexKey}
        margin={{ top: 50, right: hasLegend ? 130 : 60, bottom: 50, left: 60 }}
        padding={isHorizontal ? 0.55 : 0.7}
        enableGridX={isHorizontal}
        enableGridY={!isHorizontal}
        borderRadius={4}
        enableLabel={false}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'category10' }}
        defs={defs}
        fill={defs.map((def) => ({ match: '*', id: def.id }))}
        labelSkipWidth={12}
        labelSkipHeight={12}
        axisLeft={{
          tickValues: 5
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: hasLegend ? 100 : 0,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        role="application"
        tooltip={({ data, id }) => {
          return <div className={styles.Tooltip}>{data[id]}</div>
        }}
        {...props}
      />
    </div>
  )
}

export default BarChart
