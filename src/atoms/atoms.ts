import { atom } from "recoil";

export const searchText = atom({
  key: "searchText",
  default: "",
});

export const selectedPage = atom({
  key: "selectedPage",
  default: 1,
});
