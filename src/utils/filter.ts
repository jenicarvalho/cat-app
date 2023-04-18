export const getBreeds = (data) => {
  const filterMap = new Map();
  for (const item of data) {
    filterMap.set(item.breeds.name, item.breeds.name)
  }
  return [...filterMap];
}

export const getFilterData = (data, filter) => {
  const filterMap = new Map();
  for (const item of data) {
    filterMap.set(item.breeds[filter], item.breeds[filter])
  }
  return [...filterMap];
}
