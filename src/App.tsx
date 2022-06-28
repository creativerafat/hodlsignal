import React, { lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import useUserAgent from 'hooks/useUserAgent'
import useScrollOnRouteChange from 'hooks/useScrollOnRouteChange'
import { usePollCoreFarmData } from 'state/farms/hooks'
import { DatePickerPortal } from 'components/DatePicker'
import GlobalStyle from './style/Global'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import { ToastListener } from './contexts/ToastsContext'
import PageLoader from './components/Loader/PageLoader'
import EasterEgg from './components/EasterEgg'
import history from './routerHistory'

const Home = lazy(() => import('./views/Home'))
const Claim = lazy(() => import('./views/Claim'))
const ClaimPage = lazy(() => import('./views/ClaimPage'))
const Transform = lazy(() => import('./views/Transform'))
const EntryForm = lazy(() => import('./views/EntryForm'))
const HowToTransform = lazy(() => import('./views/HowToTransform'))
const Goal = lazy(() => import('./views/Goal'))
const Strategy = lazy(() => import('./views/Strategy'))
const DenSocial = lazy(() => import('./views/DenSocial'))
const ContestList = lazy(() => import('./views/ContestList'))
const Team = lazy(() => import('./views/Team'))
const Brand = lazy(() => import('./views/Brand'))
const Mission = lazy(() => import('./views/Mission'))
const Abstract = lazy(() => import('./views/Abstract'))
const NoHarm = lazy(() => import('./views/NoHarm'))
const WalletSetup = lazy(() => import('./views/WalletSetup'))
const FAQ = lazy(() => import('./views/FAQ'))

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  useEagerConnect()
  usePollCoreFarmData()
  useScrollOnRouteChange()
  useUserAgent()

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <SuspenseWithChunkError fallback={<PageLoader />}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/claim" exact>
            <Claim />
          </Route>
        </Switch>
        <Switch>
          <Route path="/howtotransform" exact>
            <HowToTransform />
          </Route>
        </Switch>
        <Switch>
          <Route path="/goal" exact>
            <Goal />
          </Route>
        </Switch>
        <Switch>
          <Route path="/strategy" exact>
            <Strategy />
          </Route>
        </Switch>
        <Switch>
          <Route path="/densocial" exact>
            <DenSocial />
          </Route>
        </Switch>
        <Switch>
          <Route path="/contestlist" exact>
            <ContestList />
          </Route>
        </Switch>
        <Switch>
          <Route path="/team" exact>
            <Team />
          </Route>
        </Switch>
        <Switch>
          <Route path="/mission" exact>
            <Mission />
          </Route>
        </Switch>
        <Switch>
          <Route path="/abstract" exact>
            <Abstract />
          </Route>
        </Switch>
        <Switch>
          <Route path="/walletsetup" exact>
            <WalletSetup />
          </Route>
        </Switch>
        <Switch>
          <Route path="/brand" exact>
            <Brand />
          </Route>
        </Switch>
        <Switch>
          <Route path="/faq" exact>
            <FAQ />
          </Route>
        </Switch>
        <Switch>
          <Route path="/noharm" exact>
            <NoHarm />
          </Route>
        </Switch>
        <Switch>
          <Route path="/claimpage" exact>
            <ClaimPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/transform" exact>
            <Transform />
          </Route>
        </Switch>
        <Switch>
          <Route path="/entryform/:network/:token/:poolindex" exact component={EntryForm} />
        </Switch>
      </SuspenseWithChunkError>
      <EasterEgg iterations={2} />
      <ToastListener />
      <DatePickerPortal />
    </Router>
  )
}

export default React.memo(App)
