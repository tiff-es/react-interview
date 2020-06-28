const orders = [
  {
    tableNumber: 3,
    items: [
      {
        itemName: "coffee",
        quantity: 2
      },
      {
        itemName: "donuts",
        quantity: 6
      }
    ]
  },
  {
    tableNumber: 4,
    items: [
      {
        itemName: "bagel",
        quantity: 1
      }
    ]
  }
];

export default function getOrders() {
  return Promise.resolve(orders);
}
