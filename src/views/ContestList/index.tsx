import React from 'react'
import { Button, Flex, Text, Heading, Card, CardBody, Image } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import BackButton from '../../components/BackButton'

const ContestList = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const Title = styled(Heading)`
    font-size: 40px;
    margin: 80px 0 30px;
    text-align: center;
    color: #ffc000;
    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
  `

  const CommonText = styled(Text)`
    font-size: 26px;
    margin: 20px;
    text-align: left;
    color: #ffc000;
    @media screen and (max-width: 600px) {
      font-size: 18px;
    }
  `

  const ListText = styled(Text)`
    font-size: 24px;
    lineHeight: 36px;
    text-align: left;
    color: #ffc000;
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  `

  const Symbol = styled(Text)`
    font-size: 24px;
    margin-right: 18px;
    color: #ffc000;
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  `

  return (
    <Page style={{ maxWidth: '1354px' }}>
      <div style={{marginBottom: '150px'}}>
        <BackButton />
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginBottom: '30px'}}>
          <Title>{t(' HODL SIGNAL CONTEST LIST')}</Title>
          <Image src="/images/logo-1.png" alt="logo" width={100} height={70} />
        </div>
        
        <Image src="/images/contestlist.png" margin="auto" alt="logo" width={1500} height={750} />
      </div>
    </Page>
  )
}

export default ContestList
