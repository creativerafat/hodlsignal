import React from 'react'
import { Button, Flex, Text, Heading, Card, CardBody, Image } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'

const BlockchainsSelected = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <Page style={{ maxWidth: '1154px' }}>
      <div id="blockchainsselected">
        <Heading style={{ fontSize: '56px', margin: '80px auto', textAlign: 'center' }} color="#ffc000">{t('Blockchains Selected')}</Heading>
        <div style={{ padding: '120px 0 200px' }}>
          <div style={{ background: '#ffffff', borderRadius: '10px', padding: '5px', maxWidth: "484px", maxHeight: "341px", margin: 'auto' }}>
            <Image src="/images/blockchainsselected.png" alt="blockchainsselected" width={474} height={331} style={{ margin: 'auto' }} />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default BlockchainsSelected
