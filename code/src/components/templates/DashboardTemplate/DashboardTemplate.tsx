import PageTitle from '@/components/atoms/PageTitle/PageTitle'
import { Space, Text, useMantineColorScheme } from '@mantine/core'
import styles from './DashboardTemplate.module.css'
import Card from '@/components/atoms/Card/Card'
import LineChart from '@/components/atoms/LineChart/LineChart'
import BarChart from '@/components/atoms/BarChart/BarChart'
import { getBarChartData } from '@/components/atoms/BarChart/BarChart.utils'
import { getLineChartData } from '@/components/atoms/LineChart/LineChart.utils'
import { useAppDispatch, useAppSelector } from '@/store/hooks/store-hooks'
import { useEffect } from 'react'
import {
  getAuditsData,
  getChatData,
  getErrorsData,
  getQuestionsData,
  getTemplatesData,
  getUsageData
} from '@/store/actions/dashboard.actions'
import { ColorSchemes } from '@/enums/colorSchemes'

function DashboardTemplate() {
  const { colorScheme } = useMantineColorScheme()
  const dispatch = useAppDispatch()
  const { usage, audits, templates, questions, errors, mostFrequent } = useAppSelector((state) => state.metrics)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        await Promise.allSettled([
          dispatch(getUsageData()),
          dispatch(getAuditsData()),
          dispatch(getTemplatesData()),
          dispatch(getChatData()),
          dispatch(getQuestionsData()),
          dispatch(getErrorsData())
        ])
      } catch (error) {
        console.log(error)
      }
    }

    fetchDashboardData()
  }, [dispatch])

  const auditedReviewsData = getBarChartData(audits, 'review')
  const templatedUploadedData = getBarChartData(templates, 'templates')
  const questionsAskedData = getBarChartData(questions, 'questions')
  const usersReportsData = getLineChartData(usage)
  const errorsReportedData = getLineChartData(errors)

  return (
    <main>
      <PageTitle title="User Management Dashboard" />
      <Space h="2xl" />
      <div className={styles.SectionWrapper}>
        <Card>
          <Text fw={700} mb="sm" fz="lg">
            Most asked Question
          </Text>
          <Text c={colorScheme === ColorSchemes.DARK ? 'secondary.1' : 'secondary.5'}>{mostFrequent?.question}</Text>
        </Card>
        <Card>
          <Text fw={700} mb="sm" fz="lg">
            Most frequent Error
          </Text>
          <Text c={colorScheme === ColorSchemes.DARK ? 'secondary.1' : 'secondary.5'}>{mostFrequent?.error}</Text>
        </Card>
      </div>
      <Space h="2xl" />
      <Card>
        <Text fw={700} ml="sm" mb="md">
          Users report
        </Text>
        <LineChart data={usersReportsData} hasGradient height={320} />
      </Card>
      <Space h="2xl" />
      <div className={styles.SectionWrapper}>
        <Card>
          <Text fw={700} ml="sm">
            Audited Reviews
          </Text>
          <BarChart indexKey="month" data={auditedReviewsData} hasGradient height={320} />
        </Card>
        <Card>
          <Text fw={700} ml="sm">
            Templates Uploaded
          </Text>
          <BarChart indexKey="month" data={templatedUploadedData} isHorizontal hasGradient height={320} />
        </Card>
      </div>
      <Space h="2xl" />
      <div className={styles.SectionWrapper}>
        <Card>
          <Text fw={700} ml="sm">
            Questions asked
          </Text>
          <BarChart indexKey="month" data={questionsAskedData} hasGradient height={320} />
        </Card>
        <Card>
          <Text fw={700} ml="sm" mb="md">
            Errors Reported
          </Text>
          <LineChart data={errorsReportedData} hasGradient height={300} />
        </Card>
      </div>
    </main>
  )
}

export default DashboardTemplate
