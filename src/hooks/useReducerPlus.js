import { useReducer } from "react";

export default function useReducerPlus(initialStateObject = {}) {
  const [state, dispatch] = useReducer((state, update) => {
    if (update) {
      return {
        ...state,
        ...update,
      };
    }
  }, initialStateObject);

  return [state, dispatch];
}
