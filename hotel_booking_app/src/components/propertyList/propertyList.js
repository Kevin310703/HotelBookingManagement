import React from 'react'
import "./propertyList.css"
const propertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img className='pListImg' src='https://r-xx.bstatic.com/xdata/images/city/170x136/688907.jpg?k=8a219233969467d9f7ff828918cce2a53b4db6f1da1039d27222441ffb97c409&o=' alt='' />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img className='pListImg' src='https://q-xx.bstatic.com/xdata/images/xphoto/263x197/321923131.jpeg?k=acb99a7c8201734e0264ee1fa70cde287f371269b9741958b0519b00be443123&o=' alt='' />
                <div className="pListTitles">
                    <h1>Paris</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img className='pListImg' src='https://r-xx.bstatic.com/xdata/images/xphoto/263x197/321936536.jpeg?k=afe4f57f95913e5a762b408e8ba0bbb8cbfcc5f4c31b0b899586709f55c1d5d7&o=' alt='' />
                <div className="pListTitles">
                    <h1>Duabi</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img className='pListImg' src='https://r-xx.bstatic.com/xdata/images/xphoto/263x197/72203920.jpeg?k=8901bcc9d621d9cd12a9cf564b1b08a7d786b6cc2152d189f3172befcd269af6&o=' alt='' />
                <div className="pListTitles">
                    <h1>Barcelona</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
        </div>
    )
}

export default propertyList