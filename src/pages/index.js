import React from "react"

import Style from './index.module.css'

import BuyAndSell from '../components/buyAndSell'
import Cash4Stuff from '../components/cash4Stuff'
import Events from '../components/events'
import Footer from '../components/footer'
import Header from '../components/header'
import Intro from '../components/intro'
import WilayaDetails from '../components/wilayaDetails'

export default function Home() {
  return (
    <div>
      <Header />
      <div className={Style.conatiner}>
        <Intro />
        <BuyAndSell />
        <Cash4Stuff />
        <Events />
        <WilayaDetails />
      </div>
      <Footer />
    </div>
  )
}
