const inventory = {
    item1: 10.99,
    item2: 5.99,
    item3: 3.49,
    item4: 7.99
  };
  
  const exchangeRate = 80;
  
  const inventoryInRupees = Object.fromEntries(
    Object.entries(inventory).map(([item, price]) => [item, price * exchangeRate])
  );
  
  console.log(inventoryInRupees);
  