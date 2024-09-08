import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Container, Row, Spinner } from 'react-bootstrap';
import { FaStar, FaCartPlus, FaHeart,FaEye } from "react-icons/fa";
import { IoAddOutline, IoHeartOutline } from "react-icons/io5";
import { CartContext } from '../Context/CartContext';
import { WishlistContext } from '../Context/WishlistContext';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FiSend } from "react-icons/fi";
import './Filter.scss';

export default function Filter_by_Category() {
  const [Products, setProducts] = useState([]);
  const [categoryOption, setCategoryOption] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOption, setSortOption] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const { addToCart } = React.useContext(CartContext);
  const { addToWishlist } = React.useContext(WishlistContext);

  useEffect(() => {
    fetch('/src/Components/data/data.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product.id]);
    addToCart({
      ...product,
      img: product.image_link,
      header: product.name,
    });
  };

  const handleAddToWishlist = (product) => {
    setWishlistItems((prevItems) => [...prevItems, product.id]);
    addToWishlist({
      ...product,
      img: product.image_link,
      header: product.name,
    });
  };

  const categories = [
    'Applicators', 'Body Oil', 'Cosmetic Face Masks', 'Foundation', 'Lip Gloss',
    'Lips', 'Moisturizing', 'Organic Perfumes', 'Skin Solutions', 'Uncategorized'
  ];

  const sortOptions = [
    { value: 'price-high-to-low', label: 'Price: High to Low' },
    { value: 'price-low-to-high', label: 'Price: Low to High' },
    { value: 'popularity', label: 'Popularity' },
    { value: 'rating', label: 'Rating' },
    { value: 'latest', label: 'Latest' }
  ];

  const filterProductsByCategory = (category) => {
    return Products.filter((product) => product.category === category);
  };

  const sortProducts = (products) => {
    switch (sortOption?.value) {
      case 'price-high-to-low':
        return products.sort((a, b) => b.price - a.price);
      case 'price-low-to-high':
        return products.sort((a, b) => a.price - b.price);
      case 'popularity':
        return products.sort((a, b) => b.popularity - a.popularity);
      case 'rating':
        return products.sort((a, b) => b.rating - a.rating);
      case 'latest':
        return products.sort((a, b) => new Date(b.date) - new Date(a.date));
      default:
        return products;
    }
  };

  const categoryOptions = categories.map((category) => ({
    value: category,
    label: category,
  }));

  const handleCategoryChange = (selectedCategory) => {
    setCategoryOption(selectedCategory);
    setSelectedProduct(null);
  };

  const handleProductChange = (selectedProduct) => {
    setSelectedProduct(selectedProduct);
  };

  const handleSortChange = (selectedSort) => {
    setSortOption(selectedSort);
  };

  let displayedProducts = categoryOption
    ? filterProductsByCategory(categoryOption.value)
    : Products;

  displayedProducts = sortProducts(displayedProducts);

  return (
    <>
      <div className="back">
        <h1>{categoryOption ? categoryOption.label : 'All Categories'}</h1>
      </div>
      <Container className='container' style={{ marginTop: '120px' }}>
        <div className="d-flex mb-3 " id='comp'>
          <div className="categories-container">
            <h4>Product Categories</h4>
            <ul className="categories-list">
              {categories.map((category) => (
                <li
                  key={category}
                  className={`category-item ${categoryOption?.value === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange({ value: category, label: category })}
                >
                  {category}
                </li>
              ))}
            </ul>
            <div className="smallproduct">
                <h4  style={{marginTop:'3rem' ,marginBottom:'30px'}}>products</h4>
            <div className="card-container">
               <div className="card" style={{marginBottom:'30px'}}>
                <div className="small-car-item">
                <div className="img">
         <img src='https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/Shop-img-1-5-67x84.jpg'alt="" />
                    </div>
                    <div className="content-img">
                        <h4 className='title'>pink lipstick</h4>
                        <p className='star'>  {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                          ))}</p>
                          <p className='price'>$ 49.00</p>
                    </div>
                       </div>
                 </div>
                 <div className="card">
                <div className="small-car-item">
                <div className="img">
         <img src='https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/Shop-img-2-67x84.jpg'alt="" />
                    </div>
                    <div className="content-img">
                        <h4 className='title'>hand creame</h4>
                        <p className='star'>  {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                          ))}</p>
                          <p className='price'>$ 52.00</p>
                    </div>
                       </div>
                 </div>
                  </div>  
                   </div>
                   <div className="tags">
                    <h4 style={{marginTop:'3rem'}}>tags</h4>
                    <div className="com ">
                        <Link>Antiaging</Link>
                        <Link>beauty</Link>
                        <Link>body oil</Link>
                        <Link>comestic</Link>
                        <Link>foundation</Link>
                        <Link>make up</Link>
                        <Link>organic</Link>
                        <Link>skin solution</Link>
                    </div>
                   </div>
                   <div className="search" style={{marginTop:"4rem"}}>
                       <h4>SEARCH</h4>
                   <div className="input-container">
                     <input type="text" placeholder='Search Products...' />
                     <CiSearch className="search-icon" />
                        </div>
                           </div>
                           <h4 className='insta'>instgram</h4>
                           <div className="letter" style={{marginTop:"4rem"}}>
                                 <h4>newletter</h4>
                                 <div className="input-container">
                                  <input type="text" placeholder='Search Products...' />
                                     <FiSend className="search-icon" />
                                            </div>
                           </div>
                       </div>

          <div className="product-display-container">
            <div style={{width:'20%',border:'none'}}>
              <Select
                options={sortOptions}
                value={sortOption}
                onChange={handleSortChange}
                placeholder="Sort By"
                className='select-no-border'
                styles={{border:'none' }}
              />
            </div>
            {loading ? (
              <div className="text-center mt-5">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
                <p>Loading products...</p>
              </div>
            ) : displayedProducts.length === 0 ? (
              <div className="text-center mt-5">
                <p>No products available</p>
              </div>
            ) : (
              <Row className="mt-3">
                {displayedProducts.map((result) => (
                  <div className="col-md-4 mb-4" key={result.id}>
                    <div className="card-item">
                      <div className="card-item-img">
                        <img
                          src={result.image_link}
                          alt={result.name}
                          className="card-img-top"
                        />
                      </div>
                      <div className="card-item-content">
                        <h4 className="card-title">{result.name}</h4>
                        <p className="card-category">{result.category}</p>
                        <p className="card-price"> ${(result.price || 0).toFixed(2)}</p>
                        <div className="star">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div className="icon-card">
                          <button
                            className="add"
                            onClick={() => handleAddToCart(result)}
                          >
                            {cartItems.includes(result.id) ? <FaCartPlus /> : <IoAddOutline />}
                          </button>
                          <button className="eye"><FaEye/></button>
                          <button
                            className="heart"
                            onClick={() => handleAddToWishlist(result)}
                          >
                            {wishlistItems.includes(result.id) ? <FaHeart /> : <IoHeartOutline />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Row>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
