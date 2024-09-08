import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './Footer.scss';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import logoSidebar from '../../assets/Imges/logo-for-sidebar (1).png';

export default function Footer() {
  return (
    <MDBFooter style={{ background: '#000' }} className='text-center text-lg-start text-muted'>
      <MDBContainer>
        <MDBRow className='mkdf-grid-row mkdf-footer-top-alignment-left'>
          {/* First Column */}
          <MDBCol md='4' className='mkdf-column-content'>
            <div className='widget mkdf-separator-widget left'>
              <div className='mkdf-separator-holder clearfix mkdf-separator-center mkdf-separator-normal'>
                <div className='mkdf-separator' style={{ marginTop: '130px', color: '#fff' }}></div>
              </div>
            </div>
            <div id='text-5' className='widget mkdf-footer-column-1 widget_text'>
              <h4 className='mkdf-widget-title' style={{ fontSize: '16px', color: '#fff' }}>
                Contact
              </h4>
              <p className='contact-info'>
                <em  style={{ color: '#fff' }}>
                  Address:{' '}
                  <a
                   
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ color: '#fff' }}
                  >
                    Seestrasse 21, Zurich
                  </a>
                </em>
              </p>
              <p className='contact-info'>
                <em  style={{ color: '#fff' }}>
                  E-mail:{' '}
                  <a style={{ color: '#fff' }}>
                    biagiottitheme@gmail.com
                  </a>
                </em>
              </p>
              <p className='contact-info'>
                <em  style={{ color: '#fff' }}>
                  Phone:{' '}
                  <a href='tel:+994117253912' style={{ color: '#fff' }}>
                    +99 411 725 39 12
                  </a>
                </em>
              </p>
              <p>
                <img
                  src='https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/footer-img-1.png'
                  alt='footer image'
                  width='223'
                  height='24'
                />
              </p>
            </div>
          </MDBCol>

          {/* Second Column */}
          <MDBCol md='4' className='mkdf-column-content flex'>
            <div className='widget mkdf-separator-widget left'>
              <div className='mkdf-separator-holder clearfix mkdf-separator-center mkdf-separator-normal'>
                <div className='mkdf-separator' style={{ marginTop: '70px', color: '#fff' }}></div>
              </div>
            </div>
            <div className="img">
              <div className="widget mkdf-footer-column-2 widget_text">
                <div className="textwidget">
                  <p>
                    <img src={logoSidebar} alt="Logo Sidebar" />
                  </p>
                </div>
              </div>
            </div>
            <div className="widget_text widget mkdf-sidearea widget_custom_html">
              <div className="textwidget custom-html-widget">
                <h5>
                  <span style={{ color: 'rgb(193, 193, 193)' }}>
                    An oasis of online beauty built specifically so your<br/>new cosmetics site can take everyone’s breaths away.
                  </span>
                </h5>
              </div>
            </div>
            <div className="widget mkdf-social-icons-group-widget mkdf-light-skin mkdf-square-icons text-align-center">
              <a className="mkdf-social-icon-widget-holder mkdf-icon-has-hover" style={{ margin: '0 2px' }} href="https://www.facebook.com/QodeInteractive/" target="_blank" rel="noopener noreferrer">
                <span className="mkdf-social-icon-widget icon-social-facebook">
                  <FaFacebookF className='icon'/>
                </span>
              </a>
              <a className="mkdf-social-icon-widget-holder mkdf-icon-has-hover" style={{ margin: '0 2px' }} href="https://twitter.com/QodeInteractive" target="_blank" rel="noopener noreferrer">
                <span className="mkdf-social-icon-widget icon-social-twitter">
                  <FaTwitter className='icon'/>
                </span>
              </a>
              <a className="mkdf-social-icon-widget-holder mkdf-icon-has-hover" style={{ margin: '0 2px' }} href="https://www.instagram.com/QodeInteractive/" target="_blank" rel="noopener noreferrer">
                <span className="mkdf-social-icon-widget icon-social-instgram">
                  <FaInstagram className='icon'/>
                </span>
              </a>
              <a className="mkdf-social-icon-widget-holder mkdf-icon-has-hover" style={{ margin: '0 2px' }} href="https://www.pinterest.com/QodeInteractive/" target="_blank" rel="noopener noreferrer">
                <span className="mkdf-social-icon-widget icon-social-pintrest">
                  <FaPinterest className='icon'/>
                </span>
              </a>
            </div>
          </MDBCol>

          {/* Third Column (Fixed) */}
          <MDBCol md='4' className='mkdf-column-content'>
            <div className='widget mkdf-separator-widget left'>
              <div className='mkdf-separator-holder clearfix mkdf-separator-center mkdf-separator-normal'>
                <div className='mkdf-separator' style={{ marginTop: '140px', color: '#fff' }}></div>
              </div>
            </div>
            <div className="widget_text widget mkdf-sidearea-bottom widget_custom_html footer-widget-alignment-right" style={{ marginLeft: '130px' }}>
              <h4 style={{ color: "#fff", margin: "0 0 37px", fontSize:'16px' }}>Collections</h4>
              <p style={{ marginBottom: '1rem', marginTop: '-27px', fontSize: '15px', color:'#cacaca' }}>
                <em>
                  <a 
                    
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Glowing skin is a result
                  </a>
                </em>
              </p>
              <p style={{ marginBottom: '1rem', marginLeft:'0px', fontSize: '15px', color:'#cacaca' }}>
                <em>
                  <a 
                  
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    ABCDEH Beauty – Forever Young
                  </a>
                </em>
              </p>
              <p style={{ marginBottom: '1rem', fontSize: '15px', color:'#cacaca'}}>
                <em>
                  <a 
                  
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Pure Skin Solutions
                  </a>
                </em>
              </p>
            </div>
          </MDBCol>
        </MDBRow>
        <div className="mkdf-footer-bottom-holder">
  <div className="mkdf-footer-bottom-inner mkdf-grid mkdf-compact-spacing">
    <div className="mkdf-grid-row">
      <div className="mkdf-grid-col-12">
        <div id="nav_menu-2" className="widget mkdf-footer-bottom-column-1 widget_nav_menu">
          <div className="menu-footer-menu-bottom-container">
            <ul id="menu-footer-menu-bottom" className="menu">
              <li id="menu-item-3335" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3335">
                <a >Privacy Policy</a>
              </li>
              <li id="menu-item-3336" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3336">
                <a>Terms and Conditions</a>
              </li>
              <li id="menu-item-3331" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3331">
                <a>About</a>
              </li>
              <li id="menu-item-3334" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3334">
                <a >Shipping Info</a>
              </li>
              <li id="menu-item-3332" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3332">
                <a >Returns/Exchanges</a>
              </li>
              <li id="menu-item-3333" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3333">
                <a >Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      </MDBContainer>
    </MDBFooter>
  );
}
