import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../Styles/Home.scss'; // Import the SCSS file for styling
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay,Navigation,Pagination } from '../../../node_modules/swiper/modules';
import '../../../node_modules/swiper/swiper-bundle.min.css'; // Import Swiper styles
import Card from '../Card/Card';
import Cards from '../Card/Cards';
import CardSlider from '../Card slider/CardSlider';
import Slider from '../SLIder_back/Slider';
import Numbers from '../numbers/Numbers';
import Background from '../Back/Background';
import S_Card from '../small_Card/S_Card';
import Font_section from '../fonts-section/Font_section';
import Card4 from '../Card4/Card4';
import Last_s from '../Last_section/Last_s';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { last, slides,cards,post,cardSlider,slide,number,back,small_card,font,card4 } from '../ProductDetails/Product';
function CustomCarousel() {
  const initialValues = {
    email: '',
  };
  
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('The field is required.'),
  });
  
  const handleSubmit = (values) => {
    console.log(values);
  };


  return (
    <>
    <Carousel >
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 imgr"
            src={slide.imgSrc}
            alt={`Slide ${index + 1}`}
            style={{ height: '91vh !important' }}
          />
          <Carousel.Caption className="content" style={{ position: 'absolute', left: '10%', color: slide.color }}>
  <div 
    style={{ 
      backgroundImage: `url(${slide.imgTitle})`, 
      height: '100px', 
      width: '300px',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
    }}
  />
  <h3 style={{ color: slide.color }}>{slide.title}</h3>
  <p 
    dangerouslySetInnerHTML={{ __html: slide.description }} 
    style={{ color: slide.color }}>
  </p>
  <a href="#" id='btn' style={{ border: '1px solid #fff', background: slide.color, color: slide.color2, borderRadius: '0' }}>
    <span style={{ color: slide.color2 }}>{slide.a}</span>
  </a>
</Carousel.Caption>

        </Carousel.Item>
      ))}
    </Carousel>

    <div className="conta">
      <div className="mkdf-st-inner center" style={{marginBottom:'30px'}}>
        <span className="mkdf-st-tagline" style={{color: "#e5e5e5"}}>perfect shades </span>
        <h2 className="mkdf-st-title">FIND YOUR BEAUTY MATCH </h2>
        <h5 className="mkdf-st-subtitle">At vero eos et accusamus et iusto </h5>
      </div>

      <div className="swiper-container">
        <Swiper
          modules={[Autoplay, Navigation]} // Include the Autoplay module
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          loop={true} // Enable infinite loop
          autoplay={{
            delay: 1000, // Set the interval time for autoplay (in milliseconds)
            disableOnInteraction: false // Continue autoplay after user interactions
          }}
          speed={1500} // Set the transition speed (in milliseconds)
          slidesPerView={1.2}
          spaceBetween={-5}
          breakpoints={{
            1200: {
              slidesPerView: 2.9
            },
            1350: {
              slidesPerView: 3
            },
            1400: {
              slidesPerView: 4
            }
          }}
        >
          {cards.map((card) => (
  <SwiperSlide key={card.id} style={{ marginRight: '0' }}>
    <Card
      img={card.img}
      header={card.header}
      discount={card.discount}
      price={card.price}
      p={card.p}
      id={card.id} // Make sure to pass the id for navigation
    />
  </SwiperSlide>
))}

        </Swiper>

        {/* Navigation Buttons */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>

    <div className="Cards">
      {post.map((post,index)=>(
        <div className="card" key={index}>
          <Cards img={post.img} title={post.title} cat={post.cat}/>
        </div>
      ))}
    </div>
    <Swiper
  modules={[Navigation, Autoplay]} // Add Autoplay module
  navigation={{
    nextEl: ".header-section-arrows-right",
    prevEl: ".header-section-arrows-left"
  }}
  autoplay={{
    delay: 1000, // Set autoplay interval (in milliseconds)
    disableOnInteraction: false // Keeps autoplay running even after user interactions
  }}
  speed={1500}
  slidesPerView={1.2}
  spaceBetween={-25}
  loop={true} // Ensure the swiper is infinite
  breakpoints={{
    1200: {
      slidesPerView: 2.9
    },
    1350: {
      slidesPerView: 3
    },
    1400: {
      slidesPerView: 4
    }
  }}
  >
  {cardSlider.map((data, index) => (
    <SwiperSlide key={index} style={{ marginRight: '0' }}>
      <CardSlider
        img2={data.img2}
        img={data.img}
      />
    </SwiperSlide>
    ))}
   </Swiper>
   <div className="Slider">
   <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        speed={1500}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slide.map((slide,index)=>(
          <SwiperSlide key={index}>
            <Slider header={slide.header} header4={slide.header4} pargraph={slide.pargraph} headerpar={slide.headerpar}/>
          </SwiperSlide>
        ))}
       
      </Swiper>
   
   </div>
   <div className="Numbers">
    {number.map((data,index)=>(
      <div className="num" key={index}>
        <Numbers img={data.img} title={data.title} par={data.par}/>
      </div>
    ))}
   </div>

   <div className="Background">
    {back.map((data,index)=>(
      <div className="imges" key={index}>
        <Background img={data.img}  title={data.title} header={data.header} par1={data.par1}
        par2={data.par2} btn2={data.btn2} icon={data.icon}/>
      </div>
    ))}
   </div>

   <div className="conta" style={{backgroundImage:'url(./src/assets/Imges/back4.jpg)',backgroundPosition:
    'center', backgroundSize:'cover',backgroundRepeat:'no-repeat',paddingTop: '110px !important',
       paddingBottom: '140px !important'
   }}>
      <div className="mkdf-st-inner center" style={{marginBottom:'40px'}}>
        <span className="mkdf-st-tagline" style={{color: "#e5e5e5"}}>perfect shades </span>
        <h2 className="mkdf-st-title">FIND YOUR BEAUTY MATCH </h2>
        <h5 className="mkdf-st-subtitle">At vero eos et accusamus et iusto </h5>
      </div>
   <div className="small_card_content">
    {small_card.map((data,index)=>(
      <div className="small-card-cont" key={index}>
        <S_Card img={data.img} side_h={data.side_h} pargraph={data.pargraph} price={data.price} />
      </div>
    ))}
   </div></div>

   <div className="fonts">
    {font.map((data,index)=>(
      <div className="font" key={index}>
        <Font_section imgback={data.imgback} img={data.img} header={data.header} pargraph={data.pargraph}/>
      </div>
    ))}
   </div>
   <div className="conta" style={{
    paddingTop: '110px !important',
       paddingBottom: '140px !important'
   }}>
    <div>
      <div className="mkdf-st-inner center" style={{marginBottom:'40px'}}>
        <span className="mkdf-st-tagline">perfect shades </span>
        <h2 className="mkdf-st-title">FIND YOUR BEAUTY MATCH</h2>
        <h5 className="mkdf-st-subtitle">At vero eos et accusamus et iusto</h5>
      </div>
      <div className="card4">
        {card4.map((data, index) => (
          <div className="Card4-item" key={index}>
            <Card4 img={data.img} header={data.header} par={data.par} read={data.read} dateDay={data.dateDay} dateMonth={data.dateMonth}/>
          </div>
        ))}
      </div>
    </div>
   </div>

   <div className="contr" style={{
    backgroundImage: 'url(./src/assets/Imges/final_back.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position:'relative'
}}>
  <div className="form">
  <div className="mkdf-row-bg-text-inner"><span className="mkdf-row-bg-text" style={{ fontFamily:' Great Vibes, cursive',fontSize: '250px' ,color: '#ffffff'}}>Subscribe</span>
  </div>
  <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
  {({  }) => (
    <Form className="mkdf-custom-contact2-form">
      <div className="mkdf-two-columns-form-without-space">
        <div className="mkdf-column-left">
          <p>
            <span className="wpcf7-form-control-wrap">
              <Field
                type="email"
                name="email"
                className="wpcf7-form-control"
                placeholder="E-mail address"
                aria-required="true"
                aria-invalid="true"
                aria-describedby="email-error"
              />
              <ErrorMessage name="email" component="span" className="wpcf7-not-valid-tip" />
            </span>
          </p>
        </div>
        <div className="mkdf-column-right">
          <p>
            <button type="submit" className="mkdf-btn mkdf-btn-medium mkdf-btn-solid">Submit</button>
            {/* Reset Button */}
          </p>
        </div>
      </div>
    </Form>
  )}
</Formik>

  </div>
  <ul className="list">
    {last.map((data, index) => (
      <Last_s img={data.img} key={index} />
    ))}
  </ul>
  <div className="mkdf-instagram-info">
    <div className="mkdf-instagram-tagline">instagram</div>
    <h2 className="mkdf-instagram-title">daily inspiration</h2>
    <div className="mkdf-instagram-subtitle">#theme</div>
    </div>
</div>

  </>
  );
}

export default CustomCarousel;
