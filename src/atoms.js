import {
  atom,
  // selector,
  // useRecoilState,
  // useRecoilValue,
} from 'recoil';

export const relationshipsState = atom({
  key: 'relationshipsState',
  default: {},
});

export const entryMapState = atom({
  key: 'entryMap',
  default: {},
});

export const stylesState = atom({
  key: 'stylesMap',
  default: {},
});
