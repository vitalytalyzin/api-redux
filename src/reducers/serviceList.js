import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE, UPDATE_SERVICE } from '../actions/actionTypes';

const initialState = [
  { id: nanoid(), name: 'Замена стекла', price: 21000 },
  { id: nanoid(), name: 'Замена дисплея', price: 25000 },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name, price: Number(price) }];
    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter(service => service.id !== id);
    case UPDATE_SERVICE:
      const { id: serviceId, name: serviceName, price: servicePrice } = action.payload;
      return state.map(item => {
        if (item.id === serviceId) {
          return {...item, name: serviceName, price: Number(servicePrice)}
        }
        return item;
      });
    default:
      return state;
  }
}
