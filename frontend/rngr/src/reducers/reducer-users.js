import * as actions from '../actions';

const findIndex = (array, id) => {
  let memeIndex = -1;
  array.forEach((meme, index) => {
    if (meme.id === id) {
      memeIndex = index;
    }
  });
  return memeIndex;
};

export default function (state = [
  {
    v: "1",
    id: "0",
  },
  {
    v: "2",
    id: "1",
  },
  {
    v: "3",
    id: "2",
  },
  {
    v: "4",
    id: "3",
  },
  {
    v: "5",
    id: "4",
  },
], action) {
  let index;
  switch (action.type) {
    case actions.MEME_ADD_REQ:
      index = findIndex(state, action.index.id);
      return [
        ...state.slice(0, index),
        action.meme,
        ...state.slice(index + 1),
      ]
    default:
      return state;
  }
}
