import { SUBSCRIPTIONS_TYPES } from '@/constants/SUBSCRIPTIONS_TYPES'
import { IconSVGProps } from '@/types/icons'
import { ClipboardIcon, CpuChipIcon, DocumentCheckIcon, UserIcon } from '@heroicons/react/24/outline'

export interface ISubscriptionFeature {
  Icon?: React.ComponentType<IconSVGProps>
  title: string
  description?: string
}

export interface ISubscription {
  type: SUBSCRIPTIONS_TYPES
  title: string
  price: string
  current?: boolean
  popular?: boolean
  features: ISubscriptionFeature[]
}

export const premiumSubscription: ISubscription = {
  type: SUBSCRIPTIONS_TYPES.PREMIUM,
  current: true,
  title: 'Premium',
  price: '99',
  features: [
    {
      Icon: UserIcon,
      title: 'Users: Up to 10',
      description: 'How many users registries you can have at the same time '
    },
    {
      Icon: ClipboardIcon,
      title: 'Auditions per day: Up to 5',
      description: 'How many users audited reports you can export per day'
    },
    {
      Icon: CpuChipIcon,
      title: 'AI Questions per session: Up to 5',
      description: 'How many users registries you can have at the same time '
    },
    {
      Icon: DocumentCheckIcon,
      title: 'Exports per Day: Up to 5',
      description: 'How many users registries you can have at the same time '
    },
    {
      title: 'Support: Email',
      description: 'How many users registries you can have at the same time '
    },
    {
      title: 'Price: $99/month',
      description: 'How many users registries you can have at the same time '
    }
  ]
}

export const silverSubscription: ISubscription = {
  type: SUBSCRIPTIONS_TYPES.SILVER,
  title: 'Silver',
  popular: true,
  price: '249',
  features: [
    {
      Icon: UserIcon,
      title: 'Users: Up to 30',
      description: 'How many users registries you can have at the same time '
    },
    {
      Icon: ClipboardIcon,
      title: 'Auditions per day: Up to 10',
      description: 'How many users audited reports you can export per day'
    },
    {
      Icon: CpuChipIcon,
      title: 'AI Questions per session: Up to 10',
      description: 'How many users registries you can have at the same time '
    },
    {
      Icon: DocumentCheckIcon,
      title: 'Exports per Day: Up to 10',
      description: 'How many users registries you can have at the same time '
    },
    {
      title: 'Support: Email',
      description: 'How many users registries you can have at the same time '
    },
    {
      title: 'Price: $249/month',
      description: 'How many users registries you can have at the same time '
    }
  ]
}

export const goldSubscription: ISubscription = {
  type: SUBSCRIPTIONS_TYPES.GOLD,
  title: 'Gold',
  price: '299',
  features: [
    {
      Icon: UserIcon,
      title: 'Users: Up to 50',
      description: 'How many users registries you can have at the same time '
    },
    {
      Icon: ClipboardIcon,
      title: 'Auditions per day: Up to 20',
      description: 'How many users audited reports you can export per day'
    },
    {
      Icon: CpuChipIcon,
      title: 'AI Questions per session: Up to 20',
      description: 'How many users registries you can have at the same time '
    },
    {
      Icon: DocumentCheckIcon,
      title: 'Exports per Day: Up to 20',
      description: 'How many users registries you can have at the same time '
    },
    {
      title: 'Support: Email',
      description: 'How many users registries you can have at the same time '
    },
    {
      title: 'Price: $299/month',
      description: 'How many users registries you can have at the same time '
    }
  ]
}

export const unlimitedSubscription: ISubscription = {
  type: SUBSCRIPTIONS_TYPES.UNLIMITED,
  title: 'Unlimited',
  price: '499',
  features: [
    {
      title: 'Users: Unlimited',
      description: 'How many users registries you can have at the same time '
    },
    {
      title: 'Auditions per day: Unlimited',
      description: 'How many users audited reports you can export per day'
    },
    {
      title: 'AI Questions per session: Unlimited',
      description: 'How many users registries you can have at the same time '
    },
    {
      title: 'Exports per Day: Unlimited',
      description: 'How many users registries you can have at the same time '
    },
    {
      title: 'Support: Email',
      description: 'How many users registries you can have at the same time '
    },
    {
      title: 'Price: $499/month',
      description: 'How many users registries you can have at the same time '
    }
  ]
}
