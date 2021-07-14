import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  List: [],
  CartList: [
    {
      id: 1,
      Title: "Fancy Product ",
      Price: "$40.00 -$80.00",
      toggle: false,
      count: 0,
    },
    {
      id: 2,
      Title: "Special Item",
      Price: "$20.00 $18.00",
      toggle: false,
      count: 0,
    },
    {
      id: 3,
      Title: "Sale Item",
      Price: "$50.00 $25.00",
      toggle: false,
      count: 0,
    },
    {
      id: 4,
      Title: "Popular Item",
      Price: "$40.00",
      toggle: false,
      count: 0,
    },
    {
      id: 5,
      Title: "Sale Item",
      Price: "$50.00 $25.00",
      toggle: false,
      count: 0,
    },
    {
      id: 6,
      Title: "Fancy Product ",
      Price: "$120.00 - $280.00",
      toggle: false,
      count: 0,
    },
    {
      id: 7,
      Title: "Special Item ",
      Price: "$20.00 $18.00",
      toggle: false,
      count: 0,
    },
    {
      id: 8,
      Title: "Popular Item ",
      Price: "$40.00",
      toggle: false,
      count: 0,
    },
  ],
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    showall(state, action) {
      const id = action.payload;
      const toggle = state.CartList.find((item) => item.id === id);
      toggle.toggle = !toggle.toggle;
      state.List.push(toggle);
    },
    increment(state, action) {
      console.log("KKKK");
      const id = action.payload;
      const toggle = state.CartList.find((item) => item.id === id);
      console.log(id, toggle);
      toggle.count = toggle.count + 1;
    },
    decrement(state, action) {
      const id = action.payload;
      const toggle = state.CartList.find((item) => item.id === id);

      toggle.count--;
    },
    removeitem(state, action) {
      const id = action.payload;

      const toggle = state.CartList.find((item) => item.id === id);
      console.log(toggle);
      toggle.toggle = !toggle.toggle;

      state.List = state.List.filter((arr) => arr.id !== id);
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

export const CounterActions = counterSlice.actions;
export default store;
