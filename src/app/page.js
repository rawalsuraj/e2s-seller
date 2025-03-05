import Link from "next/link";
import styles from "./page.module.css";
import { IoIosSearch } from "react-icons/io";
// import Slider from "react-slick";




export default function Home() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  // };
  return (
    <>
      <header>
        <div className="container">
          <div className="header_section">
            <div className="logo">
              <a href="" className="logoImg">
                Logo
              </a>
            </div>
            <div className="header_right">
              <div className="search_bar-section">
                <div className="search_section">
                  <div className="drowpdon_label">
                    <select name="cars" id="cars">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <input
                    placeholder="Enter product / service to search"
                    id="search_string"
                    name="ss"
                    className=""
                    role="textbox"
                    aria-autocomplete="list"
                    aria-haspopup="true"
                    style={{ width: "304px" }}
                  />
                  <button>
                    <IoIosSearch />
                  </button>
                </div>
                <a href="" className="by_mart-btn">
                  Buy With IndiaMART
                </a>
              </div>
              <div className="header_dropdown">
                <div id="bizLn" className="businessLoans">
                  <a href="" class="h_ic51" target="_blank">
                    Business Loans
                  </a>
                </div>
                <div id="bizLn" className="businessLoans helpBtn">
                  <a href="" class="h_ic51" target="_blank">
                    Help
                  </a>
                  <div class="heldrdwn">
                    <p class="cur_pt">Find answers to your queries</p>
                    <a
                      href=""
                      class="help-desk hMb15 wli Hd_fl cpo h_ic28 Hd_pr Hd_db"
                    >
                      For <b>Buying</b>
                    </a>
                    <a
                      href=""
                      class="help-desk hMb15 wli Hd_fl cpo h_ic29 Hd_pr Hd_db"
                    >
                      For <b>Selling</b>
                    </a>
                    <a
                      href=""
                      class="clear h_ic30 help-desk Hd_pr Hd_db"
                    >
                      Share your Feedback
                    </a>
                    <a
                      href=""
                      class="h_ic31 help-desk Hd_pr Hd_db"
                    >
                      Raise a Complaint
                    </a>
                    <a class="cur_pt wAnch h_ic32 Hd_pr Hd_db">
                      Email us on
                      <b class="Dsp_b Hd_db">customercare@indiamart.com</b>
                    </a>
                    <a id="cccare" class="cur_pt wAnch h_ic33 Hd_pr Hd_db">
                      Call us at <b>096-9696-9696</b>
                    </a>
                    <a
                      class="wAnch h_ic35 help-desk cpo Hd_pr Hd_db Hd_db"
                      id="chatwithus"
                    >
                      Chat With us
                    </a>
                    <a
                      href=""
                      onclick="gaTrack('Help_Seller_Academy');"
                      class="h_ic41 help-desk Hd_pr Hd_db"
                    >
                      Seller Academy
                    </a>
                  </div>
                </div>
                <div id="bizLn" className="businessLoans SignIn">
                  <a href="" class="h_ic51" target="_blank">
                    Sign In
                  </a>
                  <div class="sign-hover-dropdn Hd_dbn">
                    <div class="u_sigin">
                      <a
                        onclick="hdr_inp_improve('','',user_signIn); gaTrack('Log In');"
                        class="cont_s cpo Hd_db"
                      >
                        Sign In{" "}
                      </a>
                      <div class="hover-new-user">
                        New to IndiaMART?
                        <a class="h_clr bld Hd_dib cpo">Join Now</a>
                      </div>
                    </div>
                    <div className="signIn_dropdown">
                      <a href="" class="signIn_icon ch_my_dash h_ic1">
                        Home
                      </a>
                      <a
                        class="signIn_icon post_buy_req h_ic2"
                        href=""
                        rel="nofollow"
                      >
                        Post Your Requirement{" "}
                      </a>
                      <a
                        href=""
                        id="bus_buy"
                        class="signIn_icon cpo ver_busbuyr h_ic37"
                      >
                        Verified Business Buyer
                      </a>
                      <a class="signIn_icon h_ic34" href="">
                        Products/Services Directory
                      </a>
                      <a class="signIn_icon h_ic21" href="">
                        My Orders
                      </a>
                      <a class="signIn_icon recely h_ic4" href="">
                        Recent Activity
                      </a>
                      <a class="signIn_icon h_ic6 stngs" href="">
                        Settings<span class="in-map Hd_pr">NEW</span>
                      </a>
                      <a class="hpay bizUn" href="" target="_blank">
                        Business Loans<span class="in-map Hd_pr">NEW</span>
                        <p>Loans made simple</p>
                      </a>{" "}
                      <a class="hpay" id="ship" href="">
                        Ship With IndiaMART<p>Easy booking of transport</p>
                      </a>{" "}
                      <a class="signIn_icon hd-dw-apps cpo h_ic16" id="dwnappp">
                        Download App
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="cell_on-indiaMart" style={{ marginTop: "30px" }}>
        <div className="row bannerRow" style={{ display: "inline-flex" }}>
          <div className="banner">
            {/* <div>  <img src="" className="bannerImg" alt="" style={{display: "none"}}/><img src="https://seller.imimg.com/img/posteim-opt.jpg" className="bannerNew" alt="" style={{display: "block", width: "68%"}}/></div> */}
            <div>
              <h1 className="banner-text banner-textEven">
                <b>Sell for free </b> on India’s largest online B2B marketplace
              </h1>
            </div>
            <div
              className="banner-steps banner-stepsInternalEven"
              style={{ display: "none" }}
            >
              <div className="bstep1">
                <img
                  className="banimgInt"
                  src="https://seller.imimg.com/img/buyer.png"
                  alt=""
                  style={{ display: "none", height: "45px", marginTop: "21px" }}
                />
                <div className="login_grow login-sprite login-icDim login-auto"></div>
                <figcaption className="banimgInt" style={{ display: "none" }}>
                  {" "}
                  <span className="count">20.6</span> crore+
                </figcaption>
                <figcaption
                  className="banimgDir"
                  style={{ display: "block", fontSize: "18px", width: "226px" }}
                >
                  {" "}
                  Grow your Business{" "}
                </figcaption>
                <p className="banimgInt" style={{ display: "none" }}>
                  Buyers
                </p>
                <p>Sell to buyers anytime, anywhere</p>
              </div>
              <div className="bstep1">
                <img
                  className="banimgInt"
                  src="https://seller.imimg.com/img/supplier.png"
                  alt=""
                  style={{ display: "none", marginTop: "21px" }}
                />
                <div className="login_cost login-sprite login-icDim login-auto"></div>
                <figcaption className="banimgInt" style={{ display: "none" }}>
                  {" "}
                  <span className="count">82</span> lakh+
                </figcaption>
                <figcaption
                  className="banimgDir"
                  style={{ display: "block", fontSize: "18px", width: "226px" }}
                >
                  {" "}
                  Zero Cost{" "}
                </figcaption>
                <p className="banimgInt" style={{ display: "none" }}>
                  Suppliers
                </p>
                <p>No commission or transaction fee</p>
              </div>
              <div className="bstep1">
                <img
                  className="banimgInt"
                  src="https://seller.imimg.com/img/prodnserv.png"
                  alt=""
                  style={{ marginTop: "21px", display: "none" }}
                />
                <div className="login_manage login-sprite login-icDim login-auto"></div>
                <figcaption
                  className="banimgInt"
                  style={{ width: "211px", display: "none" }}
                >
                  {" "}
                  <span className="count">11.5</span> crore+
                </figcaption>
                <figcaption
                  className="banimgDir"
                  style={{ display: "block", fontSize: "18px", width: "226px" }}
                >
                  {" "}
                  Manage Business Easily{" "}
                </figcaption>
                <p className="banimgInt" style={{ display: "none" }}>
                  Products &amp; Services
                </p>
                <p>Lead management system &amp; other features</p>
              </div>
            </div>

            <div>
              <div className="banner-section">
                <div className="banner-label">Free Registration/Sign In</div>
                <div className="banner-input">
                  <div
                    className="cont_drpdown_fcp rn_cont_drpdown_fcp"
                    id="dropdowndiv"
                  >
                    <dl
                      className="dropdown cont_mob"
                      id="country-dropdown-fcp2"
                      autocomplete="off"
                    >
                      <dt>
                        <a>
                          <span
                            style={{ backgroundPosition: "0px -1694px" }}
                          ></span>
                          <div className="as_arrow"></div>
                        </a>
                        <span
                          className="value"
                          style={{ visibility: "visible" }}
                        >
                          +91
                        </span>
                      </dt>
                      <dd>
                        <ul
                          className="country_list"
                          style={{ display: "none" }}
                        >
                          <li
                            className="country_list_item"
                            onclick='javascript:selectCountryFCP2(event,{"value":"91","label":"India  +91","data":{"cname":"India","iso":"IN","icon_order":"154"}})'
                          >
                            <span
                              style={{ backgroundPosition: "0px -1694px" }}
                            ></span>
                            <a>India +91</a>
                          </li>
                          <li
                            className="country_list_item"
                            onclick='javascript:selectCountryFCP2(event,{"value":"1","label":"United States Of America  +1","data":{"cname":"United States Of America","iso":"US","icon_order":"4"}})'
                          >
                            <span
                              style={{ backgroundPosition: "0px -44px" }}
                            ></span>
                            <a>United States Of America +1</a>
                          </li>
                          <li
                            className="country_list_item"
                            onclick='javascript:selectCountryFCP2(event,{"value":"971","label":"United Arab Emirates  +971","data":{"cname":"United Arab Emirates","iso":"AE","icon_order":"202"}})'
                          >
                            <span
                              style={{ backgroundPosition: "0px -2222px" }}
                            ></span>
                            <a>United Arab Emirates +971</a>
                          </li>
                          <li
                            className="country_list_item"
                            onclick='javascript:selectCountryFCP2(event,{"value":"44","label":"United Kingdom  +44","data":{"cname":"United Kingdom","iso":"GB","icon_order":"5"}})'
                          >
                            <span
                              style={{ backgroundPosition: "0px -55px" }}
                            ></span>
                            <a>United Kingdom +44</a>
                          </li>
                          <li
                            className="country_list_item"
                            onclick='javascript:selectCountryFCP2(event,{"value":"61","label":"Australia  +61","data":{"cname":"Australia","iso":"AU","icon_order":"156"}})'
                          >
                            <span
                              style={{ backgroundPosition: "0px -1716px" }}
                            ></span>
                            <a>Australia +61</a>
                          </li>
                          <li className="showmore">
                            <a onclick='Suggester({"type":"isd","element":"country-dropdown-fcp2",fields: "cname,iso,icon_order",displayFields:"cname,value",displaySeparator:"  +","defaultValue":"IN","showmore" : "false","onSelect":selectCountryFCP2});return;'>
                              Show More
                            </a>
                          </li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                  <input
                    type="text"
                    aria-required="true"
                    className="npttxt"
                    placeholder="Enter 10 digit mobile number"
                    id="mobNo"
                    maxlength="10"
                    name="mobileNum"
                    tabindex="-1"
                    autocomplete="off"
                    style={{
                      height: "68px",
                      paddingTop: "0px",
                      paddingRight: "13px",
                      paddingBottom: "0px",
                      minWidth: "360px",
                      borderWidth: "1.5px",
                      borderStyle: "solid",
                      borderImage: "initial",
                      borderRadius: "4px 0px 0px 4px",
                      fontSize: "18px",
                    }}
                  />
                  <p className="newlgnerr"></p>
                  <span className="em" id="mobNo_err"></span>
                </div>
                <div className="banner-cta">
                  <button
                    className="login_btn"
                    style={{
                      backgroundColor: "#4361ee",
                      minWidth: "210px",
                      borderRadius: "0px 4px 4px 0px",
                      padding: "25px 29px 22px 0px",
                      marginTop: "-0.3px",
                      fontSize: "18px",
                    }}
                  >
                    Start Selling
                    <span>
                      <div className="login_arrow login-sprite"></div>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="banner-steps banner-stepsEven">
              <div className="soi-head banimgInt">
                Get a free listing in 3 simple steps
              </div>
              <div className="bstep1">
                <div className="login_grow login-sprite login-icDim login-auto"></div>
                <figcaption
                  className="banimgDir"
                  style={{ display: "block", fontSize: "18px", width: "226px" }}
                >
                  {" "}
                  Grow your Business{" "}
                </figcaption>
                <p className="banimgDir-1" style={{ fontSize: "16px" }}>
                  Sell to buyers anytime, anywhere
                </p>
                <img
                  className="banimgInt"
                  src="https://seller.imimg.com/img/hgfl-1.png"
                  alt=""
                  style={{ width: "55px", display: "none", marginTop: "21px" }}
                />
                <figcaption className="banimgInt" style={{ display: "none" }}>
                  Create Account
                </figcaption>
              </div>
              <div className="bstep1">
                <div className="login_cost login-sprite login-icDim login-auto"></div>
                <figcaption
                  className="banimgDir"
                  style={{ display: "block", fontSize: "18px", width: "226px" }}
                >
                  {" "}
                  Zero Cost{" "}
                </figcaption>
                <p className="banimgDir-1 " style={{ fontSize: "16px" }}>
                  No commission or transaction fee
                </p>
                <img
                  className="banimgInt"
                  src="https://seller.imimg.com/img/hgfl-icon2.png"
                  alt=""
                  style={{ width: "55px", display: "none", marginTop: "21px" }}
                />
                <figcaption className="banimgInt" style={{ display: "none" }}>
                  Enter Business Details
                </figcaption>
              </div>
              <div className="bstep1">
                <div className="login_manage login-sprite login-icDim login-auto"></div>
                <figcaption
                  className="banimgDir"
                  style={{ display: "block", fontSize: "18px", width: "226px" }}
                >
                  {" "}
                  Manage Business Easily{" "}
                </figcaption>
                <p style={{ width: "209px", fontSize: "16px" }}>
                  Lead management system &amp; other features
                </p>
                <img
                  className="banimgInt"
                  src="https://seller.imimg.com/img/hgfl-icon3.png"
                  alt=""
                  style={{
                    height: "55px",
                    width: "62px",
                    display: "none",
                    marginTop: "21px",
                  }}
                />
                <figcaption
                  className="banimgInt"
                  style={{ width: "211px", display: "none" }}
                >
                  Add Products/ Services
                </figcaption>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div id="soi" style={{ top: "505px" }}></div>
          <div className="soi-newstat" style={{ display: "block" }}>
            <div className="soi-head">Sell on IndiaMART</div>
            <div className="soi-stat-body">
              <div className="soi-box">
                <div className="soi-img">
                  <div className="login_crore login-sprite login-auto"></div>
                </div>
                <figcaption>
                  {" "}
                  <span className="count">20.6</span> crore+
                </figcaption>
                <p>Buyers</p>
              </div>
              <div className="soi-box">
                <div className="soi-img">
                  <div className="login_lakh login-sprite login-auto"></div>
                </div>
                <figcaption>
                  <span className="count">82</span> lakh+
                </figcaption>
                <p>Suppliers</p>
              </div>
              <div className="soi-box">
                <div className="soi-img">
                  <div className="login_8crore login-sprite login-auto"></div>
                </div>
                <figcaption>
                  {" "}
                  <span className="count">11.5</span> crore+
                </figcaption>
                <p>Products &amp; Services</p>
              </div>
            </div>
          </div>
          <div
            className="soi-newstathtr"
            style={{ display: "block", padding: "0px" }}
          >
            <div className="soi-stat-body">
              <div className="soi-box">
                <div className="soi-img">
                  <div className="login_grow login-sprite login-icDim login-auto"></div>
                </div>
                <figcaption> Grow your Business </figcaption>
                <p>Sell to buyers anytime, anywhere</p>
              </div>
              <div className="soi-box">
                <div className="soi-img">
                  <div className="login_cost login-sprite login-icDim login-auto"></div>
                </div>
                <figcaption> Zero Cost </figcaption>
                <p>No commission or transaction fee</p>
              </div>
              <div className="soi-box">
                <div className="soi-img">
                  <div className="login_manage login-sprite login-icDim login-auto"></div>
                </div>
                <figcaption> Manage Business Easily </figcaption>
                <p>Lead management system &amp; other features</p>
              </div>
            </div>
          </div>
          <div
            className="soi-newstathtr"
            style={{ display: "block", padding: "0px" }}
          >
            <div className="soi-head">Get a free listing in 3 simple steps</div>
            <div className="soi-stat-body">
              <div className="soi-box">
                <div className="soi-img">
                  <div className="login_CreateAcc login-sprite login-icDim login-auto"></div>
                </div>
                <figcaption>Create Account</figcaption>
                <p>Add your name and phone number to get started</p>
              </div>
              <div className="soi-box">
                <div className="soi-img">
                  <div className="login_AddBus login-sprite login-icDim login-auto"></div>
                </div>
                <figcaption>Add Business</figcaption>
                <p>
                  Add name, address &amp; e-mail of your company, store/
                  business
                </p>
              </div>
              <div className="soi-box">
                <div className="soi-img">
                  <div className="login_AddPro login-sprite login-icDim login-auto"></div>
                </div>
                <figcaption>Add Products/ Services</figcaption>
                <p>
                  Minimum 3 products/ services needed for your free listing page
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="hgfl-section"
            style={{ width: "100%", height: "150px" }}
          >
            <div className="hgfl-heading" style={{ display: "none" }}>
              How to get a free listing?
            </div>
            <p style={{ display: "none" }}>
              Start selling for free in 3 simple steps:
            </p>
            <div className="hgfl-block-cover">
              <div className="hgfl-rect" style={{ marginTop: "13px" }}>
                <div className="login_sellarrow login-sprite"></div>
                <div
                  className="hgfl-rect-text"
                  style={{ color: "rgb(0, 0, 0)" }}
                >
                  {" "}
                  Start selling for free. It only takes{" "}
                  <span style={{ fontWeight: "600" }}>5 minutes.</span>{" "}
                </div>
                <div className="hgfl-cta">
                  <button style={{ background: "#4361ee" }}>
                    Register <div className="login_Regarrow login-sprite"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row hideSec">
          <div className="bhoi">
            <div className="bhoi-heading">
              {" "}
              Business happening on IndiaMART{" "}
            </div>
            <div className="bhoi-subtext">
              Lakhs of businesses ranging from SMEs to large enterprises are
              using the power of our platform to grow and make an impact:
            </div>
            <div className="bhoi-imgtxtdesc">
              <div className="bhoi-block1">
                <div className="bhoi-box">
                  <div className="bhoi-img1">
                    <div className="login_img busin-sprite login-auto"></div>
                  </div>
                  <div className="bhoi-imgtxt">
                    <div className="bhoi-subhead"> 1000 Tonnes of Steel </div>
                    <div className="bhoi-body">
                      {" "}
                      sold by Kamal in <strong>Mandi, Punjab</strong> for making
                      Indian Highways stronger.{" "}
                    </div>
                  </div>
                </div>
                <div className="bhoi-box bhoi-box2">
                  <div className="bhoi-imgtxt">
                    <div className="bhoi-subhead"> 4500 Solar Panels </div>
                    <div className="bhoi-body">
                      {" "}
                      sold by Shaurya from <strong>
                        Alwar, Rajasthan
                      </strong>{" "}
                      sold to light up Ladakh.{" "}
                    </div>
                  </div>
                  <div className="bhoi-img1">
                    <div className="login_img-1 busin-sprite login-auto"></div>
                  </div>
                </div>
              </div>
              <div className="bhoi-block2">
                <div className="login_img-2 busin-sprite login-auto"></div>
              </div>
              <div className="bhoi-block3">
                <div className="bhoi-box">
                  <div className="bhoi-img1" style={{ width: "39%" }}>
                    <div className="login_img-3 busin-sprite login-auto"></div>
                  </div>
                  <div className="bhoi-imgtxt" style={{ width: "58%" }}>
                    <div className="bhoi-subhead">
                      {" "}
                      1 Lakh pharmacy instruments{" "}
                    </div>
                    <div
                      className="bhoi-body"
                      style={{ width: "100%", margin: "30px 0px 0px 15px" }}
                    >
                      {" "}
                      sold by H.L. Scientific Industries in{" "}
                      <strong>Ambala, Haryana</strong> for making Mumbai
                      healthier.{" "}
                    </div>
                  </div>
                </div>
                <div
                  className="bhoi-box bhoi-box2"
                  style={{ position: "absolute", top: "205px", left: "-28px" }}
                >
                  <div className="bhoi-imgtxt" style={{ width: "58%" }}>
                    <div className="bhoi-subhead"> 2500 litres of water </div>
                    <div className="bhoi-body">
                      {" "}
                      from <strong>Kanpur, Uttar Pradesh</strong> was sent for
                      the mountain regiment’s annual get together.{" "}
                    </div>
                  </div>
                  <div className="bhoi-img1" style={{ width: "40%" }}>
                    <div className="login_img-4 busin-sprite login-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row hideSec">
            <div className="gbtti">
                <div className="gbtti-heading">Trusted by Global Brands</div>
                <div className="brands-slider">
                <Slider {...settings}>
                  <div>
                    <img src="https://seller.imimg.com/logos/medtronic-logo.gif" alt=""/>
                  </div>
                  <div>
                    <img src="https://seller.imimg.com/logos/kelley.gif" alt=""/>
                  </div>
                  <div>
                    <img src="https://seller.imimg.com/logos/jcb-logo.gif" alt=""/>
                  </div>
                  <div>
                    <img src="https://seller.imimg.com/logos/action-construction.gif" alt=""/>
                  </div>
                  <div>
                    <img src="https://seller.imimg.com/logos/thermax-logo.gif" alt=""/>
                  </div>
                  <div>
                    <img src="https://seller.imimg.com/logos/hilti.gif" alt=""/>
                  </div>
                  <div>
                    <img src="https://seller.imimg.com/logos/philips.gif" alt=""/>
                  </div>
                  <div>
                    <img src="https://seller.imimg.com/logos/agfahealthcare.gif" alt=""/>
                  </div>
                  <div>
                    <img src="https://seller.imimg.com/logos/enerpac.gif" alt=""/>
                  </div>
                  <div>
                    <img src="https://seller.imimg.com/logos/honewell.gif" alt=""/>
                  </div>
                  <div>
                    <img src="https://seller.imimg.com/logos/medtronic-logo.gif" alt=""/>
                  </div>
                  <div>
                    <img src="https://seller.imimg.com/logos/kelley.gif" alt=""/>
                  </div>
                  <div>
                    <img src="https://seller.imimg.com/logos/jcb-logo.gif" alt=""/>
                  </div>
                  <div>
                    <img src="https://seller.imimg.com/logos/action-construction.gif" alt=""/>
                  </div>
                  <div>
                    <img src="https://seller.imimg.com/logos/thermax-logo.gif" alt=""/>
                  </div>
                  <div>
                    <img src="https://seller.imimg.com/logos/case.gif" alt=""/>
                  </div>
                  <div>
                    <img src="https://seller.imimg.com/logos/astral-pipes.gif" alt=""/>
                  </div>
                </Slider>             
                </div>
            </div>
        </div> */}
        <div className="row hideSec">
          <div className="imap">
            <div className="imap-heading">IndiaMART Advantage Program</div>
            <div className="imap-text">
              {" "}
              While you get lots of benefits as a free seller, get even more. Be
              part of IndiaMART Advantage Program through our paid services.{" "}
            </div>
            <div className="hyphen-rect">Improve your business</div>
            <div className="ima-body">
              <div className="ima-feat">
                <div className="login_highVis login-sprite login-auto"></div>
                <div className="ima-featHead">Higher Visibility</div>
                <div className="ima-featText">
                  Get higher listing on IndiaMART, appear on top of search
                  results and improve the chances of acquiring more customers.
                </div>
              </div>
              <div className="ima-feat">
                <div className="login_busEnq login-sprite login-auto"></div>
                <div className="ima-featHead">More Business Enquiries</div>
                <div className="ima-featText">
                  Direct enquiries for your products/services sent to you by
                  buyers looking for them.
                </div>
              </div>
              <div className="ima-feat">
                <div className="login_addLead login-sprite login-auto"></div>
                <div className="ima-featHead">Additional Leads</div>
                <div className="ima-featText">
                  Choose from a list of verified orders for products/services
                  you want to sell.
                </div>
              </div>
            </div>
            <div className="hyphen-rect">Productivity Tools</div>
            <div className="ima-body">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="ima-feat">
                  <div className="login_leadMang login-sprite login-auto"></div>
                  <div className="ima-featHead">
                    Lead Manager (Desktop &amp; App)
                  </div>
                  <div className="ima-featText">
                    A CRM solution to organise, manage and track all your leads
                    and enquiries at one place.
                  </div>
                </div>
                <div className="ima-feat" style={{ display: "none" }}>
                  <div className="login_payment login-sprite login-auto"></div>
                  <div className="ima-featHead">Your own Payment Gateway</div>
                  <div className="ima-featText">
                    'Pay with IndiaMART' is a payment gateway solution to
                    receive money from any of your customers easily.
                  </div>
                </div>
                <div className="ima-feat">
                  <div className="login_preNum login-sprite login-auto"></div>
                  <div className="ima-featHead">Preferred Number Service</div>
                  <div className="ima-featText">
                    A cloud telephony service that lets you connect your 8 phone
                    numbers, which ring simultaneously for each buyer call to
                    ensure no call is missed.
                  </div>
                </div>
              </div>
            </div>
            <div className="row hideSec">
              <button
                className="imap-btn"
                style={{ background: "#4361ee" }}
              >
                I am interested
              </button>
            </div>
            <div className="imap-assist">
              {" "}
              For more details please contact our customer care at
              +91-9696969696{" "}
            </div>
          </div>
        </div>
        <div className="row hideSec">
          <div className="soi" style={{ background: "white" }}>
            <div className="soi-heading">Sell on IndiaMART</div>
            <div className="soi-para">
              <p style={{ color: "rgb(0, 0, 0)" }}>
                IndiaMART is India’s largest e-commerce marketplace, catering to
                more than 20.6 Crore+ Buyers and 82 Lakh+ Suppliers. Whether you
                are a retailer or a manufacturer, IndiaMART is the leading
                destination for growing business online and is trusted by more
                than 100 milion users across our desktop and mobile platforms.
              </p>
              <p style={{ color: "rgb(0, 0, 0)" }}>
                Selling on IndiaMART #IndiamartAurKya. Register by entering your
                contact details, and simply add products in your catalog.
              </p>
              <p style={{ color: "rgb(0, 0, 0)" }}>
                Whats more? Our Seller portal offers a one stop solution for all
                your needs. Be it handling buyer enquiries or converting leads,
                we have something for everything. Sign up for free here and
                transform your way of doing business.
              </p>
            </div>
          </div>
        </div>
        <div className="cf_clb cf_footer">
          <div className="cf_ftHd">
            <div className="cf_wd">
              <div className="cf_social">
                Follow us on:{" "}
                <Link
                  href="https://www.facebook.com/IndiaMART"
                  className="cf_fb"
                  target="_blank"
                >
                  {" "}
                  Facebook
                </Link>{" "}
                <Link
                  href="https://twitter.com/IndiaMART"
                  className="tw_ft"
                  target="_blank"
                >
                  {" "}
                  Twitter
                </Link>{" "}
                <Link
                  href="https://www.linkedin.com/company/indiamart-intermesh-limited/"
                  className="cf_lkd_in"
                  target="_blank"
                >
                  {" "}
                  linkedin
                </Link>
              </div>
              <div className="cf_goMob cf_rht">
                Go Mobile:{" "}
                <Link
                  href="https://itunes.apple.com/us/app/indiamart-buy-sell-products/id668561641?mt=8"
                  className="cf_iOS"
                  target="_blank"
                >
                  {" "}
                  iOS App{" "}
                </Link>{" "}
                <Link
                  href="https://play.google.com/store/apps/details?id=com.indiamart.m"
                  className="cf_anrd"
                  target="_blank"
                >
                  {" "}
                  Android App{" "}
                </Link>
                <Link
                  href="https://m.indiamart.com/"
                  className="cf_mSit"
                  target="_blank"
                >
                  {" "}
                  https://m.indiamart.com
                </Link>
              </div>
              <span className="cf_fhd">We are here to help you!</span>
            </div>
          </div>
          <div className="cf_wd cf_ftlk" id="sag">
            <ul>
              <li>
                <Link href="https://corporate.indiamart.com/about-us/">
                  About Us
                </Link>
                <Link href="https://corporate.indiamart.com/partner-with-us/">
                  Join Sales
                </Link>
                <Link href="https://corporate.indiamart.com/category/success-stories/">
                  {" "}
                  Success Stories
                </Link>
                <Link href="https://corporate.indiamart.com/category/indiamart-in-news/press-releases/">
                  {" "}
                  Press Section
                </Link>
                <Link href="https://corporate.indiamart.com/advertise-with-indiamart/">
                  {" "}
                  Advertise with Us
                </Link>
                <Link href="https://corporate.indiamart.com/careers-at-im/ ">
                  {" "}
                  Jobs &amp; Careers
                </Link>
              </li>
              <li>
                <Link href="https://help.indiamart.com/">Help</Link>
                <Link href="https://help.indiamart.com/user-feedback/">
                  Feedback
                </Link>
                <Link href="https://help.indiamart.com/complaint-registration/">
                  Complaints
                </Link>
                <Link href="https://corporate.indiamart.com/customer-care-services/">
                  Customer Care
                </Link>
                <Link href="https://corporate.indiamart.com/branch-offices/">
                  Contact Us
                </Link>
              </li>
              <li className="cf_wdth">
                <div className="cf_lihd">
                  <Link
                    href="https://seller.indiamart.com"
                    className="ch_supplier_head"
                  >
                    Suppliers Tool Kit
                  </Link>
                </div>
                <span id="ch_free_web">
                  <Link href="//seller.indiamart.com/" className="ch_free_web">
                    <span className="nme Hd_dib">Seller Tools</span>
                  </Link>
                </span>
                <Link
                  href="https://seller.indiamart.com/bltxn/?pref=recent"
                  className="bl_log_link"
                >
                  Latest BuyLead
                </Link>
                <Link href="https://corporate.indiamart.com/quick-learn/">
                  Learning Centre
                </Link>
                <Link target="_blank" href="https://shipwith.indiamart.com/">
                  Ship With IndiaMART
                </Link>
                <Link
                  href="https://seller.indiamart.com/pwim/invoice/whatispwim/?bannerid=cntrlfooter"
                  id="pypd_footer"
                  style={{ display: "none" }}
                >
                  Pay With IndiaMART
                </Link>
              </li>
              <li className="cf_wdth">
                <div className="cf_lihd">
                  <Link
                    href="//seller.indiamart.com/blgen/postbl?modid=MY"
                    className="ch_buyers_head"
                  >
                    Buyers Tool Kit
                  </Link>
                </div>
                <Link
                  href="//seller.indiamart.com/blgen/postbl?modid=MY"
                  className="ch_post_buy"
                >
                  Post Your Requirement
                </Link>
                <Link
                  href="//seller.indiamart.com/companyprofile/myproductbuy/?modid=MY"
                  className="mang_pro"
                >
                  Products You Buy
                </Link>
                <Link href="https://www.indiamart.com/search.html">
                  Search Products &amp; Suppliers
                </Link>
                <Link
                  href="https://paywith.indiamart.com?bannerid=cntrlfooter"
                  id="pay_footer"
                  style={{ display: "none" }}
                >
                  Pay With IndiaMART
                </Link>
              </li>
              <li className="last">
                <div className="cf_lihd">Accounting Solutions</div>
                <Link href="https://busy.in/" target="_blank">
                  Accounting Software
                </Link>
                <Link href="https://www.livekeeping.com/" target="_blank">
                  Tally on Mobile
                </Link>
                <Link href="https://busy.in/e-invoice-software" target="_blank">
                  GST e-Invoice
                </Link>
              </li>
            </ul>
          </div>
          <div className="cf_cryt">
            <div className="cf_wd">
              <span className="cf_rht">
                <Link href="https://www.indiamart.com/terms-of-use.html">
                  Terms of Use
                </Link>{" "}
                -{" "}
                <Link href="https://www.indiamart.com/privacy-policy.html">
                  Privacy Policy{" "}
                </Link>
                -{" "}
                <Link href="https://www.indiamart.com/link-to-us.html">
                  Link to Us
                </Link>
              </span>
              <span>
                Copyright © 1996-2025 IndiaMART InterMESH Ltd. All rights
                reserved.
              </span>
            </div>
          </div>
          <div
            className="chat_window"
            style={{ position: "absolute", right: "0px" }}
          ></div>
        </div>
      </div>
    </>
  );
}
