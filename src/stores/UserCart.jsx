import React, { useState, useEffect } from 'react';


// import { Carousel, Container, Row, Col, Button, Card, Modal, Navbar } from 'react-bootstrap';




const UserCart = () => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) { // prevent quantity from going below 1
            setQuantity(quantity - 1);
        }
    };





    return (
        <>
            <div className='d-none d-md-block'>
                <div className='container my-5'>
                    <h1 className='cart_Heading'> Shopping Cart</h1>
                </div>

                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-2  '>
                                <p><strong>product</strong></p>
                            </div>
                            <div className='col-5'>
                                <div className='row'>
                                    <div className='col-12 col-md-6'>
                                        <p className=' '><strong>Details</strong></p>

                                    </div>
                                    <div className='col-12 col-md-6'>
                                        <p className=' '><strong>price</strong></p>
                                    </div>
                                </div>

                            </div>
                            <div className='col-4'>

                                <div className='row'>
                                    <div className='col-12 col-md-6'>
                                        <p><strong>Quantity</strong></p>
                                    </div>
                                    <div className='col-12 col-md-6 '>
                                        <p><strong>Remove</strong></p>


                                    </div>
                                </div>
                            </div>
                            <div className='col-1'>
                                <p className=' '> <strong>  Total</strong></p>
                            </div>
                        </div>


                        <hr></hr>
                    </div>
                </section>

                {cartItems.map((item, index) => (

                    <div key={index} className='container'>
                        <div className='row '>
                            <div className='col-2   d-flex flex-column justify-content-center'>
                                <img src={item.image} className=' add_cart_img  img-fluid   ' />
                            </div>

                            <div className='col-5 bth_text_div d-flex flex-column justify-content-center'>
                                <div className='row'>
                                    <div className='col-12 col-md-6  '>
                                        <p className='cardpara2'>{item.description}</p>
                                        <p className='cardpara1'>{item.title}</p>
                                    </div>
                                    <div className='col-12 col-md-6  '>
                                        <p className='cardpara3'>{item.price}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-4  d-flex flex-column justify-content-center'>
                                <div className='row'>
                                    <div className='col-12 col-md-6'>


                                        {/* <button>  increment</button> */}
                                        {/* <button onClick={incrementCount}>Increment</button> */}
                                        <div className='containerquantity_btn'>
                                            <button onClick={decrement} className='butt_in_dec' >-</button>
                                            <div className='num_quty' >{quantity}</div>
                                            <button onClick={increment} className='butt_in_dec'  >+</button>
                                        </div>

                                    </div>
                                    <div className='col-12 col-md-6 trash_icon'>
                                        <i className="bi bi-trash" style={{ fontSize: '2em' }}></i>

                                    </div>
                                </div>
                            </div>

                            <div className='col-1  d-flex flex-column justify-content-center'>
                                <p className='cart_page_price'>{item.price}</p>
                            </div>

                            <hr></hr>
                        </div>
                    </div>

                ))}


            </div>



            <div className='  d-md-none'>
                <div className='container my-5 text-center'>
                    <h1 className='cart_Heading_sm'> Shopping Cart</h1>
                </div>

                <section>
                    <div className='container '>
                        <div className='row  '>
                            <div className='col-6 text-center '>
                                <p><strong>product</strong></p>
                            </div>
                            <div className='col-6  text-center '>

                                <p className=' '><strong>Details</strong></p>


                            </div>

                        </div>


                        <hr></hr>
                    </div>
                </section>

                {cartItems.map((item, index) => (

                    <div key={index} className='container'>
                        <div className='row '>
                            <div className='col-6 mb-4  d-flex flex-column justify-content-center'>
                                <img src={item.image} className=' add_cart_img  img-fluid   ' />
                            </div>

                            <div className='col-5  mb-4  bth_text_div d-flex flex-column justify-content-center'>
                                <div className='row'>
                                    <div className='col-12 col-md-6  '>
                                        <p className='cardpara2'>{item.description}</p>
                                        <p className='cardpara1'>{item.title}</p>
                                    </div>
                                    <div className='col-12 col-md-6  '>
                                        <p className='cardpara3'>{item.price}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-4  d-flex flex-column justify-content-center'>


                                <div className='col-6  trash_icon'>
                                    <i className="bi bi-trash" style={{ fontSize: '2em' }}></i>

                                </div>
                            </div>
                            <div className='col-4  d-flex flex-column justify-content-center'>

                                <div className='col-6 '>

                                    <div className='containerquantity_btn'>
                                        <button onClick={decrement} className='butt_in_dec' >-</button>
                                        <div className='num_quty' >{quantity}</div>
                                        <button onClick={increment} className='butt_in_dec'  >+</button>
                                    </div>

                                </div>

                            </div>

                            <div className='col-4  d-flex flex-column justify-content-center'>
                                <p className='cart_page_price'>{item.price}</p>
                            </div>

                            <hr></hr>
                        </div>
                    </div>

                ))}


            </div>
        </>
    )
}

export default UserCart