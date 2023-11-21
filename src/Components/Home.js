import React from 'react'

function Home() {
  return (
    <div>
        <div className="add-to-cart">
            <img src="https://t3.ftcdn.net/jpg/06/20/26/14/360_F_620261443_xoQETRQEsQQUhaXWW4dZZYgXIfiqODYu.jpg" alt="" />
        </div>
        <h1 className='text-center'>Home Component</h1>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://idestiny.in/wp-content/uploads/2023/09/iPhone_15_Pink_PDP_Image_Position-1__WWEN.jpg" alt="" />
            </div>
            <div className="text-wrapper">
                <span>I-Phone</span>
                <span>Price : $1000</span>
            </div>
            <div className="btn-wrapper">
                <button>Add To Cart</button>
            </div>
        </div>
      
    </div>
  )
}

export default Home
