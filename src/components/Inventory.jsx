const Inventory = [
  {
    id: 0,
    name: 'Original Cinnamon Roll',
    price: '2.49',
    url: '/assets/original-cinnamon-roll.jpg',
  },
  {
    id: 1,
    name: 'Apple Cinnamon Roll',
    price: '3.49',
    url: '/assets/apple-cinnamon-roll.jpg',
  },
  {
    id: 2,
    name: 'Raisin Cinnamon Roll',
    price: '2.99',
    url: '/assets/raisin-cinnamon-roll.jpg',
  },
  {
    id: 3,
    name: 'Walnut Cinnamon Roll',
    price: '3.49',
    url: '/assets/walnut-cinnamon-roll.jpg',
  },
  {
    id: 4,
    name: 'Double-chocolate Cinnamon Roll',
    price: '3.99',
    url: '/assets/double-chocolate-cinnamon-roll.jpg',
  },
  {
    id: 5,
    name: 'Strawberry Cinnamon Roll',
    price: '3.99',
    url: '/assets/strawberry-cinnamon-roll.jpg',
  },
];

const glazingPrice = {
  'Keep Original': 0,
  'Sugar Milk': 0,
  'Vanilla Milk': 0.5,
  'Double chocolate': 1.5,
};

const packPrice = {
  1: 1,
  3: 3,
  6: 5,
  12: 10,
};

export default Inventory;
export { glazingPrice, packPrice };
