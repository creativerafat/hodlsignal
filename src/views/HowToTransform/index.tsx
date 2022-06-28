import React from 'react'
import { Button, Flex, Text, Heading, Input, CardBody, Image } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import BackButton from '../../components/BackButton'

const HowToTransform = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const Title1 = styled(Heading)`
    font-size: 32px;
    margin: 32px 0;
    text-align: center;
    color: #ffc000;
    @media screen and (max-width: 712px) {
      font-size: 24px;
    }
  `

  const Title2 = styled(Text)`
    font-size: 24px;
    margin: 28px 12px;
    text-align: center;
    color: #ffffff;
    @media screen and (max-width: 712px) {
      font-size: 18px;
    }
  `

  const Title3 = styled(Text)`
    font-size: 22px;
    margin: 12px;
    text-align: left;
    color: #ffc000;
    @media screen and (max-width: 712px) {
      font-size: 17px;
    }
  `

  const MainText = styled(Text)`
    font-size: 20px;
    margin: 24px 12px;
    text-align: left;
    color: #ffc000;
    @media screen and (max-width: 712px) {
      font-size: 16px;
    }
  `

  const WhiteMainText = styled(Text)`
    color: #ffffff;
  `

  return (
    <Page style={{ maxWidth: '1154px' }}>
      <div>
        <BackButton />
        <Image src="/images/logo-1.png" alt="logo" width={120} height={80} />
        <Image margin="80px 0" src="/images/howtotransform1.png" alt="how to transform" width={1473} height={874} />
        <Title1>{t('2.5 BILLION HODL SIGNAL TOKENS (HODLS)')}</Title1>
        <Title1>{t('ARE READY TO BE TRANSFORMED')}</Title1>
        <Title2>{t('Now You Can Convert/Transform Your Blockchain Coins/Tokens into HODL SIGNAL TOKENS')}</Title2>
        <Title3>{t('You Will be Able to Transform Top Coins Like BITCOIN, ETHEREUM, POLYGON, TERRA, DOGE, SHIBA & MORE…')}</Title3>
        <Title3>{t('HODL SIGNAL Token Also Wants to Rescue the “Shit Coin” Holders – Or Coins/Tokens with Slow Adoption & Low Trading Volume')}</Title3>
        <Title1>{t('OVER 100+ BLOCKCHAINS WILL BE SELECTED FOR TRANSFORMATION')}</Title1>
        <MainText>{t('If your Blockchain is Selected, you will have 10 Days to Transform your Coins/Tokens into HODLS. Announcements as early as 10 Days prior to the transformation process will be announced on Social Media Sites. Follow your favorite Affiliate for more details and announcements.')}</MainText>
        <MainText>{t('How the Transformation process works is each of the 10 Days has a separate pool of HODL SIGNAL TOKENS. Each daily pool is paid out to the Users that converted/transformed their Coins/Tokens that day. The payment to each User that Transforms is based upon what percentage of the daily total did they Transform.')}</MainText>
        <MainText>{t('Best part: You can receive bonus HODL SIGNAL TOKENS if you use a valid Affiliate Address. You can query the Smart Contract below to verify if the Affiliate Address is Registered or Not.')}</MainText>
        <Flex margin="24px" alignItems="center" flexDirection={['column', null, null, 'row']} justifyContent={['space-around', null, null, 'start']}>
          <Text color="#ffc000" textAlign="left">{t('Verify Affiliate Address:')}</Text>
          <Flex mx="20px">
            <Flex padding="6px auto" minWidth="320px" background="#ffc000" borderRadius="5px" border="5px solid #000000">
              <Text color="#000000" fontSize='16px' margin="auto">{t('Input Address Here')}</Text>
            </Flex>
            <Flex padding="6px" background="#ffc000" borderRadius="5px" border="5px solid #000000">
              <Text color="#000000" fontSize='16px' margin="auto">{t('>')}</Text>
            </Flex>
          </Flex>
          <Flex padding="6px 20px" background="#ffc000" borderRadius="5px" border="5px solid #000000">
            <Text color="#000000" fontSize='16px' margin="auto">{t('Yes / ')}<span style={{ color: '#ff0000' }}>No</span></Text>
          </Flex>
        </Flex>
        <WhiteMainText>{t('100% of the Transformations become Polygon (MATIC) are locked up in Liquidity Pools. This is how HODL SIGNAL TOKEN becomes an Asset Backed Cryptocurrency.')}</WhiteMainText>
        <MainText>{t('Primary Purpose for Transformations = Liquidity Asset that Creates a Price Floor for HODLS')}</MainText>
        <MainText>{t('Secondary Purpose is to allow Crypto Holders to convert their Crypto into an Exciting Project with Real Utility. Furthermore, High Value Cryptos will be selected to be Transformed')}</MainText>
        <MainText pt="20px"><strong>{t('ATTENTION SHIT COIN HOLDERS:')}</strong></MainText>
        <MainText>{t('Now you can Un-trap Your Shit Coins & Convert them into HODL SIGNAL TOKENS.')}</MainText>
        <Flex flexDirection="column" pl={["0", null, null, "60px"]}>
          <Flex>
            <MainText mr="24px">{t('•')}</MainText>
            <MainText>{t('Many Investors find themselves holding a bag of Shit Coins with little to no value')}</MainText>
          </Flex>
          <Flex>
            <MainText mr="24px">{t('•')}</MainText>
            <MainText>{t('Some of these Investors were Early Pioneers in this Space Who Took Great Risks')}</MainText>
          </Flex>
          <Flex>
            <MainText mr="24px">{t('•')}</MainText>
            <MainText>{t('Many have tremendous losses from being an early adopter')}</MainText>
          </Flex>
          <Flex>
            <MainText mr="24px">{t('•')}</MainText>
            <MainText>{t('NOW… They can convert these Shit Coins into HODLS')}</MainText>
          </Flex>
          <Flex>
            <MainText mr="24px">{t('•')}</MainText>
            <MainText>{t('Not all low volume Coins/Tokens will be Selected, Yours Might')}</MainText>
          </Flex>
        </Flex>
        <Title1>{t('What is a Blockchain Transformation?')}</Title1>
        <WhiteMainText>{t('"A Blockchain Transformation is a process where you convert your Coins/Tokens for another Blockchain prior to launch. HODL SIGNAL TOKEN is doing a Transformation like other have in the pass. This process is done solely with a Smart Contract or Partially with a Smart Contract. (Partial means some Blockchains will not interact with the Smart Contract so the User will need to send in their Coins/Tokens to a specific address.) On Distribution Day, HODL SIGNAL TOKENS are sent to the Users Wallet Addresses."')}</WhiteMainText>
        <Title1>{t('What To Know')}</Title1>
        <Flex flexDirection="column" pl={["0", null, null, "30px"]}>
          <Flex alignItems="start">
            <WhiteMainText mr="16px" style={{ color: "#ffc000" }} >&diams;</WhiteMainText>
            <WhiteMainText>{t('100+ Different Blockchains to Be Selected')}</WhiteMainText>
          </Flex>
          <Flex alignItems="start">
            <WhiteMainText mr="16px" style={{ color: "#ffc000" }} >&diams;</WhiteMainText>
            <WhiteMainText>{t('2.5 Billion HODL SIGNAL TOKENS will be Transformed')}</WhiteMainText>
          </Flex>
          <Flex alignItems="start">
            <WhiteMainText mr="16px" style={{ color: "#ffc000" }} >&diams;</WhiteMainText>
            <WhiteMainText>{t('There Will be a 10 Day Advance Notice of which Blockchain\'s have been selected and the Transform Start Date')}</WhiteMainText>
          </Flex>
          <Flex alignItems="start">
            <WhiteMainText mr="16px" style={{ color: "#ffc000" }} >&diams;</WhiteMainText>
            <WhiteMainText>{t('Polygon Will Be Available all 30 Days for Transforming')}</WhiteMainText>
          </Flex>
          <Flex alignItems="start">
            <WhiteMainText mr="16px" style={{ color: "#ffc000" }} >&diams;</WhiteMainText>
            <WhiteMainText>{t('No KYC/AML is Required!')}</WhiteMainText>
          </Flex>
          <Flex alignItems="start">
            <WhiteMainText mr="16px" style={{ color: "#ffc000" }} >&diams;</WhiteMainText>
            <WhiteMainText>{t('When Transformation Drive Starts Everyone will have 10 Days to Convert or Transform their Blockchain Coins/Tokens into HODL SIGNAL Tokens (HODLS)')}</WhiteMainText>
          </Flex>
          <Flex alignItems="start">
            <WhiteMainText mr="16px" style={{ color: "#ffc000" }} >&diams;</WhiteMainText>
            <WhiteMainText>{t('Privacy Coins Cannot Be Claimed, so They will Have 20 Days to Transform into HODL SIGNAL TOKENS')}</WhiteMainText>
          </Flex>
          <Flex alignItems="start">
            <WhiteMainText mr="16px" style={{ color: "#ffc000" }} >&diams;</WhiteMainText>
            <WhiteMainText>{t('Each Day 1.5 Million HODL SIGNAL TOKENS will Be Put into A Daily Pool')}</WhiteMainText>
          </Flex>
          <Flex alignItems="start">
            <WhiteMainText mr="16px" style={{ color: "#ffc000" }} >&diams;</WhiteMainText>
            <WhiteMainText>{t('Everyone That Sends in Their Coins/Tokens That Day will Receive the Evenly Divided Share of Tokens From that Daily Pool')}</WhiteMainText>
          </Flex>
          <Flex flexDirection="column" pl={["0", null, null, "50px"]}>
            <Flex>
              <WhiteMainText mr="18px">{t('o')}</WhiteMainText>
              <WhiteMainText>{t('Example:  Daily Pool Size = 1.5 Million HODL SIGNAL TOKENS for a Blockchain (i.e., Doge Coin). You Get Just a Percentage of HODL SIGNAL TOKENS Equal to The Percentage You Sent into the Daily Pool')}</WhiteMainText>
            </Flex>
            <Flex>
              <WhiteMainText mr="18px">{t('o')}</WhiteMainText>
              <WhiteMainText>{t('If for Example You Sent in 20% of the Daily Total of DOGE Coins, You Get 20% of the 1.5 Million HODL SIGNAL TOKENS (20% of 1.5 Million = 300,000 HODLS)')}</WhiteMainText>
            </Flex>
          </Flex>
          <Flex alignItems="start">
            <WhiteMainText mr="16px" style={{ color: "#ffc000" }} >&diams;</WhiteMainText>
            <WhiteMainText>{t('You Can Get an Additional Bonus Rewards if You Use an Affiliate Address')}</WhiteMainText>
          </Flex>
          <Flex alignItems="start">
            <WhiteMainText mr="16px" style={{ color: "#ffc000" }} >&diams;</WhiteMainText>
            <WhiteMainText>{t('Primary Purpose of Transformations is to Build Liquidity Pools, so HODL SIGNAL TOKEN is an Asset Backed Cryptocurrency')}</WhiteMainText>
          </Flex>
          <Flex alignItems="start">
            <WhiteMainText mr="16px" style={{ color: "#ffc000" }} >&diams;</WhiteMainText>
            <WhiteMainText>{t('Secondary Purpose is to Rescue some “Shit-Coin” Holders, Slow Adoption Blockchains, Failed Projects and Give Opportunities for Others to Transform their Coins')}</WhiteMainText>
          </Flex>
          <Flex alignItems="start">
            <WhiteMainText mr="16px" style={{ color: "#ffc000" }} >&diams;</WhiteMainText>
            <WhiteMainText>{t('100% of Transformations go into Liquidity Pools on DEXs')}</WhiteMainText>
          </Flex>
          <Flex alignItems="start">
            <WhiteMainText mr="16px" style={{ color: "#ffc000" }} >&diams;</WhiteMainText>
            <WhiteMainText>{t('These Liquidity Pools will be Locked and will Remain Permanent Assets Creating a Price Floor for HODL SIGNAL TOKEN')}</WhiteMainText>
          </Flex>
          <Flex alignItems="start">
            <WhiteMainText mr="16px" style={{ color: "#ffc000" }} >&diams;</WhiteMainText>
            <WhiteMainText>{t('This means, if everyone sold their HODL SIGNAL TOKENS, they would get back some POLYGON (MATIC) in Return')}</WhiteMainText>
          </Flex>
          <Flex alignItems="start">
            <WhiteMainText mr="16px" style={{ color: "#ffc000" }} >&diams;</WhiteMainText>
            <WhiteMainText>{t('A Price Floor means HODL SIGNAL TOKEN can never go to zero, unless POLYGON also went to zero in value')}</WhiteMainText>
          </Flex>
        </Flex>
        <Title1>{t('How To Transform Coins/Tokens into TD Tokens')}</Title1>
        <Flex flexDirection="column" pl={["0", null, null, "30px"]}>
          <Flex>
            <WhiteMainText mr="18px">{t('1.')}</WhiteMainText>
            <WhiteMainText>{t('Download the METAMASK Wallet, (Platforms Supported):')}</WhiteMainText>
          </Flex>
          <Flex flexDirection="column" pl={["0", null, null, "50px"]}>
            <Flex>
              <WhiteMainText mr="18px">{t('a.')}</WhiteMainText>
              <WhiteMainText>{t('Mobile: Android, iOS')}</WhiteMainText>
            </Flex>
            <Flex>
              <WhiteMainText mr="18px">{t('b.')}</WhiteMainText>
              <WhiteMainText>{t('Browser: Chrome/Firefox or Brave Browser Extension')}</WhiteMainText>
            </Flex>
          </Flex>
          <Flex>
            <WhiteMainText mr="18px">{t('2.')}</WhiteMainText>
            <WhiteMainText>{t('Setup your Polygon Wallet on your new METAMASK Wallet')}</WhiteMainText>
          </Flex>
          <Flex flexDirection="column" pl="50px">
            <Flex>
              <WhiteMainText mr="18px">{t('a.')}</WhiteMainText>
              <WhiteMainText>{t('See Link to METAMASK Wallet Setup for instructions')}</WhiteMainText>
            </Flex>
          </Flex>
          <Flex>
            <WhiteMainText mr="18px">{t('3.')}</WhiteMainText>
            <WhiteMainText>{t('From this Website you can see the Blockchains that have been selected to be transformed')}</WhiteMainText>
          </Flex>
          <Flex>
            <WhiteMainText mr="18px">{t('4.')}</WhiteMainText>
            <WhiteMainText>{t('Find your Blockchain to the Coins/Tokens that you want to convert/transform into HODL SIGNAL TOKENS')}</WhiteMainText>
          </Flex>
          <Flex>
            <WhiteMainText mr="18px">{t('5.')}</WhiteMainText>
            <WhiteMainText>{t('There is on a 10 Day Window to Transform Coins/Tokens for each Blockchain (20 for Privacy Coins)')}</WhiteMainText>
          </Flex>
          <Flex>
            <WhiteMainText mr="18px">{t('6.')}</WhiteMainText>
            <WhiteMainText>{t('Next Use your METAMASK Wallet and connect to the Smart Contract the corresponds to Your Blockchain')}</WhiteMainText>
          </Flex>
          <Flex>
            <WhiteMainText mr="18px">{t('7.')}</WhiteMainText>
            <WhiteMainText>{t('Pick Your Transforming Day, Day 1 to 10 (Your Choice Which Day)')}</WhiteMainText>
          </Flex>
          <Flex>
            <WhiteMainText mr="18px">{t('8.')}</WhiteMainText>
            <WhiteMainText>{t('Then Enter the Following Information')}</WhiteMainText>
          </Flex>
          <Flex flexDirection="column" pl="50px">
            <Flex>
              <WhiteMainText mr="18px">{t('a.')}</WhiteMainText>
              <WhiteMainText>{t('Your Blockchain Wallet Address for your Coins/Tokens')}</WhiteMainText>
            </Flex>
            <Flex>
              <WhiteMainText mr="18px">{t('b.')}</WhiteMainText>
              <WhiteMainText>{t('Quantity of Coins/Tokens You are Transforming')}</WhiteMainText>
            </Flex>
            <Flex>
              <WhiteMainText mr="18px">{t('c.')}</WhiteMainText>
              <WhiteMainText>{t('Your Affiliate\'s Address if You Have One')}</WhiteMainText>
            </Flex>
            <Flex>
              <WhiteMainText mr="18px">{t('d.')}</WhiteMainText>
              <WhiteMainText>{t('Then Select the “TRANSFORM” Button')}</WhiteMainText>
            </Flex>
            <Flex>
              <WhiteMainText mr="18px">{t('e.')}</WhiteMainText>
              <WhiteMainText>{t('This Registers Your HODL SIGNAL ADDRESS to your Blockchain Coins/Tokens Address and the Quantity of your Coins/Tokens you will Transform')}</WhiteMainText>
            </Flex>
            <Flex>
              <WhiteMainText mr="18px">{t('f.')}</WhiteMainText>
              <WhiteMainText>{t('Next: Send Your Coins/Tokens to the Address Provided on that Corresponding Day')}</WhiteMainText>
            </Flex>
          </Flex>
          <Flex>
            <WhiteMainText mr="18px">{t('9.')}</WhiteMainText>
            <WhiteMainText>{t('Then When Distribution Day Happens you will Receive Your HODL SIGNAL Tokens')}</WhiteMainText>
          </Flex>
          <Flex>
            <WhiteMainText mr="18px">{t('10.')}</WhiteMainText>
            <WhiteMainText>{t('Distribution Day is When Everyone Receives their HODL SIGNAL TOKENS from Transformations & Claiming Epochs')}</WhiteMainText>
          </Flex>
          <Flex>
            <WhiteMainText mr="18px">{t('11.')}</WhiteMainText>
            <WhiteMainText>{t('You can check back after the 10 Day Cycle for your Blockchain to See How Many HODL SIGNAL TOKENS you will Receive on Distribution Day for your Transformation')}</WhiteMainText>
          </Flex>
          <Flex>
            <WhiteMainText mr="18px">{t('12.')}</WhiteMainText>
            <WhiteMainText>{t('Transformation is Calculated Based on How Many People Entered into the Daily Pool')}</WhiteMainText>
          </Flex>
          <Flex>
            <WhiteMainText mr="18px">{t('13.')}</WhiteMainText>
            <WhiteMainText>{t('Additional HODL SIGNAL TOKENS are Awarded to Users that Entered a Registered Affiliate Address (Valid Affiliate Address)')}</WhiteMainText>
          </Flex>
          <Flex>
            <WhiteMainText mr="18px">{t('14.')}</WhiteMainText>
            <WhiteMainText>{t('The Bonus Pool Rewards the User and the Affiliate that told The Blockchain Communities about HODL SIGNAL TOKEN')}</WhiteMainText>
          </Flex>
        </Flex>
        <Title1>{t('How Many Tokens Do I Receive from Transforming?')}</Title1>
        <WhiteMainText>{t('Below is an Example with Fictional Totals on a Fictional Blockchain for Illustration Purposes Only')}</WhiteMainText>
        <Image src="/images/howtotransform2.png" alt="how to transform" margin="24px auto" width={770} height={919} />
        <Title1>{t('How The Transformation Bonus Works')}</Title1>
        <WhiteMainText>{t('The Bonus is tied to the Affiliate Program. As a User to receive a Transformation Bonus you must enter a valid/registered Affiliate\'s HODL SIGNAL TOKEN Address. The Affiliate\'s Address is the “Referral Code.”')}</WhiteMainText>
        <WhiteMainText>{t('Each Blockchain that is selected allows for Transformations into HODL SIGNAL TOKENS. These selected Blockchains have been allocated 20 Million HODL SIGNAL TOKENS each. Fifteen million are for direct transformations and five million are to be used for Bonus Awards for each Blockchain.')}</WhiteMainText>
        <WhiteMainText>{t('The 15 Million HODL SIGNAL TOKENS are divided over 10 Days, or 1.5 Million Tokens per day.Everyone that sends in Tokens for that day get a percentage equal to the percentage of the total that was received that day. This is the direct transformation example and not the Bonus Example.')}</WhiteMainText>
        <WhiteMainText>{t('The Bonus Payout is a Distribution of 5 Million HODL SIGNAL TOKENS that User that input an Affiliate Address receive additional HODL SIGNAL TOKENS in addition to the Direct Transformation described above.')}</WhiteMainText>
        <WhiteMainText>{t('These 5 Million HODL SIGNAL TOKENS is divided into two Bonus Systems. The 1st Bonus System Rewards Each Transforming Address with a Unique HODL SIGNAL ADDRESS. The 2nd Bonus System Rewards both the User and the Affiliate.')}</WhiteMainText>
        <WhiteMainText>{t('The 1st System is 2.5 Million Tokens and they are simply divided by the Unique Addresses that were Transformed with an Affiliate Address. Example if 2,225 Addresses transformed and used an Affiliate Code, the 2.5 Million Tokens would be divided by 2,225 Addresses. Each Address would receive a bonus of 1,123.59550561 HODL SIGNAL TOKENS + their Direct Transformation HODL SIGNAL TOKENS.')}</WhiteMainText>
        <WhiteMainText>{t('Wait there\'s more…')}</WhiteMainText>
        <WhiteMainText>{t('The 2nd Bonus Award takes the remainder of 2.5 Million Bonus Tokens and rewards each address based upon how many coins they transformed. This is not by each day; this considers all 10 days of the Transformation Cycle. The more one transformed the larger share they receive of the 2.5 Million Bonus Tokens. The Affiliate receives 10% of their total and the User gets 90% of their total.')}</WhiteMainText>
        <Flex padding="40px 0" alignItems="center" flexDirection="column" justifyContent="center">
          <WhiteMainText>{t('Transformation Bonus Calculations Per Blockchain:')}</WhiteMainText>
          <WhiteMainText>{t('2.5 Million Bonus HODLS = 1st Portion Award')}</WhiteMainText>
          <WhiteMainText style={{ textDecoration: 'underline' }}>{t('2.5 Million Bonus HODLS = 2nd Portion Award')}</WhiteMainText>
          <WhiteMainText style={{ textDecoration: 'underline' }}>{t('5.0 Million Bonus HODLS per Blockchain Selected for Transformation')}</WhiteMainText>
        </Flex>
        <WhiteMainText>{t('1st Portion of Transforming Bonus Award (Given to Each Address that Transforms)')}</WhiteMainText>
        <Image src="/images/howtotransform3.png" width={1050} height={176} margin="20px auto" />
        <WhiteMainText>{t('2ND Portion of Transforming Bonus Award (Bonus By % Transformed)')}</WhiteMainText>
        <Image src="/images/howtotransform4.png" width={1050} height={760} margin="20px auto" />
        <WhiteMainText>{t('Both User and Affiliate are rewarded in the second portion of the Transformation')}</WhiteMainText>
      </div>
    </Page >
  )
}

export default HowToTransform
