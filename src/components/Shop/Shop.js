import React from 'react';
import './Shop.css'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import shop1 from '../../images/shop/shop1.jpg'
import shop2 from '../../images/shop/shop2.jpg'
import shop3 from '../../images/shop/shop3.png'
import shop4 from '../../images/shop/shop4.jpg'
import shop5 from '../../images/shop/shop5.jpg'
import shop6 from '../../images/shop/shop6.jpg'
const Shop = () => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>

            <div className="row mb-2 mt-2 w-75 g-4 mx-auto">
                <div className="col-lg-4 shop-data g-3 justify-content-center align-items-center">

                    <img mt-3 className="shop-img mt-3 rounded-circle" width="150" height="150" src={shop1} alt="" />
                    <h4>Microscope</h4>
                    <h6>Price: $ 234.3</h6>
                    <p>We are selling worlclass microscope.We have various brand of microscope</p>
                    <Button variant="success" className="shop-button">{element} Add Cart</Button>
                </div>
                <div className="col-lg-4 shop-data g-3">
                    <img mt-3 className="shop-img mt-3 rounded-circle" width="150" height="150" src={shop2} alt="" />

                    <h4>Pulse meter</h4>
                    <h6>Price: $ 234.3</h6>
                    <p>A pulse oximeter is a device that is usually placed on a fingertip. It uses light beams saturation of the blood and the pulse rate</p>
                    <Button variant="success" className="shop-button">{element} Add Cart</Button>
                </div>
                <div className="col-lg-4 shop-data g-3">
                    <img mt-3 className="shop-img mt-3 rounded-circle" width="150" height="150" src={shop3} alt="" />


                    <h4>Operation Light</h4>
                    <h6>Price: $ 2456.3</h6>
                    <p>Its the best operation light that we are selling.</p>
                    <Button variant="success" className="shop-button">{element} Add Cart</Button>
                </div>
                <div className="col-lg-4 shop-data g-3">
                    <img mt-3 className="shop-img mt-3 rounded-circle" width="150" height="150" src={shop4} alt="" />


                    <h4>Cardiac Care Instruments</h4>
                    <h6>Price: $ 24.3</h6>
                    <p>We sell the best Cardiac Care Instruments in our country.Fell free to contact us.</p>
                    <Button variant="success" className="shop-button">{element} Add Cart</Button>
                </div>
                <div className="col-lg-4 shop-data g-3">
                    <img mt-3 className="shop-img mt-3 rounded-circle" width="150" height="150" src={shop5} alt="" />


                    <h4>Ultrasonography</h4>
                    <h6>Price: $ 2348.3</h6>
                    <p>And lastly this is the latest ultrasonography that we are selling.</p>
                    <Button variant="success" className="shop-button">{element} Add Cart</Button>
                </div>
                <div className="col-lg-4 shop-data g-3">
                    <img mt-3 className="shop-img mt-3 rounded-circle" width="150" height="150" src={shop6} alt="" />


                    <h4>Subxiphoid Surgery</h4>
                    <h6>Price: $ 2344.3</h6>
                    <p>And lastly this,this is the  subxiphoid surgery instruments we are selling.</p>
                    <Button variant="success" className="shop-button">{element} Add Cart</Button>
                </div>
            </div>
        </div>
    );
};

export default Shop;