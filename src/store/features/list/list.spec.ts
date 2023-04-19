import listReducer, { ListState, getState, filter, filterFavs, filterNonFavs, reset, save, sort } from './slice';

const catMock = {
  cats: [
    {
      breeds: {
        name: 'Arabian Mau',
        origin: 'United Arab Emirates'
      },
      favourite: true
    },
    {
      breeds: {
        name: 'Bengal',
        origin: 'United States'
      },
    },
    {
      breeds: {
        name: 'Abyssinian',
        origin: 'Egypt'
      },
    },
    {
      breeds: {
        name: 'Balinese',
        origin: 'United States'
      },
    },
  ],
  catsFiltered: [],
  status: ''
}

describe('List Reducer', () => {
  const initialState: ListState = {
    cats: [],
    catsFiltered: [],
    status: ''
  };

  it('should handle initial state', () => {
    expect(listReducer(undefined, { type: 'unknown' })).toEqual({
      cats: [],
      catsFiltered: [],
      status: ''
    });    
  });

  it('should save to store', () => {
    const actual = listReducer(initialState, save(catMock));
    expect(actual.cats).toEqual(catMock);    
  });

  it('should sort the cats', () => {
    const actual = listReducer(catMock, sort('name'));
    expect(actual.cats).toEqual([
      { breeds: { name: 'Abyssinian', origin: 'Egypt' } },
      { breeds: { name: 'Arabian Mau', origin: 'United Arab Emirates' }, favourite: true },
      { breeds: { name: 'Balinese', origin: 'United States' } },
      { breeds: { name: 'Bengal', origin: 'United States' } }
    ])
  });

  it('should filter the cats by origin', () => {
     const actual = listReducer(catMock, filter({ type: 'origin', value: 'Egypt', isBreed: false }));
      expect(actual.catsFiltered).toEqual([ 
        { breeds: { name: 'Abyssinian', origin: 'Egypt' } } 
      ])
  });

  it('should filter the cats by breed', () => {
     const actual = listReducer(catMock, filter({ type: 'breed', value: 'Bengal', isBreed: true }));
      expect(actual.catsFiltered).toEqual([ 
        { breeds: { name: 'Bengal', origin: 'United States' } } 
      ])
  });

  it('should filter by fav cats', () => {
     const actual = listReducer(catMock, filterFavs());
     expect(actual.catsFiltered).toEqual([
      { breeds: { name: 'Arabian Mau', origin: 'United Arab Emirates' }, favourite: true },
     ])
  });

  it('should filter by non-fav cats', () => {
     const actual = listReducer(catMock, filterNonFavs());
     expect(actual.catsFiltered).toEqual([
        { breeds: { name: 'Bengal', origin: 'United States' } },
        { breeds: { name: 'Abyssinian', origin: 'Egypt' } },
        { breeds: { name: 'Balinese', origin: 'United States' } }
     ])    
  });

  it('should reset cats', () => {
    const actual = listReducer(catMock, reset());
    expect(actual.catsFiltered).toEqual(catMock.catsFiltered);
  });

});