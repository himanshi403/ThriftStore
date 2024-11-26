// src/ProfilePage.js
import React from 'react';
import './ProfilePage.css'; 

const ProfilePage = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://via.placeholder.com/150',
    purchasedItems: [
      { id: 1, name: 'Vintage Lamp', price: '$29.99' },
      { id: 2, name: 'Retro Chair', price: '$49.99' },
      { id: 3, name: 'Classic Vinyl Record', price: '$19.99' },
    ],
  };

  return (
    <div className="profile-page">
      <header className="profile-header">
        <img src={user.profilePicture} alt="Profile" className="profile-picture" />
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </header>

     

      <section className="purchased-items">
        <h2>Buy it Again</h2>
        <ul>
          {user.purchasedItems.map(item => (
            <li key={item.id} className="item-card">
              <span className="item-name">{item.name}</span>
              <span className="item-price">{item.price}</span>
            </li>
          ))}
        </ul>
      </section>
    

<section className="options">
    <br></br><br></br>
<h2>Your Lists</h2>
<div className="options-container">
  <div className="option">
    <img src="https://img.icons8.com/external-tulpahn-flat-tulpahn/64/external-wishlist-online-shopping-tulpahn-flat-tulpahn.png" alt="Wishlist" />
    <p> Wishlist</p>
  </div>
  <div className="option">
    <img src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png" alt="Cart" />
    <p>Cart</p>
  </div>
  <div className="option">
    <img src="https://img.icons8.com/doodle/48/purchase-for-euro.png" alt="Purchases" />
    <p>Purchases</p>
  </div>
</div>
</section>

<section className="options">
    <br></br><br></br>
<h2>Your Orders</h2>
<div className="options-container">
  <h>Hi! John You don't have recent Orders </h>
  </div>
</section>
</div>
  );
};

export default ProfilePage;