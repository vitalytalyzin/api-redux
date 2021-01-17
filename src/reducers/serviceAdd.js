import { CHANGE_SERVICE_FIELD, CLEAR_SERVICE_FIELD } from '../actions/actionTypes';

const initialState = {
  name: '',
  price: '',
  id: '',
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD: {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    }
    case CLEAR_SERVICE_FIELD: {
      return { ...initialState };
    }
    default:
      return state;
  }
}
