export interface IStepProps {
  title: string
  id: number
}

interface IStepsProgressProps {
  steps: IStepProps[]
  currentStep: number
}

export type StepsProgressProps = IStepsProgressProps
