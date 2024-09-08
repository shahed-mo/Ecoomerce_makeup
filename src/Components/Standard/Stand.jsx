import React, { useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { CartContext } from '../Context/CartContext';
import Review from '../review/Review';
import Card from '../Card/Card'; // Import the Card component
import './Stand.scss';

export default function Stand() {
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false); // State for message visibility
  const { addToCart } = useContext(CartContext);
  const [activeTab, setActiveTab] = useState('description');

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handlePurchase = () => {
    const item = {
      header: 'Summer Mirage',
      price: '$32.00',
      img: 'https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-prod-f-img-1.jpg',
      quantity
    };
    addToCart(item);
    setShowMessage(true); // Show the message when the item is added to the cart
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div id="tab-description">
            <p className='desc'>Lorem ipsum dolor sit amet, justo vivendum vis cu.
              Eu sed adhuc urbanitas, ex democritum intellegam his.
              Cu cum paulo viderer commune. Vis eu meis audiam scripserit, quem luptatum pri te. 
              Adhuc lorem zril sit ex, minim noster suavitate ad eam, simul salutatus elaboraret qui ei. 
              Reque bonorum accusamus eam ut, consequat referrentur id qui. Odio summo mea ex, libris inermis repudiandae an nec,
              vis id suscipit deserunt abhorreant. 
            Commune accommodare te his. Mea no solum erroribus omittantur. Mei nisl hinc natum.</p>
          </div>
        );
      case 'additional_information':
        return (
          <div id="tab-additional_information">
            <table className="woocommerce-product-attributes shop_attributes">
              <tbody>
                <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--weight">
                  <th className="woocommerce-product-attributes-item__label">Weight</th>
                  <td className="woocommerce-product-attributes-item__value">2 kg</td>
                </tr>
                <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--dimensions">
                  <th className="woocommerce-product-attributes-item__label">Dimensions</th>
                  <td className="woocommerce-product-attributes-item__value">2 × 4 × 5 cm</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'reviews':
        return (
          <div id="tab-reviews">
            <Review />
          </div>
        );
      default:
        return null;
    }
  };

  // Example product data
  const products = [
    {
      id: 1,
      img: 'https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/Shop-img-29-300x389.jpg',
      header: 'Creme Z',
      price: 46.00, // Changed to a number
      discount: null,
      p: 'Body Oil',
    },
    {
      id: 2,
      img: 'https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/Shop-img-30-300x389.jpg',
      header: 'Balm',
      price: 25.00, // Changed to a number
      discount: 30.00, // Changed to a number
      p: 'Body Oil',
    },
    {
      id: 3,
      img: 'https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/Shop-img-31-300x389.jpg',
      header: 'Easy Spray',
      price: 28.00, // Changed to a number
      discount: null,
      p: 'Body Oil',
    },
    {
      id: 4,
      img: 'https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/Shop-img-63-300x389.jpg',
      header: 'TNT Balm',
      price: 25.00, // Changed to a number
      discount: null,
      p: 'Body Oil',
    },
  ];

  return (
    <>
      <div className="back"><h1>SHOP</h1></div>
      <Container className='d-flex book'>
        <div className="gallery">
          <div className="images">
            <img src="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-prod-1-gal-1-300x389.jpg" alt="" />
            <img src="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-prod-1-gal-2-300x389.jpg" alt="" />
            <img src="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-prod-1-gal-3-300x389.jpg" alt="" />
            <img src="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-prod-1-gal-4-300x389.jpg" alt="" />
          </div>
          <div className="main-img">
            <img src="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-prod-f-img-1.jpg" alt="" />
          </div>
        </div>
        <div className="description">
          <div className="imgcomponent">
            <h2>Summer Mirage</h2>
            <p className="price">$32.00</p>
            <p className="star">{[...Array(5)].map((_, i) => (<FaStar key={i} />))} (1 customer review)</p>
          </div>
          <div className="small-description">
            <p>An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec. Eu has vide putent, dico option nominati no eam. Ea erant impetus consequuntur eos, velit congue vidisse eos ne. Est dicat doming te, inani eruditi iudicabit mei ea. Sed id prima soluta legimus.</p>
          </div>
          <div className="count">
            <div className="quantity-container">
              <button type="button" onClick={handleDecrease} className="decrease-btn">–</button>
              <div className="quantity-display">{quantity}</div>
              <button type="button" onClick={handleIncrease} className="increase-btn">+</button>
            </div>
            <button type="button" className="button-stand" onClick={handlePurchase}>Purchase</button>
          </div>
          {showMessage && <p className="confirmation-message">Your review has been sent successfully!</p>}
        </div>
      </Container>
      
      <div className="navtabs">
        <ul className="tabs wc-tabs" role="tablist">
          <li className={`description_tab ${activeTab === 'description' ? 'active' : ''}`} id="tab-title-description" role="tab">
            <a href="#tab-description" onClick={() => setActiveTab('description')}>
              Description
            </a>
          </li>
          <li className={`additional_information_tab ${activeTab === 'additional_information' ? 'active' : ''}`} id="tab-title-additional_information" role="tab">
            <a href="#tab-additional_information" onClick={() => setActiveTab('additional_information')}>
              Additional information
            </a>
          </li>
          <li className={`reviews_tab ${activeTab === 'reviews' ? 'active' : ''}`} id="tab-title-reviews" role="tab">
            <a href="#tab-reviews" onClick={() => setActiveTab('reviews')}>
              Reviews (1)
            </a>
          </li>
        </ul>
        <div className="tab-content">
          {renderContent()}
        </div>
      </div>
      <div className="relatedproduct">
        <h2>Related products</h2>
        <div className="card-container">
          {products.map(product => (
            <Card
              key={product.id}
              img={product.img}
              header={product.header}
              price={`$${product.price.toFixed(2)}`} // Ensure toFixed is applied correctly
              discount={product.discount ? `$${product.discount.toFixed(2)}` : null}
              p={product.p}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
