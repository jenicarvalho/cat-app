export const normalizeData = (data) => {
  return data?.map((item: any) => {
    const [breed] = item.breeds;
    return {
      ...item,
      breeds: {
        ...breed,
        weight: breed.weight.imperial
      }
    }
  })
}