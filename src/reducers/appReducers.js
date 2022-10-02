import { useReducer, useEffect } from "react";

const initialState = {
  count: 0,
  color: "",
  loading: true,
  users: [],
};

const reducer = (state, action) => {
  if (action.type == "INCREMENT") {
    const payload = action.payload;
    return {
      ...state,
      count: state.count + payload,
    };
  }
  if (action.type == "DECREMENT") {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  if (action.type == "CHANGE_COLOR") {
    const handleColor = () => {
      const randColor = colors[Math.floor(Math.random() * colors.length)];
      const myColor = { ...state, color: randColor };
      return myColor;
    };
    return handleColor();
  }
  if (action.type == "FETCH_DATA") {
    const payload = action.payload;
    return {
      ...state,
      users: payload,
    };
  }
  if (action.type == "LOADING") {
    return {
      ...state,
      loading: false,
    };
  }
};

const colors = ["red", "green", "blue", "pink", "orange", "yellow", "tomato"];

export const useAppReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = response.json();
      dispatch({ type: "FETCH_DATA", payload: await data });
      dispatch({ type: "LOADING" });
    };

    fetchApi();
  }, []);

  return [state, dispatch];
};
