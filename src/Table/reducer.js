export const initialState = {
  editingRow: null,
  editingUser: null,
};

export default function tableReducer(state, { type, payload }) {
  switch (type) {
    case "editUser": {
      return {
        ...state,
        editingUser: {
          ...state.editingUser,
          [payload.key]: payload.value,
        },
      };
    }
    case "clearEditingUser": {
      return {
        ...state,
        editingUser: null,
        editingRow: null,
      };
    }
    case "setEditingRow": {
      return {
        ...state,
        editingRow: payload.id,
        editingUser: payload,
      };
    }
    default:
      return state;
  }
}
