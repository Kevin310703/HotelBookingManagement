import React from 'react'
import "./featured.css"
const Featured = () => {
    return (
        <div className="featured">
            <div className='featuredItem'>
                <img className="featuredImg" src='https://cf.bstatic.com/xdata/images/city/600x600/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=' alt='' />
                <div className='featuredTitles'>
                    <h1>Hanoi</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className='featuredItem'>
                <img className="featuredImg" src='https://cf.bstatic.com/xdata/images/city/600x600/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o=' alt='' />
                <div className='featuredTitles'>
                    <h1>Da Nang</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className='featuredItem'>
                <img className="featuredImg" src='https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=' alt='' />
                <div className='featuredTitles'>
                    <h1>Da Lat</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured