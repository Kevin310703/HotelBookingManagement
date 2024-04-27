import React from "react";
import "./searchItem.css";

const searchItem = () => {
    return (
        <div className="searchItem">
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/499804299.webp?k=facb3f95b207ad7d8fd829e1fa8d6689222811f96d862fe5f8f3956e7abdb848&o="
                alt=""
                className="searchImg"
            />
            <div className="searchDesc">
                <h1 className="searchTitle">Tower Street Apartments</h1>
                <span className="searchDistance">500m from center</span>
                <span className="searchTaxiOp">Free airport taxi</span>
                <span className="searchSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="searchFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="searchCancelOp">Free cancellation </span>
                <span className="searchCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$112</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    );
};

export default searchItem;
