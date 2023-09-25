import {selector} from "recoil";

export const state = selector({
  key: 'state',
  get: async () => {
    return Promise.resolve('Hello, world!');
  }
});