function updateInventory(currentInventory, newInventory) {
  for (let i = 0; i < newInventory.length; i += 1) {
    let itemFound = false;
    const newItem = newInventory[i];
    const [newItemQuantity, newItemName] = newItem;
    for (let j = 0; j < currentInventory.length; j += 1) {
      const currentItem = currentInventory[j];
      const [currentItemQuantity, currentItemName] = currentItem;
      if (newItemName === currentItemName) {
        itemFound = true;
        const updatedItem = [
          currentItemQuantity + newItemQuantity,
          currentItemName
        ];
        currentInventory[j] = updatedItem;
        break;
      }
    }
    if (!itemFound) {
      currentInventory.push(newItem);
    }
  }
  return currentInventory.sort((a, b) => {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  });
}

export { updateInventory };
