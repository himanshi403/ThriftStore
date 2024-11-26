console.log('Server is starting...');
const express = require('express');
const cors = require('cors');


const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Data for T-shirts
let tshirts = [
  { id: 1, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcxcMZzP5HtwxGtRx5r61UEyyUG22pJ-mGKg&s', price: 5.99 },
  { id: 2, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XcBmyHa0urexsxBrISilsWu78STSOKMkFw&s', price: 2.00 },
  { id: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQHhgPC19MVWwtKcLDsBd5qFXIf5NzcgGYQ&s', price: 8.49 },
  { id: 4, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4qYvO1uUqzr8weYD1iGytNltGnEI1JDJpoQ&s', price: 3.30 },
  { id: 5, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnke5SH6liOCvvexDd1orKUwnpuQurM6lJXQ&s', price: 4.99 },
  { id: 6, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYmAOAmZdwkhAvGmelaH8NZ6Ie46WfAGvOg&s', price: 6.80 },
  { id: 7, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPdqgbphin_7L03gDVa2hmpLARwMxYD20Rg&s', price: 2.99 },
  { id:8 , src:'https://rethought.in/cdn/shop/files/Task-8678085-1-1_360x.png?v=1712140769', price: 2.99 },
  { id:9 , src:'https://rethought.in/cdn/shop/files/118-1-1_c75d82b0-b5da-44ff-9a41-f2079f989304_360x.png?v=1717151203', price: 3.99 },
  { id:10 , src:'https://rethought.in/cdn/shop/files/47-1-1_fda1d1f8-449c-4d4a-8ac9-489140ce0487_360x.png?v=1717758247', price: 4.99 }
];

// Data for Crop Tops
let partyTops = [
  { id: 1, src: 'https://rethought.in/cdn/shop/files/5158-1-3.png?v=1717133275', price: 6.99 },
  { id: 2, src: 'https://rethought.in/cdn/shop/files/39-1-1_1.png?v=1725080299', price: 5.00 },
  { id: 3, src: 'https://rethought.in/cdn/shop/files/5168-1-3_360x.png?v=1717136648', price: 4.49 },
  { id: 4, src: 'https://rethought.in/cdn/shop/files/73-1-2_360x.png?v=1712569674', price: 7.30 },
  { id: 5, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdC6I8r33h1iU8pWT5SP6nyZYErxeXW1pE2Q&s', price: 3.99 },
  { id: 6, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXuMYfDd_YJtyhlfvN4_xYkRTA42W2RJ3wQ&s', price: 4.80 },
  { id: 7, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdSEZURwUNF4FWvu88O-hZYpwrRq7XWZJWA&s', price: 5.99 },
  { id: 8, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcTNGzHST_5e5z9I95T8bar3J2SRuRccHm2A&s', price: 4.99 },
  { id: 9, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhsjn8748MxN8SBVUwzYm7Y-S_vCwSgivBYQ&s', price: 3.99 },
  { id: 10, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0FBj1BLU7SkVgOZjq27k_YRiFPmH2zLQ0g&s', price: 2.99 }
];

// Data for Trousers
let trousers = [
  { id: 1, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa90A-2EOKi6kWAmM0dcGz5U3EWWa6fGy3Qg&s', price: 2.99 },
  { id: 2, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb0x14jfZjiEDoTLim54cizH6UNQkVvzKaRA&s', price: 5.00 },
  { id: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgbpRpxxb5-c5RdRaQZUHYIrCF01BA3enIgw&s', price: 4.49 },
  { id: 4, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBb8evw_3SJcB4Mh_kmiSMsbMsynEzW0uDNw&s', price: 1.30 },
  { id: 5, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmF3H438PN-fPJSNnaRyaFD_RolZdX8kOS9g&s', price: 2.99 },
  { id: 6, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLn9Itf7yUSr9rAicsy87i222sb3ZYF8Y1VQ&s', price: 2.50 },
  { id: 7, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs9evCjphY2A_zo05r6ZBymnbE5fOvlExKuA&s', price: 1.99 },
  { id: 8, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWnJuBzAVOFoc1MPz7VJyoKZGr4SLAvb7Lg&s', price: 1.99 }
];

// API Routes
app.get('/api/tshirts', (req, res) => {
  res.json(tshirts);
});

app.get('/api/tops', (req, res) => {
  res.json(partyTops);
});

app.get('/api/trousers', (req, res) => {
  res.json(trousers);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:5001`);
});

