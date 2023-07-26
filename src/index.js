import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { CoursesProvider } from './context/courses_context';
import { CartProvider } from './context/cart_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CoursesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CoursesProvider>
);

