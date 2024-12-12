const mongoose = require('mongoose');
const connectDB = require('./db');
const Tshirt = require('./models/Tshirt');
const PartyTop = require('./models/PartyTop');
const Trouser = require('./models/Trouser');

// Connect to DB
connectDB();

const seedData = async () => {
  try {
    // Seed T-shirts
    const tshirts = [
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcxcMZzP5HtwxGtRx5r61UEyyUG22pJ-mGKg&s', price: 5.99 },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XcBmyHa0urexsxBrISilsWu78STSOKMkFw&s', price: 2.00 },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQHhgPC19MVWwtKcLDsBd5qFXIf5NzcgGYQ&s', price: 8.49 },
  {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4qYvO1uUqzr8weYD1iGytNltGnEI1JDJpoQ&s', price: 3.30 },
  {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnke5SH6liOCvvexDd1orKUwnpuQurM6lJXQ&s', price: 4.99 },
  {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYmAOAmZdwkhAvGmelaH8NZ6Ie46WfAGvOg&s', price: 6.80 },
  {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPdqgbphin_7L03gDVa2hmpLARwMxYD20Rg&s', price: 2.99 },
  {src:'https://rethought.in/cdn/shop/files/Task-8678085-1-1_360x.png?v=1712140769', price: 2.99 },


    ];
    await Tshirt.insertMany(tshirts);

    // Seed Party Tops
    const partyTops = [
        {src: 'https://rethought.in/cdn/shop/files/5158-1-3.png?v=1717133275', price: 6.99 },
        {src: 'https://rethought.in/cdn/shop/files/39-1-1_1.png?v=1725080299', price: 5.00 },
        {src: 'https://rethought.in/cdn/shop/files/5168-1-3_360x.png?v=1717136648', price: 4.49 },
        {src: 'https://rethought.in/cdn/shop/files/73-1-2_360x.png?v=1712569674', price: 7.30 },
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdC6I8r33h1iU8pWT5SP6nyZYErxeXW1pE2Q&s', price: 3.99 },
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXuMYfDd_YJtyhlfvN4_xYkRTA42W2RJ3wQ&s', price: 4.80 },
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdSEZURwUNF4FWvu88O-hZYpwrRq7XWZJWA&s', price: 5.99 },
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcTNGzHST_5e5z9I95T8bar3J2SRuRccHm2A&s', price: 4.99 },
        {  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhsjn8748MxN8SBVUwzYm7Y-S_vCwSgivBYQ&s', price: 3.99 },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0FBj1BLU7SkVgOZjq27k_YRiFPmH2zLQ0g&s', price: 2.99 }
    ];
    await PartyTop.insertMany(partyTops);

    // Seed Trousers
    const trousers = [
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa90A-2EOKi6kWAmM0dcGz5U3EWWa6fGy3Qg&s', price: 8.99 },
      {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb0x14jfZjiEDoTLim54cizH6UNQkVvzKaRA&s', price: 5.00 },
      {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgbpRpxxb5-c5RdRaQZUHYIrCF01BA3enIgw&s', price: 4.49 },
      {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBb8evw_3SJcB4Mh_kmiSMsbMsynEzW0uDNw&s', price: 1.30 },
      {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmF3H438PN-fPJSNnaRyaFD_RolZdX8kOS9g&s', price: 2.99 },
      {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLn9Itf7yUSr9rAicsy87i222sb3ZYF8Y1VQ&s', price: 2.50 }
];

    await Trouser.insertMany(trousers);

    console.log('Data seeded successfully');
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

seedData();
