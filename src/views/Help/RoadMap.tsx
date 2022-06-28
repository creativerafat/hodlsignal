import React from 'react'
import { AutoRenewIcon, Flex, Text, Heading, Stepper, Step, Card, CardBody, Box, ArrowDownIcon } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import styled, { keyframes } from 'styled-components'
import { useTranslation } from 'contexts/Localization'

const RoadMap = () => {
  const { t } = useTranslation()

  const RoadMapText = styled(Text)`
    color: #002060;
    padding: 10px 0;
    font-size: 17px;
  `

  const RoadMapFlex = styled(Flex)`
    width: 540px;
    background: #b0b0b0;
    padding: 20px;
    border-radius: 20px;
    flex-direction: column;
    margin: 20px auto;
    outline: none;
    border-color: #ffffff;
    box-shadow: 0 0 8px #ffffff;
    @media screen and (max-width: 580px) {
      width: 100%;
    }
  `

  const RoadMapFlexTwo = styled(RoadMapFlex)`
    background: #ffc000;
    outline: none;
    border-color: #ffc000;
    box-shadow: 0 0 8px #ffc000;
  `

  const ArrowSymbol = styled(ArrowDownIcon)`
    width: 60px;
  `

  const DateText = styled(RoadMapText)`
    color: #ff0000;
    @media screen and (max-width: 852px) {
      padding: 0;
    }
  `

  return (
    <Page style={{ maxWidth: '1200px' }}>
      <div id="roadmap">
        <Heading style={{ fontSize: '64px', margin: '50px 0 40px ', textAlign: 'center' }} color="#ffc000">{t('ROAD MAP')}</Heading>
        <Flex flexDirection="column" alignItems="center">
          <RoadMapFlex>
            <RoadMapText><strong>DESIGN PHASE:</strong></RoadMapText>
            <RoadMapText>{t('Test Various Blockchains for low Gas Fees, Scalability. Interoperability Focused, Security & Stability')}</RoadMapText>
            <RoadMapText><strong>Started 2 Years Ago</strong>{t(' - Waited for Tech & Infrastructure to Catchup')}</RoadMapText>
          </RoadMapFlex>
          <ArrowSymbol color="#ffffff" />
          <RoadMapFlex>
            <RoadMapText><strong>BUILD PHASE:</strong></RoadMapText>
            <RoadMapText>{t('Build and Test Code, Test Code, Test Code, Test Code, Test Again and Again and Again')}</RoadMapText>
            <RoadMapText>{t('Make Adjustments and Fixes as Required')}</RoadMapText>
            <RoadMapText><strong>However Long It Takes to Get it Right</strong>{t(' - Code is Law')}</RoadMapText>
          </RoadMapFlex>
          <ArrowSymbol color="#ffffff" />
          <RoadMapFlexTwo style={{ boxShadow: '0 0 30px #ffc000' }}>
            <Flex flexDirection={['column', null, null, 'row']} justifyContent="space-between" alignItems={["start", null, null, "center"]}>
              <RoadMapText><strong>Pre-Market PHASE:</strong></RoadMapText>
              <DateText>May to June 2022 est.</DateText>
            </Flex>
            <RoadMapText>{t('Complete Website, Get Outside Analysis to Verify no Group Think, Finalize Code for Audit and Complete FAQ & Whitepaper')}</RoadMapText>
            
            <RoadMapText>{t('Complete FAQ & Whitepaper')}</RoadMapText>
            <RoadMapText><strong>However Long It Takes to Get it Right</strong>{t(' - Code is Law')}</RoadMapText>
              {/* <div style={{ background: '#00ff00', border: '1px solid #ffffff', padding: '8px 10px', borderRadius: '8px', color: '#002060' }}>YOU ARE HERE</div> */}
           
          </RoadMapFlexTwo>
          <ArrowSymbol color="#ffc000" />
          <RoadMapFlexTwo>
            <Flex flexDirection={['column', null, null, 'row']} justifyContent="space-between" alignItems={["start", null, null, "center"]}>
              <RoadMapText><strong>MARKETING PHASE:</strong></RoadMapText>
              <DateText>July to August 2022 est.</DateText>
            </Flex>
            <RoadMapText>{t('Set-up Social Media Sites, Announce to Various Blockchains an Airdrop (Claiming & Transforming) Opportunities are Coming their Way. On Board First Affiliates')}</RoadMapText>
            <RoadMapText>{t('Kick-off Contests and Monitor Votes on Den.Social')}</RoadMapText>
            <RoadMapText><strong>60 +  Day Duration</strong></RoadMapText>
          </RoadMapFlexTwo>
          
          
          <ArrowSymbol color="#ffc000" />
          <RoadMapFlexTwo>
            <Flex flexDirection={['column', null, null, 'row']} justifyContent="space-between" alignItems={["start", null, null, "center"]}>
              <RoadMapText><strong>CLAIMING & TRANSFORMATION:</strong></RoadMapText>
              <DateText>September 1, 2022</DateText>
            </Flex>
            <RoadMapText>{t('Polygon (MATIC) Swaps for (HODLS) Begin')}</RoadMapText>
            <RoadMapText>{t('250 Blockchains Claiming Process Begins')}</RoadMapText>
            <RoadMapText><strong>30  +/- Day Duration</strong></RoadMapText>
          </RoadMapFlexTwo>
          
          
          <ArrowSymbol color="#ffc000" />
          <RoadMapFlexTwo>
            <Flex flexDirection={['row', null, null, 'row']} justifyContent="center" alignItems={["start", null, null, "center"]}>
              <RoadMapText><strong>DISTRIBUTION DAY !!! (Launch Day)</strong></RoadMapText>
              <DateText>Feb 14, 2022 est.</DateText>
            </Flex>
            <RoadMapText><strong>LIQUIDITY SETUP:</strong></RoadMapText>
            <RoadMapText>{t('Setup Trading & Liquidity Pools  (QuickSwap & ApeSwap)100% of all Polygon (MATIC) Transforms go to DEX Liquidity DEX Setup & Go Live')}</RoadMapText>

            <RoadMapText><strong>DISTRIBUTION:</strong></RoadMapText>
            <RoadMapText>{t('Smart Contract Sends out to All Addresses HODL SIGNAL TOKEN (HODLS) that Properly Claimed and/or Transformed Also sent are Den.Social Subscriber Rewards')}</RoadMapText>
            <RoadMapText><strong>1 Day Duration</strong></RoadMapText>
            <RoadMapText><strong>Contest Winner Distribution:</strong></RoadMapText>
            <RoadMapText><strong>Few Days Post Distribution Day</strong></RoadMapText>
            <RoadMapText><strong>1 Day Duration</strong></RoadMapText>
            </RoadMapFlexTwo>

            <RoadMapFlexTwo>
            <Flex flexDirection={['row', null, null, 'row']} justifyContent="center" alignItems={["start", null, null, "center"]}>
              <RoadMapText><strong>POST LAUNCH</strong></RoadMapText>
              
            </Flex>
            <RoadMapText>HODL SIGNAL (HODLS) is Now Officially on Autopilot Handed Over to the Community Follow & Participate on Den.Social</RoadMapText>
            </RoadMapFlexTwo>
        </Flex>
      </div>
    </Page>
  )
}

export default RoadMap
