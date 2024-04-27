import React from 'react'
import "./featuredHotels.css"

const featuredHotels = () => {
    return (
        <div className="fHotel">
            <div className="fHotelItem">
                <img className='fHotelImage' src='https://cf.bstatic.com/xdata/images/hotel/square600/255854447.webp?k=f9c9d47f18b3156fdcc5596749d137f35e3cf4962a8d3d37d69be0066ec9bfc3&o=' alt='' />
                <span className="fHotelName">Aparthotel Stare Miasto</span>
                <span className="fHotelCity">Madrid</span>
                <span className="fHotelPrice">Starting from $120</span>
                <div className="fHotelRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fHotelItem">
                <img className='fHotelImage' src='https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=' alt='' />
                <span className="fHotelName">Aparthotel Stare Miasto</span>
                <span className="fHotelCity">Madrid</span>
                <span className="fHotelPrice">Starting from $120</span>
                <div className="fHotelRating">
                    <button>9.3</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fHotelItem">
                <img className='fHotelImage' src='https://cf.bstatic.com/xdata/images/hotel/square600/210943150.webp?k=1d3cb2f9c178756981110c1d6f895a65793f0ab4e62a613ee9f7d4ae140a3bad&o=' alt='' />
                <span className="fHotelName">Aparthotel Stare Miasto</span>
                <span className="fHotelCity">Madrid</span>
                <span className="fHotelPrice">Starting from $120</span>
                <div className="fHotelRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fHotelItem">
                <img className='fHotelImage' src='https://cf.bstatic.com/xdata/images/hotel/square600/179387540.webp?k=cbf33b04282d8beb50db374f587fedfc39a8787f761dc9ad3b823191cea4b5e1&o=' alt='' />
                <span className="fHotelName">Aparthotel Stare Miasto</span>
                <span className="fHotelCity">Madrid</span>
                <span className="fHotelPrice">Starting from $120</span>
                <div className="fHotelRating">
                    <button>9.3</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div >
    )
}

export default featuredHotels
