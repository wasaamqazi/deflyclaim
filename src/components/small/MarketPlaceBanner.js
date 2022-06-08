import React from 'react'

import ScrollAnimation from 'react-animate-on-scroll'
function MarketPlaceBanner(props) {
  return (
    <ScrollAnimation
      delay={500}
      animateIn='animate__slideInLeft'
      animateOnce={true}
    >
      <div className='marketplace-banner'>
        <div className='font-weight-bold font-oswald banner-text'>Defly Marketplace</div>
        <div className='font-weight-bold font-oswald banner-text'>"Coming Soon"</div>
      </div>
    </ScrollAnimation>
  )
}

export default MarketPlaceBanner
