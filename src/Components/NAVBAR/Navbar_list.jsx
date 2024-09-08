import React, { useState,useEffect } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../../Styles/NAV.scss';
import { FaRegSquare } from 'react-icons/fa'; // Use a valid icon
import { IoPersonOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import CartIcon from '../Carticon/Carticon';
import { Link } from 'react-router-dom';
export default function Navbar_list() {
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // const handleScroll = () => {
  //   if (window.scrollY > 50) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const toggleMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };
  const menuData = [
    {
      path: '/',
      name: 'Home',
      items: [
        { path: '/', name: 'Main Home' },
        { path: '/grid-home', name: 'Grid Home' },
        { path: '/cosmetics-home', name: 'Cosmetics Home' },
        { path: '/product-gallery', name: 'Product Gallery' },
        { path: '/fullscreen-slider', name: 'Fullscreen Slider' },
        { path: '/skincare-home', name: 'Skincare Home' },
        { path: '/landing', name: 'Landing' },
      ],
    },
    {
      path: '/pages',
      name: 'PAGES',
      items: [
        { path: '/about-us', name: 'About US' },
        { path: '/our-team', name: 'Our Team' },
        { path: '/fqa', name: 'FQA Page' },
        { path: '/coming-soon', name: 'Coming Soon' },
        { path: '/pricing-plans', name: 'Pricing Plans' },
      ],
    },
    {
      path: '/blog',
      name: 'Blog',
      items: [
        { path: '/standared', name: 'Standard' },
        { path: '/centerd', name: 'Centered' },
        { path: '/slider', name: 'No slider' },
        { path: '/post', name: 'Post Type' },
      ],
    },
    {
      path: '/shop',
      name: 'SHOP',
      items: [
        {
          path: '/producttypes',
      name: 'Product types',
      items: [
        { path: '/shop/Standard', name: 'Standard' }, 
        { path: '/Grupd', name: 'Grouped' },
        { path: '/Variables', name: 'Variables' },
        { path: '/external', name: 'external' },
        { path: '/virtual', name: 'virtual' },
        { path: '/Downloadable', name: 'Downloadable' },
        { path: '/new', name: 'new' },
        { path: '/sold', name: 'sold' },
      ],
        },
        {
          path: '/shop-lists',
          name: 'shop lists',
          items: [
            { path: '/right', name: 'right slider' },
            { path: '/left', name: 'left slider' },
            { path: '/nosidebar', name: 'no sidebar' },
            { path: '/shop/Filter-by-Category', name: 'Filter by Category' },
            { path: '/Product-Carousel', name: 'Product Carousel' },
            { path: '/Product-Exhibition-List', name: 'Product Exhibition List' },
            { path: '/simple', name: 'simple list' },
          ],
        },
        {
          path: '/shop-layouts',
          name: 'shop layouts',
          items: [
            { path: '/Two-Columns', name: 'Two Columns' },
            { path: '/Three-Columns', name: 'Three Columns' },
            { path: '/Three-Columns-Wide', name: 'Three Columns Wide' },
            { path: '/Four-Columns', name: 'Four Columns' },
            { path: '/Four-Columns-wide', name: 'Four Columns wide' },
            { path: '/five-Columns', name: 'five Columns' },
            { path: '/five-Columns-wide', name: 'five Columns wide' },
            { path: '/six-Columns', name: 'six Columns-wide' },
          ],
        },
        {
          path: '/shop-pages',
          name: 'shop paes',
          items: [
            { path: '/My-account', name: 'My Account' },
            { path: '/shop/cart', name: 'cart' },
            { path: '/shop/whishlist', name: 'whishlist' },
            { path: '/shop/checkout', name: 'checkout' },
            { path: '/order-tracking', name: 'order tracking' },
          ],
        },
      ],
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      items: [
        { path: '/gallery', name: 'Gallery' },
        { path: '/standared', name: 'Standard' },
        {
          path: '/layout',
          name: 'Layout',
          items: [
            { path: '/gallery', name: 'Gallery' },
            { path: '/standared', name: 'Standard' },
            { path: '/layout', name: 'Layout' },
            { path: '/singles', name: 'Singles' },
          ],
        },
        { path: '/singles', name: 'Singles' },
      ],
    },
    {
      path: '/contact',
      name: 'CONTACT',
      items: [
        { path: '/contact', name: 'Contact Us' },
        { path: '/touch', name: 'Get in Touch' },
      ],
    },
  ];
  return (
    <>
      {/* Top Bar */}
      <div className="mkdf-top-bar ">
        <div className="mkdf-vertical-align-containers">
          <div className="mkdf-position-left">
            <div className="mkdf-position-left-inner">
              <div id="text-14" className="widget widget_text mkdf-top-bar-widget">
                <div className="textwidget">
                  <div className="mkdf-dark-link-holder" style={{ fontStyle: 'italic', fontSize: '16px', color: '#cecece' }}>
                    <a href="mailto:biagiottitheme@gmail.com">biagiottitheme@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mkdf-position-center">
            <div className="mkdf-position-center-inner">
              <div id="text-13" className="widget widget_text mkdf-top-bar-widget">
                <div className="textwidget">
                  <div className="mkdf-dark-link-holder">
                    Free shipping on international orders of $150+
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mkdf-position-right">
            <div className="mkdf-position-right-inner">
              <div className="widget mkdf-login-register-widget mkdf-user-not-logged-in">
                <a href="#" className="mkdf-modal-opener mkdf-login-opener" data-modal="login">Log In </a>
                <IoPersonOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar expand="lg" className={`fixed-top ${scrolled ? 'scrolled' : ''}`}>
        <Container className='container'>
          <Navbar.Brand href="/" className="brand">
           <Link to='/shop/whishlist'>
           <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="19.902px" height="17px" viewBox="2.509 5.441 19.902 15.583">
                <path stroke="#000" fill='#fff' strokeWidth="0.8" strokeMiterlimit="10" d="M12.5,20.514c-2.217-0.705-4.058-2.137-4.058-2.137c-1.704-1.273-2.892-2.516-2.892-2.516c-0.708-0.699-1.3-1.494-1.753-2.385c-0.708-1.389-0.971-3.06-0.464-4.563C3.982,6.993,5.958,6.29,5.958,6.29c1.351-0.485,3.188-0.513,4.595,0.244C11.96,7.291,12.5,8.482,12.5,8.482s0.541-1.191,1.945-1.949c1.409-0.757,3.245-0.729,4.598-0.244c0,0,1.975,0.703,2.623,2.624c0.508,1.503,0.244,3.174-0.465,4.563c-0.452,0.891-1.044,1.686-1.752,2.385c0,0-1.188,1.242-2.893,2.516C16.557,18.377,14.717,19.809,12.5,20.514z"></path>
              </svg>
            </span>
           </Link>
            <span style={{ bottom: '2px' }}>Wishlist</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navf">
              {menuData.slice(0, 3).map(item => (
                item.items ? (
                  <NavDropdown title={item.name} id="basic-nav-dropdown" key={item.path}>
                    {item.items.map(subItem => (
                      subItem.items ? (
                        <NavDropdown title={subItem.name} id="basic-nav-dropdown" key={subItem.path}>
                          {subItem.items.map(subSubItem => (
                            <NavDropdown.Item as={NavLink} to={subSubItem.path} key={subSubItem.path}>
                              {subSubItem.name}
                            </NavDropdown.Item>
                          ))}
                        </NavDropdown>
                      ) : (
                        <NavDropdown.Item as={NavLink} to={subItem.path} key={subItem.path}>
                          {subItem.name}
                        </NavDropdown.Item>
                      )
                    ))}
                  </NavDropdown>
                ) : (
                  <Nav.Link as={NavLink} to={item.path} key={item.path}>
                    {item.name}
                  </Nav.Link>
                )
              ))}

            {/* Center Image */}
            <div className="center-image" style={{ textAlign: 'center', marginRight: '0px' }}>
              <img src="/src/assets/Imges/logo.png" alt="Your Image" className='ph' style={{ height: '40px', width: 'auto', marginLeft: '10px', }} />
              <img src="https://biagiotti.qodeinteractive.com/wp-content/themes/biagiotti/assets/img/logo_white.png"  className='photo'style={{ height: '40px', width: 'auto', marginLeft: '10px',display:'none' }} />
            </div>
             {/* Simplified SHOP Dropdown */}
             <NavDropdown title="SHOP" id="basic-nav-dropdown" className="shop-menu">
  <div className="shop-menu-content">
    {menuData.find(item => item.path === '/shop').items.map(subItem => (
      subItem.items ? (
        <div key={subItem.path} className="shop-menu-section">
          <div className="shop-menu-title">{subItem.name}</div>
          <div className="shop-menu-items">
            {subItem.items.map(subSubItem => (
              <NavDropdown.Item as={NavLink} to={subSubItem.path} key={subSubItem.path}>
                {subSubItem.name}
              </NavDropdown.Item>
            ))}
          </div>
        </div>
      ) : (
        <NavDropdown.Item as={NavLink} to={subItem.path} key={subItem.path}>
          {subItem.name}
        </NavDropdown.Item>
      )
    ))}
  </div>
</NavDropdown>

            </Nav>

            <Nav className="ms-3">
              {menuData.slice(4).map(item => (
                item.items ? (
                  <NavDropdown title={item.name} id="basic-nav-dropdown" key={item.path} className="custom-shop-dropdown">
                    {item.items.map(subItem => (
                      subItem.items ? (
                        <NavDropdown title={subItem.name} id="basic-nav-dropdown" key={subItem.path}>
                          {subItem.items.map(subSubItem => (
                            <NavDropdown.Item as={NavLink} to={subSubItem.path} key={subSubItem.path}>
                              {subSubItem.name}
                            </NavDropdown.Item>
                          ))}
                        </NavDropdown>
                      ) : (
                        <NavDropdown.Item as={NavLink} to={subItem.path} key={subItem.path}>
                          {subItem.name}
                        </NavDropdown.Item>
                      )
                    ))}
                  </NavDropdown>
                ) : (
                  <Nav.Link as={NavLink} to={item.path} key={item.path}>
                    {item.name}
                  </Nav.Link>
                )
              ))}
            </Nav>
            <div className="cont">
              <div className="mkdf-position-right-inner-wrap">
                <a
                  style={{ margin: '0px 16px 0px 0px' }}
                  className="mkdf-search-opener mkdf-icon-has-hover mkdf-search-opener-svg-path"
                  
                  onClick={toggleSearch}
                >
                  <span className="mkdf-search-opener-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 25 25">
                      <path d="M16.963,15.664c1.21-1.302,1.957-3.041,1.957-4.955c0-4.021-3.271-7.293-7.293-7.293c-4.021,0-7.292,3.271-7.292,7.293c0,4.021,3.271,7.292,7.292,7.292c1.747,0,3.352-0.619,4.609-1.647l4.871,4.59l0.686-0.729L16.963,15.664z M11.626,15.354c-2.618,0-4.746-2.128-4.746-4.746c0-2.617,2.128-4.745,4.746-4.745c2.617,0,4.746,2.127,4.746,4.745C16.372,13.226,14.243,15.354,11.626,15.354z"></path>
                    </svg>
                  </span>
                </a>
              </div>
              {showSearch && (
                <div className="mkdf-search-wrapper">
                  <input type="text" placeholder="Search..." className="mkdf-search-field" />
                  <button type="button" className="mkdf-search-close" onClick={toggleSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 25 25">
                      <path d="M12.5,11.1l-6.1-6.1l-1.4,1.4l6.1,6.1l-6.1,6.1l1.4,1.4l6.1-6.1l6.1,6.1l1.4-1.4l-6.1-6.1l6.1-6.1l-1.4-1.4L12.5,11.1z"></path>
                    </svg>
                  </button>
                </div>
              )}
            </div>
            <div className="mkdf-shopping-cart-holder">
             <CartIcon />
            </div>
            <div className="side">
      <a
        className="mkdf-side-menu-button-opener mkdf-icon-has-hover mkdf-side-menu-button-opener-svg-path"
        href="#"
        style={{ margin: '0px -4px 0px 17px' }}
        onClick={(e) => {
          e.preventDefault(); // Prevent default action
          toggleMenu(); // Call the toggleMenu function
        }}
      >
        <span className="mkdf-side-menu-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="50px"
            height="20px"
            viewBox="0 0 50 20"
            enableBackground="new 0 0 50 20"
            xmlSpace="preserve"
          >
            <rect x="5" y="3" width="40" height="1"></rect>
            <rect x="5" y="10" width="40" height="1"></rect>
            <rect x="5" y="17" width="40" height="1"></rect>
          </svg>
        </span>
      </a>
 {/* Side Menu */}
 <div className={`mkdf-side-menu ${sideMenuOpen ? 'ps--active-y' : ''}`}>
        <div className="mkdf-close-side-menu" onClick={toggleMenu}>
          <span className="close-btn" style={{fontSize:'40px'}}>×</span>
        </div>
        {/* Side menu content goes here */}
        <div className="textwidget">
            <p>
              <a >
                <img src="./src/assets/Imges/logo-for-sidebar.png" alt="" />
              </a>
            </p>
          </div>
          <div className="widget_text widget mkdf-sidearea widget_custom_html">
            <div className="textwidget custom-html-widget">
            <h5><span style={{color: "#c1c1c1"}}>At vero eos et accusamus et iusto odio dignissimos<br/> qui blanditiis praesentium voluptatum.</span></h5>
            </div>
          </div>
          <div className="widget mkdf-social-icons-group-widget mkdf-light-skin mkdf-square-icons text-align-center">
          <a className="mkdf-social-icon-widget-holder mkdf-icon-has-hover"  style={{margin:" 0px 2px 0px 3px"}} >
          <span className="mkdf-social-icon-widget icon-social-facebook"><FaFacebookF className='icon'/></span> </a>
          <a className="mkdf-social-icon-widget-holder mkdf-icon-has-hover" style={{margin:" 0px 2px 0px 3px"}} target="_blank">
          <span className="mkdf-social-icon-widget icon-social-twitter"><FaTwitter  className='icon'/></span> </a>
          <a className="mkdf-social-icon-widget-holder mkdf-icon-has-hover"  style={{margin:" 0px 2px 0px 3px"}}  target="_blank">
          <span className="mkdf-social-icon-widget icon-social-instgram"><FaInstagram  className='icon'/></span> </a>
          <a className="mkdf-social-icon-widget-holder mkdf-icon-has-hover"  style={{margin:" 0px 2px 0px 3px"}} target="_blank">
          <span className="mkdf-social-icon-widget icon-social-pintrest"><FaPinterest  className='icon'/></span> </a>
          </div>
          <div className="widget_text widget mkdf-sidearea-bottom widget_custom_html" id="custom_html-4">
            <div className="textwidget custom-html-widget">
            <h4><span style={{color: "#ffffff"}}>Collections</span></h4>
            </div>
            <div  className="par"style={{ fontStyle: "italic",fontSize:'15px'}}>
              <p><a >Organic Collections</a></p>
            <p><a>ABCDEH Beauty - Forever Young</a></p>
               <p><a >Pure Skin Solutions</a></p>
</div>
          </div>
      
       
      </div>
    </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
