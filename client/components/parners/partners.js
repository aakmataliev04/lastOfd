import React from 'react'
import './partners.css'
import partner1 from './partnersImg/10.png'
import partner2 from './partnersImg/11.png'
import partner3 from './partnersImg/22.png'
import partner4 from './partnersImg/33.png'
import partner5 from './partnersImg/55.png'
import partner6 from './partnersImg/66.png'
import partner7 from './partnersImg/77.png'
import partner8 from './partnersImg/88.png'

const Partners = () => {
  return (
    <div className="partner">
      <div className="partnersTittle">Партнеры</div>
      <div className="partnersContainer">
        <div className="partnersContainerForPhoto">
          <img src={partner1} alt="" className="partnerPhoto" />
          <img src={partner2} alt="" className="partnerPhoto" />
          <img src={partner3} alt="" className="partnerPhoto" />
          <img src={partner4} alt="" className="partnerPhoto" />
        </div>
        <div className="partnersContainerForPhoto">
          <img src={partner5} alt="" className="partnerPhoto" />
          <img src={partner6} alt="" className="partnerPhoto" />
          <img src={partner7} alt="" className="partnerPhoto" />
          <img src={partner8} alt="" className="partnerPhoto" />
        </div>
      </div>
    </div>
  )
}

export default Partners
