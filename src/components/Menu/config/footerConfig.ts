import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://HODLSignal.com/contact-us',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com',
      },
      {
        label: t('SERA token'),
        href: 'https://docs.HODLSignal.com/tokenomics/cake',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.HODLSignal.com/contact-us/customer-support',
      },
      {
        label: t('Guides'),
        href: 'https://docs.HODLSignal.com/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/',
      },
      {
        label: t('Audits'),
        href: 'https://docs.HODLSignal.com/',
      },
    ],
  },
]
