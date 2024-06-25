import FormLegend from '@/components/atoms/FormLegend/FormLegend'
import { Space, Text } from '@mantine/core'
import { IPlanPreviewProps } from './PlanPreview.interfaces'
import styles from './PlanPreview.module.css'
import Fieldset from '@/components/atoms/Fieldset/Fieldset'
import RegularInput from '@/components/atoms/RegularInput/RegularInput'
import Button from '@/components/atoms/Button/Button'
import PlanBadge from '../PlanBadge/PlanBadge'

function PlanPreview({ subscription, onCancel, onContinue }: IPlanPreviewProps) {
  return (
    <>
      <Space h="md" />
      <FormLegend title="Product Info" />
      <Space h="2xl" />
      <Fieldset legend="Plan selected">
        <div className={styles.Content}>
          <PlanBadge planType={subscription?.type} className={styles.Badge} />
          <div className={styles.FeaturesWrapper}>
            {subscription?.features.map(({ title, Icon, description }) => (
              <div key={title} className={styles.FeatureItem}>
                <div className={styles.FeatureHeader}>
                  {Icon && <Icon />}
                  <Text>{title}</Text>
                </div>
                <Text>{description}</Text>
              </div>
            ))}
          </div>
        </div>
      </Fieldset>
      <div className={styles.SummaryWrapper}>
        <div className={styles.CouponWrapper}>
          <RegularInput className={styles.CouponInput} label="Coupon" placeholder="COUPONCODE" />
          <Button outlined size="sm" label="APPLY" />
        </div>
        <div className={styles.PriceWrapper}>
          <Text fw={600} pos="relative" top={10}>
            Total price
          </Text>
          <Text className={styles.Price}>
            <span>$</span>
            {subscription?.price}
            <span>/month</span>
          </Text>
        </div>
      </div>

      <div className={styles.ActionWrapper}>
        <Button label="Cancel" type="button" outlined fullWidth size="md" onClick={onCancel} />
        <Button label="Proceed" type="button" fullWidth size="md" onClick={onContinue} />
      </div>
    </>
  )
}

export default PlanPreview
