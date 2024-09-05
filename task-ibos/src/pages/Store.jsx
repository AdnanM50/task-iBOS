// import React from 'react';
import ProductList from '../components/ProductList';
import Cart from './Cart';
import Content from '../components/store/content';
import Sidebar from '../components/store/sideber';


const Store = () => {
  return (
    <div className="container lg:flex space-x-4">
        <Sidebar />
        <Content />
      {/* <ProductList />
      <Cart /> */}
    </div>
  );
};

export default Store;
