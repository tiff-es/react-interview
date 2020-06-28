export default function subscribeOrders(callback) {
  setInterval(() => {
    const randomTable = (Math.trunc(Math.random() * 100) % 5) + 1;
    const randomItem = Math.trunc(Math.random() * 100) % 5;
    const randomAmount = (Math.trunc(Math.random() * 100) % 5) + 1;

    const items = ["donuts", "bagel", "coffee", "waffles", "eggs"];

    const data = {
      tableNumber: randomTable,
      items: [
        {
          itemName: items[randomItem],
          quantity: randomAmount
        }
      ]
    };

    callback(data);
  }, 3000);
}
