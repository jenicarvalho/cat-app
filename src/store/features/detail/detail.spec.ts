import detailReducer, { DetailState, saveCat, favCat } from './slice';

const catMock = {
  id: 'EHG3sOpAM',
  url: 'https://cdn2.thecatapi.com/images/EHG3sOpAM.jpg',
  breeds: {
    weight: '7  -  10',
    name: 'Abyssinian',
  },
  width: 1600,
  height: 1067
}

describe('Detail Reducer', () => {
  const initialState: DetailState = {
    cat: {
      breeds: [],
      id: '',
      url: '',
      width: 0,
      height: 0,
    },
  };

  it('should handle initial state', () => {
    expect(detailReducer(undefined, { type: 'unknown' })).toEqual({
      cat: {
        breeds: [],
        id: '',
        url: '',
        width: 0,
        height: 0,
      },
    });
  });

  it('should save to store', () => {
    const actual = detailReducer(initialState, saveCat(catMock));
    expect(actual.cat).toEqual(catMock);
  });

  it('should fav the cat', () => {
    const actual = detailReducer({cat: catMock}, favCat());
    expect(actual.cat.favourite).toBeTruthy();
  });

});