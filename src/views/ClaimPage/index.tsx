import React, {useState} from 'react'
import { Button, Flex, Text, Heading, CopyIcon, Input, Image } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import styled from 'styled-components'
import ConnectWalletButton from '../../components/ConnectWalletButton'
import BackButton from '../../components/BackButton'

const Tooltip = styled.div<{ isTooltipDisplayed: boolean }>`
display: ${({ isTooltipDisplayed }) => (isTooltipDisplayed ? 'inline-block' : 'none')};
position: absolute;
padding: 8px;
top: -38px;
right: 100px;
text-align: center;
background-color: ${({ theme }) => theme.colors.contrast};
color: ${({ theme }) => theme.colors.invertedContrast};
border-radius: 16px;
opacity: 0.7;
width: 100px;
`
const StyledSunburst = styled.div`
display: 'flex';
flex-direction: column;
justify-content: space-between;
padding: 20px 80px 0 80px

@media only screen and (max-width: 768px) {
  padding: 20px 0px 0 0px
}
`
const StyledForm = styled.div`
display: flex; 
flex-direction: row; 
justify-content: space-between;
@media only screen and (max-width: 768px) {
  flex-direction: column; 
}
`

const StyledInput = styled(Input)`
borderRadius: 0; 
color: #000000; 
width: 60%; 
backgroundColor: #ccc;
@media only screen and (max-width: 768px) {
  width: 100%; 
}
`

const StyledText = styled(Input)`
width: 40%; 
@media only screen and (max-width: 768px) {
  width: 100%; 
}
`

const ClaimPage = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const [isDisplayed, setIsDisplayed] = useState(false)
  const [blockchainAddress, setBlockchainAddress] = useState("")
  const [affiliateAddress, setAffiliateAddress] = useState('')
  const [pendingTx, setPendingTx] = useState(false)

  const copyAddress = () => {
    const add = "0xDF465C98bB8dDC6eBb7F9c1086120FD01eEF70AD"
    if (navigator.clipboard && navigator.permissions) {
      navigator.clipboard.writeText(add).then(() => displayTooltip())
    } else if (document.queryCommandSupported('copy')) {
      const ele = document.createElement('textarea')
      ele.value = add
      document.body.appendChild(ele)
      ele.select()
      document.execCommand('copy')
      document.body.removeChild(ele)
      displayTooltip()
    }
  }

  function displayTooltip() {
    setIsDisplayed(true)
    setTimeout(() => {
      setIsDisplayed(false)
    }, 1000)
  }

  const onChangeBlockchainAddress = (e) => {
    setBlockchainAddress(e.target.value)
  }

  const onChangeAffiliateAddress = (e) => {
    setAffiliateAddress(e.target.value)
  }

  const onClickSubmit = () => {
    console.log("submit")
  }
  
  return (
    <div style={{ background: '#002060', width: '100%', paddingBottom: '100px' }}>
      <BackButton />  
      
      <div style={{ paddingTop: '30px', marginLeft: '30px' }}>
        <Image src="/images/logo-1.png" alt="logo" width={120} height={80} />
      </div>

      <div style={{ maxWidth: '1152px', margin: 'auto' }}>
        <Text style={{ fontSize: '28px', margin: '80px 0 60px ', textAlign: 'center' }} color="#ffc000">{t('About Claiming HODL SIGNAL TOKENS')}</Text>
      </div>
      <div style={{ padding: '0px 20px', maxWidth: '900px'}}>
        <Flex>
          <Text style={{ fontSize: '28px', marginRight: '10px ', textAlign: 'left' }} color="#ffc000">{t('•')}</Text>
          <Text style={{ fontSize: '28px', textAlign: 'left' }} color="#ffc000">{t('•	  250 Blockchains Have Been Selected for Claiming')}</Text>
        </Flex>
        <Flex>
          <Text style={{ fontSize: '28px', marginRight: '10px ', textAlign: 'left' }} color="#ffc000">{t('•')}</Text>
          <Text style={{ fontSize: '28px', textAlign: 'left' }} color="#ffc000">{t('aaaaaaaaaa')}</Text>
        </Flex>
      </div>












      <div style={{ maxWidth: '1152px', margin: 'auto' }}>
        <Text style={{ fontSize: '28px', margin: '80px 0 60px ', textAlign: 'center' }} color="#ffc000">{t('Blockchain Claim Entry Form To Claim Your HODL SIGNAL Tokens (HODLS)')}</Text>
      </div>
      <div style={{ padding: '30px 20px', maxWidth: '900px', margin: 'auto' }}>
        <div>      
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '30px'}}>
            <Text style={{ width: '10%', fontWeight: 700}}>Step #1:</Text>
            <Text style={{ width: '80%', fontWeight: 700}}>Find the Blockchain on the list of 250 Blockchains that you wish to claim. You must have ownership/control of the address in order to claim HODL Signals. You can claim more than one address for each Blockchain by repeating steps 1 through 5 for each address.</Text>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '30px'}}>  
            <Text style={{ width: '10%', fontWeight: 700}}>Step #2:</Text>
            <Text style={{ width: '80%', fontWeight: 700}}>Find the Blockchain on the list of 250 Blockchains that you wish to claim. You must have ownership/control of the address in order to claim HODL Signals. You can claim more than one address for each Blockchain by repeating steps 1 through 5 for each address.</Text>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '30px'}}>    
            <Text style={{ width: '10%', fontWeight: 700}}>Step #3:</Text>
            <Text style={{ width: '80%', fontWeight: 700}}>Set-up your HODL Signal Address using your Metamask Wallet. If you do not know how to setup a Metamask wallet click here: <a href='https://metamask.io/download/' target='_blank' rel='noreferrer' style={{color: '#d1c422'}} ><u>LINK TO METAMASK SETUP</u></a><br />Note:Your HODL Signal (HODLS) Address is the same as your Polygon (MATIC) address</Text>
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>   
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '30px'}}>    
              <Text style={{ width: '10%', fontWeight: 700}}>Step #4:</Text>
              <Text style={{ width: '80%', fontWeight: 700}}>Connect your Polygon (MATIC) Metamask Wallet to the Claiming Smart Contract<br />Important: You will need a small amount of Polygon (MATIC) to register an address.<br/>The gas fees to register each address is less than $0.02 USD.</Text>
            </div> 
            <div style={{ width: '100%', textAlign: 'center', margin: '20px auto 50px' }}><ConnectWalletButton headstring="Wallet ID:" colorHeading="#ffc000" colorAddress="#ffffff" colorIcon="primary" /></div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '30px'}}>  
            <Text style={{ width: '10%', fontWeight: 700}}>Step #5:</Text>
            <Text style={{ width: '80%', fontWeight: 700}}>Using your Polygon (MATIC) Metamask Wallet, fill out the form below and approve the smart contract interaction to register your Blockchain Address to Your HODL Signal Address</Text>
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', paddingTop: '100px'}}>
          <Text style={{ fontSize: '20px', fontWeight: 800, }}>{t('Please Enter the Following Infomation to Claim Your Portion of 5 Million HODL SIGNAL Tokens (HODLS):')}</Text>
          
          <StyledSunburst style={{paddingTop: '50px'}}>
            <StyledForm>
              <Text className='StyledText' style={{ fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('Blockchain Name:')}</Text>
              <StyledInput style={{borderRadius: '0', color: '#000000', backgroundColor: '#ccc'}}/>
            </StyledForm>
            <Text style={{ fontSize: '16px', textAlign: 'right' }} color="#ffffff">{t('Example: Avalanche(AVAX)')}</Text>
          </StyledSunburst>
          <StyledSunburst style={{paddingTop: '15px'}}>
            <StyledForm>
              <Text className='StyledText' style={{ fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('Your Blockchain Address:')}</Text>
              <StyledInput style={{borderRadius: '0', color: '#000000', backgroundColor: '#ccc'}}/>
            </StyledForm>
            <Text style={{ fontSize: '16px', textAlign: 'right' }} color="#ffffff">{t('Example: 0x123456988sf9009ewsdaf656123')}</Text>
          </StyledSunburst>
          <StyledSunburst style={{paddingTop: '15px'}}>
            <StyledForm>
              <Text className='StyledText' style={{ fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('Send Transaction Hash/ID:')}</Text>
              <StyledInput style={{borderRadius: '0', color: '#000000', backgroundColor: '#ccc'}}/>
            </StyledForm>
            <Text style={{ fontSize: '16px', textAlign: 'right' }} color="#ffffff">{t('Example: 0x123456988sf9009ewsdaf656123')}</Text>
          </StyledSunburst>
          <StyledSunburst style={{paddingTop: '15px'}}>
            <StyledForm>
              <Text className='StyledText' style={{ fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('Your HODL Signal Address:')}</Text>
              <StyledInput style={{borderRadius: '0', color: '#000000', backgroundColor: '#ccc'}}/>
            </StyledForm>
            <Text style={{ fontSize: '16px', textAlign: 'right' }} color="#ffffff">{t('Example: 0x123456988sf9009ewsdaf656123')}</Text>
          </StyledSunburst>
          <StyledSunburst style={{paddingTop: '15px'}}>
            <StyledForm>
              <Text className='StyledText' style={{ fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('Your Affiliate\'s Address:')}</Text>
              <StyledInput style={{borderRadius: '0', color: '#000000', backgroundColor: '#ccc'}}/>
            </StyledForm>
            <Text style={{ fontSize: '16px', textAlign: 'right' }} color="#ffffff">{t('Example: 0x123456988sf9009ewsdaf656123')}</Text>
          </StyledSunburst>
          
          <Flex style={{ position: 'relative', wordBreak: 'break-all', marginTop: '20px' }} justifyContent="start" alignItems="center">
            <Text style={{ fontSize: '15px', textAlign: 'left', marginRight: '15px' }} color="white">{t('To Tip A Developer, Use this Affiliate Address: ')}</Text>
            <Text style={{ fontSize: '15px', textAlign: 'left' }} color="#ffc000">{t('0xDF465C98bB8dDC6eBb7F9c1086120FD01eEF70AD')}</Text>
            <Button padding="0" style={{ background: "#002060" }} onClick={copyAddress}><CopyIcon padding="0" color="#ffc000" /></Button>
            <Tooltip isTooltipDisplayed={isDisplayed}>{t('Copied')}</Tooltip>
          </Flex>

          
          <Flex mb="50px" flexDirection="column" justifyContent='center' alignItems='center' mt='50px'>
            <Button width="250px" color="#002060" style={{ fontSize: '24px', background: '#ffc000', borderRadius: '0' }} disabled={pendingTx} onClick={onClickSubmit} >SUBMIT</Button>
            <Text style={{ fontSize: '17px', textAlign: 'center' }} width="auto" color="#ffffff">{t('Click Submit Button to Claim your HODL Signal Tokens')}</Text>
          </Flex>

          <Text style={{ fontSize: '17px', textAlign: 'center', padding: '0px 80px' }} color="#ffffff">{t('Important: You will need a small amount of Polygon (MATIC) to register an address. The gas fees to register each address is less than $0.02USD')}</Text>
        </div>

      </div>
    </div>
  )
}

export default ClaimPage
