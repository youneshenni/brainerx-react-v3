export const initialState = {
  isGreen: false,
  filter: "",
};

export default function reducer(state, { type, payload }) {
  switch (type) {
    case "changeColor": {
      return {
        ...state,
        isGreen: !state.isGreen,
      };
    }
    case "setFilter": {
      return { ...state, filter: payload };
    }
    default:
      state;
  }
}
