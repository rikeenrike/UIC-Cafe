import { ref, computed } from "vue";

export const drinksList = [
  { id: 1, name: 'Hot Coffees' },
  { id: 2, name: 'Flavored Coffees' },
  { id: 3, name: 'Iced Coffees' },
  { id: 4, name: 'Blended Frappes' },
  { id: 5, name: 'Chocolates' },
  { id: 6, name: 'Milk Teas' },
  { id: 7, name: 'Fresh Juices' },
];
export const foodList = [
  { id: 1, name: 'Sandwiches' },
  { id: 2, name: 'Pastries' },
  { id: 3, name: 'Pasta' },
  { id: 4, name: 'Rice Meals' },
  { id: 5, name: 'Snacks' },
  { id: 6, name: 'Desserts' },
];

export const drinksLibrary = [
  {
    id: 1,
    name: 'hotcoffees',
    header: 'Hot Coffees',
    items: [
      { id: 1, name: 'Caffe Americano', price: 60 },
      { id: 2, name: 'Caffe Latte', price: 75 },
      { id: 3, name: 'Coffee Cappuccino', price: 65 },
      { id: 4, name: 'Latte Macchiato', price: 75 },
      { id: 5, name: 'Caffe Mocha', price: 80 },
    ],
  },
  {
    id: 2,
    name: 'flavoredcoffees',
    header: 'Flavored Coffees',
    items: [
      { id: 1, name: 'Caramel Macchiato', price: 80 },
      { id: 2, name: 'Mocha Chocolate', price: 80 },
    ],
  },
  {
    id: 3,
    name: 'milkteas',
    header: 'Milk Teas',
    items: [
      { id: 1, name: 'Wintermelon', price: 45 },
      { id: 2, name: 'Okinawa', price: 45 },
      { id: 3, name: 'Mango', price: 45 },
      { id: 4, name: 'Oreo', price: 45 },
      { id: 5, name: 'Caramel', price: 45 },
      { id: 6, name: 'Chocolate', price: 50 },
    ],
  },
  {
    id: 4,
    name: 'blendedfrappes',
    header: 'Blended Frappes',
    items: [
      { id: 1, name: 'Strawberry', price: 85 },
      { id: 2, name: 'Cookies n Cream', price: 85 },
      { id: 3, name: 'Mocha', price: 85 },
      { id: 4, name: 'Ube', price: 85 },
      { id: 5, name: 'Chocolate', price: 90 },
      { id: 6, name: 'Mango', price: 85 },
    ],
  },
  {
    id: 5,
    name: 'icedcoffees',
    header: 'Iced Coffees',
    items: [
      { id: 1, name: 'Cafe Latte', price: 75 },
      { id: 2, name: 'Caramel Macchiato', price: 85 },
      { id: 3, name: 'Cafe Mocha', price: 85 },
      { id: 4, name: 'Cafe Americano', price: 70 },
      { id: 5, name: 'Cappuccino', price: 85 },
    ],
  },
  {
    id: 6,
    name: 'chocolates',
    header: 'Chocolates',
    items: [
      { id: 1, name: 'Hot Chocolate', price: 60 },
      { id: 2, name: 'Cold Chocolate', price: 70 },
    ],
  },
  {
    id: 7,
    name: 'freshjuices',
    header: 'Fresh Juices',
    items: [
      { id: 1, name: 'Apple', price: 55 },
      { id: 2, name: 'Carrot', price: 55 },
      { id: 3, name: 'Mango', price: 55 },
      { id: 4, name: 'Apple Carrot (Double Fruit)', price: 70 },
    ],
  },
];

export const UserOrder = [

];

export const UserOngoingOrder = [

];
export const UserOrderHistory = [
  {
    id: 1,
    date: '12/27/2023',
    time: '3:30:01 AM',
    items: [
        { id: 1, name: 'Caffe Americano', price: 60, quantity: 1, total: 60 },
        { id: 2, name: 'Caffe Latte', price: 75, quantity: 1, total: 75 },
        { id: 3, name: 'Coffee Cappuccino', price: 65, quantity: 1, total: 65 },
    ],
    total: 200,
    payment: 'Cash',
    status: 'Completed',
},
{
    id: 2,
    date: '12/27/2023',
    time: '3:35:00 AM',
    items: [
        { id: 4, name: 'Latte Macchiato', price: 75, quantity: 2, total: 150 },
        { id: 6, name: 'Mango', price: 45, quantity: 1, total: 45 },
    ],
    total: 195,
    payment: 'Tally',
    status: 'Completed',
},
{
    id: 3,
    date: '12/27/2023',
    time: '4:15:45 AM',
    items: [
        { id: 10, name: 'Iced Coffees', price: 85, quantity: 3, total: 255 },
    ],
    total: 255,
    payment: 'Cash',
    status: 'Cancelled',
},
];


export const notification = [
  { id: 1, title: 'Order #1', message: 'Your order is ready for pickup', date: '2021-09-01', time: '12:00:00' },
  { id: 2, title: 'Order #2', message: 'Your order is ready for pickup', date: '2021-09-01', time: '12:00:00' },
  { id: 3, title: 'Order #3', message: 'Your order is ready for pickup', date: '2021-09-01', time: '12:00:00' },
]

export const users = [
  { id: '1234', password: 'password123', name: 'John Doe' },
  { id: '5678', password: 'testpass' , name: 'Jane Doe' },
];
