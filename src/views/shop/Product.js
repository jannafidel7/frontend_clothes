import React from 'react'
import { Link } from "react-router-dom";
import { Rating} from "@mui/material";

const Product = ({ product }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
                <img
                    className="card-img-top mx-auto"
                    src={product.images[0].url}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        {/* <a href="">{product.name}</a> */}
                        <Link to={`/product/${product._id}`}  >{product.name}</Link>
                    </h5>
                    <Rating name="half-rating" defaultValue={`${product.ratings/product.numOfReviews}`} precision={2.5} readOnly/>
          <span id="no_of_reviews">({product.numOfReviews} reviews)</span>
                    <p className="card-text">${product.price}</p>
                    {/* <BrowserRouter> */}
                        <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">View Details</Link>
                    {/* </BrowserRouter> */}

                </div>
            </div>
        </div>
    )
}
export default Product