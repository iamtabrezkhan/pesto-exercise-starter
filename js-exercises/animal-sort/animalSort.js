function sortAnimals(animal1, animal2) {
  if (animal1.numberOfLegs > animal2.numberOfLegs) return 1;
  if (animal1.numberOfLegs < animal2.numberOfLegs) return -1;
  if (animal1.name > animal2.name) return 1;
  if (animal1.name < animal2.name) return -1;
}

const animalSort = animals => {
  if (animals.length === 0) {
    return [];
  }
  const result = animals.sort(sortAnimals);
  return result;
};

export { animalSort };
