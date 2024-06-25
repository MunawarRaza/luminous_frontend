import { StepsProgressProps } from './StepsProgress.interfaces'
import { Stepper } from '@mantine/core'
import styles from './StepsProgress.module.css'

function StepsProgress({ steps, currentStep }: StepsProgressProps) {
  return (
    <Stepper
      active={currentStep}
      color="secondary.7"
      classNames={{ separator: styles.Separator }}
      allowNextStepsSelect={false}
      size="sm"
      data-testid="stepper"
    >
      {steps.map((step) => (
        <Stepper.Step
          key={step.id}
          label={step.title}
          icon={null}
          classNames={{
            stepIcon: styles.StepIcon,
            stepCompletedIcon: styles.CompletedIcon,
            step: styles.Step,
            stepLabel: styles.StepLabel,
            stepBody: styles.StepBody
          }}
        />
      ))}
    </Stepper>
  )
}

export default StepsProgress
