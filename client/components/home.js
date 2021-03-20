import React from 'react'
import Ofd from './ofd/ofd'
import Uslugi from './Uslugi/uslugi'
import Kassy from './kassy/kassy'
import Footer from './footer/footer'
import Partners from './parners/partners'
// import Tarif from './tarif/tarif'

const Home = () => {
  return (
    <div>
      <Ofd />
      <Uslugi />
      {/* <Tarif /> */}
      <Kassy />
      <Partners />
      <Footer />
    </div>

  )
}

Home.propTypes = {}

export default Home
