import React from 'react'

import ScrollAnimation from 'react-animate-on-scroll'
function MarketPlaceCategory(props) {
  return (
    <ScrollAnimation
      delay={500}
      animateIn='animate__slideInLeft'
      animateOnce={true}
    >
      <div className='marketplace-category'>
        <div className='d-flex justify-content-center flex-direction'>
          <div className='category'>
            <div className='category-img'>
              <img
                src='https://ipfs.infura.io/ipfs/QmVWpwXRZLCp5jAGicakvsLukn6pxMR1rkoo9SZ7F4Xh3o'
                alt=''
              />
            </div>
            <h5 className='font-oswald'>Category_1</h5>
          </div>
          <div className='category'>
            <div className='category-img'>
              <img
                src='https://ipfs.infura.io/ipfs/QmVWpwXRZLCp5jAGicakvsLukn6pxMR1rkoo9SZ7F4Xh3o'
                alt=''
              />
            </div>
            <h5 className='font-oswald'>Category_2</h5>
          </div>
          <div className='category'>
            <div className='category-img'>
              <img
                src='https://ipfs.infura.io/ipfs/QmVWpwXRZLCp5jAGicakvsLukn6pxMR1rkoo9SZ7F4Xh3o'
                alt=''
              />
            </div>
            <h5 className='font-oswald'>Category_3</h5>
          </div>
          <div className='category'>
            <div className='category-img'>
              <img
                src='https://ipfs.infura.io/ipfs/QmVWpwXRZLCp5jAGicakvsLukn6pxMR1rkoo9SZ7F4Xh3o'
                alt=''
              />
            </div>
            <h5 className='font-oswald'>Category_4</h5>
          </div>
          <div className='category'>
            <div className='category-img'>
              <img
                src='https://ipfs.infura.io/ipfs/QmVWpwXRZLCp5jAGicakvsLukn6pxMR1rkoo9SZ7F4Xh3o'
                alt=''
              />
            </div>
            <h5 className='font-oswald'>Category_5</h5>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default MarketPlaceCategory
