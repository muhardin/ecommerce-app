"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TestPage = () => {
  return (
    <>
      <div className="">
        <div className="theme-body product-detail-page">
          <div className="grid grid-cols-12 page-gap">
            <div className="col-span-12 md:col-span-5">
              <div className="product-card">
                <div className="product-for relative">
                  <div className="slick-list overflow-hidden">
                    <div
                      className="slick-track transition-transform duration-500 ease-in-out"
                      style={{
                        width: "100%",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      {/* Product images for slick-for */}
                      <div className="slick-slide">
                        <div className="product-imgwrap">
                          <img
                            className="img-fluid"
                            src="../assets/images/pages/product-detail/1.jpg"
                            alt="product-detail"
                          />
                        </div>
                      </div>
                      <div className="slick-slide">
                        <div className="product-imgwrap">
                          <img
                            className="img-fluid"
                            src="../assets/images/pages/product-detail/2.jpg"
                            alt="product-detail"
                          />
                        </div>
                      </div>
                      <div className="slick-slide">
                        <div className="product-imgwrap">
                          <img
                            className="img-fluid"
                            src="../assets/images/pages/product-detail/3.jpg"
                            alt="product-detail"
                          />
                        </div>
                      </div>
                      <div className="slick-slide slick-current slick-active">
                        <div className="product-imgwrap">
                          <img
                            className="img-fluid"
                            src="../assets/images/pages/product-detail/4.jpg"
                            alt="product-detail"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-to relative">
                  <div className="slick-list overflow-hidden">
                    <div
                      className="slick-track transition-transform duration-500 ease-in-out"
                      style={{
                        width: "100%",
                        transform: "translate3d(-810px, 0px, 0px)",
                      }}
                    >
                      {/* Cloned product images for slick-to */}
                      <div className="slick-slide slick-cloned">
                        <div className="product-imgwrap">
                          <img
                            className="img-fluid"
                            src="../assets/images/pages/product-detail/2.jpg"
                            alt="product-detail"
                          />
                        </div>
                      </div>
                      <div className="slick-slide slick-cloned">
                        <div className="product-imgwrap">
                          <img
                            className="img-fluid"
                            src="../assets/images/pages/product-detail/3.jpg"
                            alt="product-detail"
                          />
                        </div>
                      </div>
                      <div className="slick-slide slick-cloned">
                        <div className="product-imgwrap">
                          <img
                            className="img-fluid"
                            src="../assets/images/pages/product-detail/4.jpg"
                            alt="product-detail"
                          />
                        </div>
                      </div>
                      <div className="slick-slide">
                        <div className="product-imgwrap">
                          <img
                            className="img-fluid"
                            src="../assets/images/pages/product-detail/1.jpg"
                            alt="product-detail"
                          />
                        </div>
                      </div>
                      <div className="slick-slide">
                        <div className="product-imgwrap">
                          <img
                            className="img-fluid"
                            src="../assets/images/pages/product-detail/2.jpg"
                            alt="product-detail"
                          />
                        </div>
                      </div>
                      <div className="slick-slide">
                        <div className="product-imgwrap">
                          <img
                            className="img-fluid"
                            src="../assets/images/pages/product-detail/3.jpg"
                            alt="product-detail"
                          />
                        </div>
                      </div>
                      <div className="slick-slide slick-current slick-active">
                        <div className="product-imgwrap">
                          <img
                            className="img-fluid"
                            src="../assets/images/pages/product-detail/4.jpg"
                            alt="product-detail"
                          />
                        </div>
                      </div>
                      <div className="slick-slide slick-cloned slick-active">
                        <div className="product-imgwrap">
                          <img
                            className="img-fluid"
                            src="../assets/images/pages/product-detail/1.jpg"
                            alt="product-detail"
                          />
                        </div>
                      </div>
                      <div className="slick-slide slick-cloned slick-active">
                        <div className="product-imgwrap">
                          <img
                            className="img-fluid"
                            src="../assets/images/pages/product-detail/2.jpg"
                            alt="product-detail"
                          />
                        </div>
                      </div>
                      <div className="slick-slide slick-cloned">
                        <div className="product-imgwrap">
                          <img
                            className="img-fluid"
                            src="../assets/images/pages/product-detail/3.jpg"
                            alt="product-detail"
                          />
                        </div>
                      </div>
                      <div className="slick-slide slick-cloned">
                        <div className="product-imgwrap">
                          <img
                            className="img-fluid"
                            src="../assets/images/pages/product-detail/4.jpg"
                            alt="product-detail"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 cdxpro-detail">
              <div className="product-card">
                <div className="detail-group">
                  <div className="media">
                    <div>
                      <h2>Men Pink T-shirtual Jacket</h2>
                      <h6 className="text-light">Special price</h6>
                      <ul className="product-rating">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star-o"></i>
                        </li>
                      </ul>
                      <ul className="product-price">
                        <li className="new-price">$70</li>
                        <li className="old-price text-light fw-400">
                          <del>$80</del>
                        </li>
                        <li className="ofr-price">
                          <span className="badge badge-success">32% off</span>
                        </li>
                      </ul>
                    </div>
                    <div className="media-body">
                      <div className="product-share">
                        <span className="proshare-toggle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-share-2"
                          >
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line
                              x1="8.59"
                              y1="13.51"
                              x2="15.42"
                              y2="17.49"
                            ></line>
                            <line
                              x1="15.41"
                              y1="6.51"
                              x2="8.59"
                              y2="10.49"
                            ></line>
                          </svg>
                        </span>
                        <ul className="share-iconlist">
                          <li className="bg-fb">
                            <a href="https://www.facebook.com/">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li className="bg-twt">
                            <a href="https://twitter.com/">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li className="bg-insta">
                            <a href="https://www.instagram.com/">
                              <i className="fa fa-instagram"></i>
                            </a>
                          </li>
                          <li className="bg-whp">
                            <a href="https://www.whatsapp.com/">
                              <i className="fa fa-whatsapp"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detail-group">
                  <h6>product detail</h6>
                  <p className="mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,quis nostrud{" "}
                  </p>
                  <h5 className="mb-5">Hurry! Only 3 left in stock</h5>
                  <div className="progress progress-danger">
                    <div className="progress-bar progress-bar-striped progress-bar-animated w-1/2"></div>
                  </div>
                  <div className="text-danger fs-14 mt-5 mb-10 fw-500">
                    20 sold in last 24 hours
                  </div>
                  <h6>select size</h6>
                  <ul className="product-size">
                    <li>
                      <a href="javascript:void(0);">s</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">m</a>
                    </li>
                    <li className="active">
                      <a href="javascript:void(0);">l</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">xl </a>
                    </li>
                  </ul>
                </div>
                <div className="detail-group">
                  <h6>select color</h6>
                  <ul className="product-color">
                    <li className="bg-primary">
                      <div></div>
                    </li>
                    <li className="bg-secondary">
                      <div></div>
                    </li>
                    <li className="bg-success">
                      <div></div>
                    </li>
                    <li className="bg-info active">
                      <div></div>
                    </li>
                    <li className="bg-warning">
                      <div></div>
                    </li>
                  </ul>
                  <h6>Quantity</h6>
                  <div className="mb-15">
                    <div className="input-group pro-quantity">
                      <span className="input-group-text count-minus">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-minus"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </span>
                      <input
                        className="form-control pro-qty"
                        type="text"
                        name="qty count"
                        value="1"
                      />
                      <span className="input-group-text count-plus">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-plus"
                        >
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <a className="btn btn-primary" href="cart.html">
                    add to cart
                  </a>
                  <a className="btn btn-primary ml-15" href="wishlist.html">
                    wishlist
                  </a>
                </div>
                <div className="detail-group pb-0 mb-0 border-0">
                  <h6>Delivery</h6>
                  <div className="input-group product-delivery">
                    <span className="input-group-text">
                      <i className="fa fa-map-marker"></i>
                    </span>
                    <input
                      className="form-control"
                      type="text"
                      value="368900"
                      placeholder="Enter your pincod"
                    />
                    <span className="input-group-text">check</span>
                  </div>
                  <h5 className="fs-14 fw-400 mt-10 text-light">
                    Usually delivered in 3 days{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <div className="product-card product-detail-tab">
                <ul className="tabs tab-primary">
                  <li className="active">
                    <a href="#tab-1">Description </a>
                  </li>
                  <li className="">
                    <a href="#tab-2">Information </a>
                  </li>
                  <li className="">
                    <a href="#tab-3">Review (03)</a>
                  </li>
                </ul>
                <div className="tab-contents">
                  <div className="tab-item show" id="tab-1">
                    <p className="text-light">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div className="tab-item hidden" id="tab-2">
                    <p className="text-light">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div className="tab-item hidden" id="tab-3">
                    <ul className="review-list">
                      <li>
                        <div className="media">
                          <img
                            className="img-fluid"
                            src="../assets/images/avtar/2.jpg"
                            alt="review"
                          />
                          <div className="media-body">
                            {" "}
                            <a href="profile.html">
                              <h5>Thomas Vactom</h5>
                            </a>
                            <ul className="rating-list">
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-light">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </li>
                      <li>
                        <div className="media">
                          <img
                            className="img-fluid"
                            src="../assets/images/avtar/3.jpg"
                            alt="review"
                          />
                          <div className="media-body">
                            <a href="profile.html">
                              <h5>Johan deo</h5>
                            </a>
                            <ul className="rating-list">
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-light">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </li>
                      <li>
                        <div className="media">
                          <img
                            className="img-fluid"
                            src="../assets/images/avtar/4.jpg"
                            alt="review"
                          />
                          <div className="media-body">
                            <a href="profile.html">
                              <h5>Omeni Rome</h5>
                            </a>
                            <ul className="rating-list">
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                              <li>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-light">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </li>
                    </ul>
                    <div className="review-box">
                      <h4 className="mb-5">Your Rating</h4>
                      <ul className="rating-list mb-10">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <h4 className="mb-10">Write Review</h4>
                      <form className="form-theme">
                        <div className="form-group">
                          <div className="small-group">
                            <div>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Enter your name"
                              />
                            </div>
                            <div>
                              <input
                                className="form-control"
                                type="email"
                                placeholder="Enter your email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Your Review"
                          ></textarea>
                        </div>
                        <div className="form-group mb-0">
                          <a
                            className="btn btn-primary"
                            href="javascript:void(0)"
                          >
                            Post review
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <div className="related-product">
                <h3>Related products</h3>
                <div
                  className="slide-5 arrow-style1 slick-initialized slick-slider"
                  data-slick='{"slidesToShow": 4, "slidesToScroll": 1}'
                >
                  <button
                    className="slick-prev slick-arrow"
                    aria-label="Previous"
                    type="button"
                  >
                    Previous
                  </button>
                  <div className="slick-list draggable">
                    <div className="slick-track opacity-100 w-4860 transform -translate-x-1080">
                      <div
                        className="w-[270px] slick-slide slick-cloned"
                        data-slick-index="-4"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="product-boxwrap">
                          <div className="product-imgwrap">
                            <a href="product-detail.html" tabIndex={-1}>
                              <img
                                className="img-fluid"
                                src="../assets/images/pages/product/4.jpg"
                                alt="product box"
                              />
                            </a>
                            <span className="product-sale-label">Hot</span>
                            <ul className="social">
                              <li>
                                <a
                                  href="cart.html"
                                  data-tip="add to cart"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-detail.html"
                                  data-tip="Quick View"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tip="Wishlist"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detailwrap">
                            <div>
                              <a href="product-detail.html" tabIndex={-1}>
                                <h5>white T-shirt</h5>
                              </a>
                              <div className="pro-rating">
                                <input
                                  type="radio"
                                  id=""
                                  name="input-4"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-41">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-4"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-42">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-4"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-43">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-4"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-44">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-4"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-45">
                                  {" "}
                                </label>
                              </div>
                              <div className="pro-price">
                                $80<span className="old-price">$80</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="W-[270PX] slick-slide slick-cloned"
                        data-slick-index="-3"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="product-boxwrap">
                          <div className="product-imgwrap">
                            <a href="product-detail.html" tabIndex={-1}>
                              <img
                                className="img-fluid"
                                src="../assets/images/pages/product/5.jpg"
                                alt="product box"
                              />
                            </a>
                            <span className="product-discount-label">-38%</span>
                            <ul className="social">
                              <li>
                                <a
                                  href="cart.html"
                                  data-tip="add to cart"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-detail.html"
                                  data-tip="Quick View"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tip="Wishlist"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detailwrap">
                            <div>
                              <a href="product-detail.html" tabIndex={-1}>
                                <h5>blue jacket</h5>
                              </a>
                              <div className="pro-rating">
                                <input
                                  type="radio"
                                  id=""
                                  name="input-5"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-51">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-5"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-52">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-5"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-53">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-5"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-54">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-5"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-55">
                                  {" "}
                                </label>
                              </div>
                              <div className="pro-price">
                                $78<span className="old-price">$110</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="W-[270px] slick-slide slick-cloned"
                        data-slick-index="-2"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="product-boxwrap">
                          <div className="product-imgwrap">
                            <a href="product-detail.html" tabIndex={-1}>
                              <img
                                className="img-fluid"
                                src="../assets/images/pages/product/6.jpg"
                                alt="product box"
                              />
                            </a>
                            <span className="product-sale-label">Hot</span>
                            <ul className="social">
                              <li>
                                <a
                                  href="cart.html"
                                  data-tip="add to cart"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-detail.html"
                                  data-tip="Quick View"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tip="Wishlist"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detailwrap">
                            <div>
                              <a href="product-detail.html" tabIndex={-1}>
                                <h5>Black T-shirt</h5>
                              </a>
                              <div className="pro-rating">
                                <input
                                  type="radio"
                                  id=""
                                  name="input-6"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-61">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-6"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-62">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-6"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-63">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-6"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-64">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-6"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-65">
                                  {" "}
                                </label>
                              </div>
                              <div className="pro-price">
                                $35<span className="old-price">$35</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned w-[270px]"
                        data-slick-index="-1"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="product-boxwrap">
                          <div className="product-imgwrap">
                            <a href="product-detail.html" tabIndex={-1}>
                              <img
                                className="img-fluid"
                                src="../assets/images/pages/product/7.jpg"
                                alt="product box"
                              />
                            </a>
                            <span className="product-discount-label">-14%</span>
                            <ul className="social">
                              <li>
                                <a
                                  href="cart.html"
                                  data-tip="add to cart"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-detail.html"
                                  data-tip="Quick View"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tip="Wishlist"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detailwrap">
                            <div>
                              <a href="product-detail.html" tabIndex={-1}>
                                <h5>Leather Jacket</h5>
                              </a>
                              <div className="pro-rating">
                                <input
                                  type="radio"
                                  id=""
                                  name="input-7"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-71">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-7"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-72">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-7"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-73">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-7"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-74">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-7"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-75">
                                  {" "}
                                </label>
                              </div>
                              <div className="pro-price">
                                $71<span className="old-price">$89</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="w-[270px] slick-slide slick-current slick-active"
                        data-slick-index="0"
                        aria-hidden="false"
                        tabIndex={0}
                      >
                        <div className="product-boxwrap">
                          <div className="product-imgwrap">
                            <a href="product-detail.html" tabIndex={0}>
                              <img
                                className="img-fluid"
                                src="../assets/images/pages/product/1.jpg"
                                alt="product box"
                              />
                            </a>
                            <span className="product-sale-label">Hot</span>
                            <span className="product-discount-label">-8%</span>
                            <ul className="social">
                              <li>
                                <a
                                  href="cart.html"
                                  data-tip="add to cart"
                                  tabIndex={0}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-detail.html"
                                  data-tip="Quick View"
                                  tabIndex={0}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tip="Wishlist"
                                  tabIndex={0}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detailwrap">
                            <div>
                              <a href="product-detail.html" tabIndex={0}>
                                <h5>Cheks red Shirt</h5>
                              </a>
                              <div className="pro-rating">
                                <input
                                  type="radio"
                                  id="input-11"
                                  name="input-1"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-11">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-12"
                                  name="input-1"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-12">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-13"
                                  name="input-1"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-13">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-14"
                                  name="input-1"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-14">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-15"
                                  name="input-1"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-15">
                                  {" "}
                                </label>
                              </div>
                              <div className="pro-price">
                                $252<span className="old-price">$238</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="w-[270px] slick-slide slick-active"
                        data-slick-index="1"
                        aria-hidden="false"
                        tabIndex={0}
                      >
                        <div className="product-boxwrap">
                          <div className="product-imgwrap">
                            <a href="product-detail.html" tabIndex={0}>
                              <img
                                className="img-fluid"
                                src="../assets/images/pages/product/2.jpg"
                                alt="product box"
                              />
                            </a>
                            <span className="product-sale-label">Hot</span>
                            <ul className="social">
                              <li>
                                <a
                                  href="cart.html"
                                  data-tip="add to cart"
                                  tabIndex={0}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-detail.html"
                                  data-tip="Quick View"
                                  tabIndex={0}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tip="Wishlist"
                                  tabIndex={0}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detailwrap">
                            <div>
                              <a href="product-detail.html" tabIndex={0}>
                                <h5>pink T-shirt</h5>
                              </a>
                              <div className="pro-rating">
                                <input
                                  type="radio"
                                  id="input-21"
                                  name="input-2"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-21">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-22"
                                  name="input-2"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-22">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-23"
                                  name="input-2"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-23">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-24"
                                  name="input-2"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-24">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-25"
                                  name="input-2"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-25">
                                  {" "}
                                </label>
                              </div>
                              <div className="pro-price">
                                $180<span className="old-price">$180</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="w-[270px]  slick-slide slick-active"
                        data-slick-index="2"
                        aria-hidden="false"
                        tabIndex={0}
                      >
                        <div className="product-boxwrap">
                          <div className="product-imgwrap">
                            <a href="product-detail.html" tabIndex={0}>
                              <img
                                className="img-fluid"
                                src="../assets/images/pages/product/3.jpg"
                                alt="product box"
                              />
                            </a>
                            <span className="product-discount-label">-18%</span>
                            <ul className="social">
                              <li>
                                <a
                                  href="cart.html"
                                  data-tip="add to cart"
                                  tabIndex={0}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-detail.html"
                                  data-tip="Quick View"
                                  tabIndex={0}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tip="Wishlist"
                                  tabIndex={0}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detailwrap">
                            <div>
                              <a href="product-detail.html" tabIndex={0}>
                                <h5>sky blue shirt</h5>
                              </a>
                              <div className="pro-rating">
                                <input
                                  type="radio"
                                  id="input-31"
                                  name="input-3"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-31">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-32"
                                  name="input-3"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-32">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-33"
                                  name="input-3"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-33">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-34"
                                  name="input-3"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-34">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-35"
                                  name="input-3"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-35">
                                  {" "}
                                </label>
                              </div>
                              <div className="pro-price">
                                $90<span className="old-price">$110</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="w-[270px]  slick-slide slick-active"
                        data-slick-index="3"
                        aria-hidden="false"
                        tabIndex={0}
                      >
                        <div className="product-boxwrap">
                          <div className="product-imgwrap">
                            <a href="product-detail.html" tabIndex={0}>
                              <img
                                className="img-fluid"
                                src="../assets/images/pages/product/4.jpg"
                                alt="product box"
                              />
                            </a>
                            <span className="product-sale-label">Hot</span>
                            <ul className="social">
                              <li>
                                <a
                                  href="cart.html"
                                  data-tip="add to cart"
                                  tabIndex={0}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-detail.html"
                                  data-tip="Quick View"
                                  tabIndex={0}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tip="Wishlist"
                                  tabIndex={0}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detailwrap">
                            <div>
                              <a href="product-detail.html" tabIndex={0}>
                                <h5>white T-shirt</h5>
                              </a>
                              <div className="pro-rating">
                                <input
                                  type="radio"
                                  id="input-41"
                                  name="input-4"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-41">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-42"
                                  name="input-4"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-42">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-43"
                                  name="input-4"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-43">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-44"
                                  name="input-4"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-44">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-45"
                                  name="input-4"
                                  tabIndex={0}
                                />
                                <label className="star" htmlFor="input-45">
                                  {" "}
                                </label>
                              </div>
                              <div className="pro-price">
                                $80<span className="old-price">$80</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="w-[270px]  slick-slide"
                        data-slick-index="4"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="product-boxwrap">
                          <div className="product-imgwrap">
                            <a href="product-detail.html" tabIndex={-1}>
                              <img
                                className="img-fluid"
                                src="../assets/images/pages/product/5.jpg"
                                alt="product box"
                              />
                            </a>
                            <span className="product-discount-label">-38%</span>
                            <ul className="social">
                              <li>
                                <a
                                  href="cart.html"
                                  data-tip="add to cart"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-detail.html"
                                  data-tip="Quick View"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tip="Wishlist"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detailwrap">
                            <div>
                              <a href="product-detail.html" tabIndex={-1}>
                                <h5>blue jacket</h5>
                              </a>
                              <div className="pro-rating">
                                <input
                                  type="radio"
                                  id="input-51"
                                  name="input-5"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-51">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-52"
                                  name="input-5"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-52">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-53"
                                  name="input-5"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-53">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-54"
                                  name="input-5"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-54">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-55"
                                  name="input-5"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-55">
                                  {" "}
                                </label>
                              </div>
                              <div className="pro-price">
                                $78<span className="old-price">$110</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide w-[270px] "
                        data-slick-index="5"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="product-boxwrap">
                          <div className="product-imgwrap">
                            <a href="product-detail.html" tabIndex={-1}>
                              <img
                                className="img-fluid"
                                src="../assets/images/pages/product/6.jpg"
                                alt="product box"
                              />
                            </a>
                            <span className="product-sale-label">Hot</span>
                            <ul className="social">
                              <li>
                                <a
                                  href="cart.html"
                                  data-tip="add to cart"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-detail.html"
                                  data-tip="Quick View"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tip="Wishlist"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detailwrap">
                            <div>
                              <a href="product-detail.html" tabIndex={-1}>
                                <h5>Black T-shirt</h5>
                              </a>
                              <div className="pro-rating">
                                <input
                                  type="radio"
                                  id="input-61"
                                  name="input-6"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-61">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-62"
                                  name="input-6"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-62">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-63"
                                  name="input-6"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-63">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-64"
                                  name="input-6"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-64">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-65"
                                  name="input-6"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-65">
                                  {" "}
                                </label>
                              </div>
                              <div className="pro-price">
                                $35<span className="old-price">$35</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide w-[270px] "
                        data-slick-index="6"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="product-boxwrap">
                          <div className="product-imgwrap">
                            <a href="product-detail.html" tabIndex={-1}>
                              <img
                                className="img-fluid"
                                src="../assets/images/pages/product/7.jpg"
                                alt="product box"
                              />
                            </a>
                            <span className="product-discount-label">-14%</span>
                            <ul className="social">
                              <li>
                                <a
                                  href="cart.html"
                                  data-tip="add to cart"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-detail.html"
                                  data-tip="Quick View"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tip="Wishlist"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detailwrap">
                            <div>
                              <a href="product-detail.html" tabIndex={-1}>
                                <h5>Leather Jacket</h5>
                              </a>
                              <div className="pro-rating">
                                <input
                                  type="radio"
                                  id="input-71"
                                  name="input-7"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-71">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-72"
                                  name="input-7"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-72">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-73"
                                  name="input-7"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-73">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-74"
                                  name="input-7"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-74">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id="input-75"
                                  name="input-7"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-75">
                                  {" "}
                                </label>
                              </div>
                              <div className="pro-price">
                                $71<span className="old-price">$89</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="w-[270px]  slick-slide slick-cloned"
                        data-slick-index="7"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="product-boxwrap">
                          <div className="product-imgwrap">
                            <a href="product-detail.html" tabIndex={-1}>
                              <img
                                className="img-fluid"
                                src="../assets/images/pages/product/1.jpg"
                                alt="product box"
                              />
                            </a>
                            <span className="product-sale-label">Hot</span>
                            <span className="product-discount-label">-8%</span>
                            <ul className="social">
                              <li>
                                <a
                                  href="cart.html"
                                  data-tip="add to cart"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-detail.html"
                                  data-tip="Quick View"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tip="Wishlist"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detailwrap">
                            <div>
                              <a href="product-detail.html" tabIndex={-1}>
                                <h5>Cheks red Shirt</h5>
                              </a>
                              <div className="pro-rating">
                                <input
                                  type="radio"
                                  id=""
                                  name="input-1"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-11">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-1"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-12">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-1"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-13">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-1"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-14">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-1"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-15">
                                  {" "}
                                </label>
                              </div>
                              <div className="pro-price">
                                $252<span className="old-price">$238</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned w-[270px] "
                        data-slick-index="8"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="product-boxwrap">
                          <div className="product-imgwrap">
                            <a href="product-detail.html" tabIndex={-1}>
                              <img
                                className="img-fluid"
                                src="../assets/images/pages/product/2.jpg"
                                alt="product box"
                              />
                            </a>
                            <span className="product-sale-label">Hot</span>
                            <ul className="social">
                              <li>
                                <a
                                  href="cart.html"
                                  data-tip="add to cart"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-detail.html"
                                  data-tip="Quick View"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tip="Wishlist"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detailwrap">
                            <div>
                              <a href="product-detail.html" tabIndex={-1}>
                                <h5>pink T-shirt</h5>
                              </a>
                              <div className="pro-rating">
                                <input
                                  type="radio"
                                  id=""
                                  name="input-2"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-21">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-2"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-22">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-2"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-23">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-2"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-24">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-2"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-25">
                                  {" "}
                                </label>
                              </div>
                              <div className="pro-price">
                                $180<span className="old-price">$180</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned w-[270px] "
                        data-slick-index="9"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="product-boxwrap">
                          <div className="product-imgwrap">
                            <a href="product-detail.html" tabIndex={-1}>
                              <img
                                className="img-fluid"
                                src="../assets/images/pages/product/3.jpg"
                                alt="product box"
                              />
                            </a>
                            <span className="product-discount-label">-18%</span>
                            <ul className="social">
                              <li>
                                <a
                                  href="cart.html"
                                  data-tip="add to cart"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-detail.html"
                                  data-tip="Quick View"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tip="Wishlist"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detailwrap">
                            <div>
                              <a href="product-detail.html" tabIndex={-1}>
                                <h5>sky blue shirt</h5>
                              </a>
                              <div className="pro-rating">
                                <input
                                  type="radio"
                                  id=""
                                  name="input-3"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-31">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-3"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-32">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-3"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-33">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-3"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-34">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-3"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-35">
                                  {" "}
                                </label>
                              </div>
                              <div className="pro-price">
                                $90<span className="old-price">$110</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned w-[270px] "
                        data-slick-index="10"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="product-boxwrap">
                          <div className="product-imgwrap">
                            <a href="product-detail.html" tabIndex={-1}>
                              <img
                                className="img-fluid"
                                src="../assets/images/pages/product/4.jpg"
                                alt="product box"
                              />
                            </a>
                            <span className="product-sale-label">Hot</span>
                            <ul className="social">
                              <li>
                                <a
                                  href="cart.html"
                                  data-tip="add to cart"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-detail.html"
                                  data-tip="Quick View"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tip="Wishlist"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detailwrap">
                            <div>
                              <a href="product-detail.html" tabIndex={-1}>
                                <h5>white T-shirt</h5>
                              </a>
                              <div className="pro-rating">
                                <input
                                  type="radio"
                                  id=""
                                  name="input-4"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-41">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-4"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-42">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-4"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-43">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-4"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-44">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-4"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-45">
                                  {" "}
                                </label>
                              </div>
                              <div className="pro-price">
                                $80<span className="old-price">$80</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="w-[270px] slick-slide slick-cloned"
                        data-slick-index="11"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="product-boxwrap">
                          <div className="product-imgwrap">
                            <a href="product-detail.html" tabIndex={-1}>
                              <img
                                className="img-fluid"
                                src="../assets/images/pages/product/5.jpg"
                                alt="product box"
                              />
                            </a>
                            <span className="product-discount-label">-38%</span>
                            <ul className="social">
                              <li>
                                <a
                                  href="cart.html"
                                  data-tip="add to cart"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-detail.html"
                                  data-tip="Quick View"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tip="Wishlist"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detailwrap">
                            <div>
                              <a href="product-detail.html" tabIndex={-1}>
                                <h5>blue jacket</h5>
                              </a>
                              <div className="pro-rating">
                                <input
                                  type="radio"
                                  id=""
                                  name="input-5"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-51">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-5"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-52">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-5"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-53">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-5"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-54">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-5"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-55">
                                  {" "}
                                </label>
                              </div>
                              <div className="pro-price">
                                $78<span className="old-price">$110</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="W-[270PX] slick-slide slick-cloned"
                        data-slick-index="12"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="product-boxwrap">
                          <div className="product-imgwrap">
                            <a href="product-detail.html" tabIndex={-1}>
                              <img
                                className="img-fluid"
                                src="../assets/images/pages/product/6.jpg"
                                alt="product box"
                              />
                            </a>
                            <span className="product-sale-label">Hot</span>
                            <ul className="social">
                              <li>
                                <a
                                  href="cart.html"
                                  data-tip="add to cart"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-detail.html"
                                  data-tip="Quick View"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tip="Wishlist"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detailwrap">
                            <div>
                              <a href="product-detail.html" tabIndex={-1}>
                                <h5>Black T-shirt</h5>
                              </a>
                              <div className="pro-rating">
                                <input
                                  type="radio"
                                  id=""
                                  name="input-6"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-61">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-6"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-62">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-6"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-63">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-6"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-64">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-6"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-65">
                                  {" "}
                                </label>
                              </div>
                              <div className="pro-price">
                                $35<span className="old-price">$35</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="W-[270PX] slick-slide slick-cloned"
                        data-slick-index="13"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="product-boxwrap">
                          <div className="product-imgwrap">
                            <a href="product-detail.html" tabIndex={-1}>
                              <img
                                className="img-fluid"
                                src="../assets/images/pages/product/7.jpg"
                                alt="product box"
                              />
                            </a>
                            <span className="product-discount-label">-14%</span>
                            <ul className="social">
                              <li>
                                <a
                                  href="cart.html"
                                  data-tip="add to cart"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-detail.html"
                                  data-tip="Quick View"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tip="Wishlist"
                                  tabIndex={-1}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detailwrap">
                            <div>
                              <a href="product-detail.html" tabIndex={-1}>
                                <h5>Leather Jacket</h5>
                              </a>
                              <div className="pro-rating">
                                <input
                                  type="radio"
                                  id=""
                                  name="input-7"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-71">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-7"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-72">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-7"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-73">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-7"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-74">
                                  {" "}
                                </label>
                                <input
                                  type="radio"
                                  id=""
                                  name="input-7"
                                  tabIndex={-1}
                                />
                                <label className="star" htmlFor="input-75">
                                  {" "}
                                </label>
                              </div>
                              <div className="pro-price">
                                $71<span className="old-price">$89</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="slick-next slick-arrow"
                    aria-label="Next"
                    type="button"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestPage;
