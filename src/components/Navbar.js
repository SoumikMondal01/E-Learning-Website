import React, { useState } from 'react';
import styled from "styled-components";
import { MdMenu, MdShoppingCart, MdSearch } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import courses from '../utils/data';

const Navbar = () => {
  const { total_items } = useCartContext();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    setSearchQuery(searchQuery);
    
  };

  const handleSearchChange = (event)=>{
    setSearchQuery(event.target.value);
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <NavbarWrapper className="bg-white flex">
      <div className='container w-100'>
        <div className='brand-and-toggler flex flex-between w-100'>

          <Link to="/" className='navbar-brand text-uppercase ls-1 fw-8'>
            <span>c</span>ourseMela
          </Link>
          <div className='search-bar'>
            <MdSearch />
            <input type="text" placeholder="Search Courses" value={searchQuery} onChange={handleSearchChange} onKeyPress={handleKeyPress}/>
          </div>
          
          <div className='navbar-btns flex'>
            <Link to="/signin" className='sign-in-btn'>
              Sign In
            </Link>
            <Link to="/cart" className='cart-btn'>
              <MdShoppingCart />
              <span className='item-count-badge'>{total_items}</span>
            </Link>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  height: 80px;
  box-shadow: rgba(60, 60, 85, 0.20);

  .navbar-brand{
    font-size: 23px;
    span{
      font-size: 35px;
      font-weight: 700;
      color: var(--clr-purple);
    }
  }
  .sign-in-btn{
    margin: 13px;
    padding: 7px;
    border: 2px solid black;
    border-radius: 7%;
    background-color: purple;
    color: whitesmoke;
  }
  .cart-btn{
    margin-right: 18px;
    font-size: 23px;
    position: relative;
    .item-count-badge{
      background-color: var(--clr-purple);
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
    .search-bar {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 5px;
    margin-right: 10px;
    margin-left: 400px;

    input {
      border: none;
      outline: none;
      margin-left: 5px;
    }
  }
`;

export default Navbar;