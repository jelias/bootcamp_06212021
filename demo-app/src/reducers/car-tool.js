import { combineReducers } from 'redux';

import { REFRESH_CARS_DONE_ACTION,
  ADD_CAR_ACTION, SAVE_CAR_ACTION,
  EDIT_CAR_ACTION, CANCEL_CAR_ACTION,
} from '../actions/car-tool';

export const carsReducer = (cars = [], action) => {

  switch (action.type) {
    case REFRESH_CARS_DONE_ACTION:
      return action.cars;

    case ADD_CAR_ACTION:
      return [
        ...cars,
        {
          ...action.car,
          id: Math.max(...cars.map(c => c.id), 0) + 1,
        },
      ]
    case SAVE_CAR_ACTION:
      const newCars = [...cars];
      const carIndex = newCars.findIndex(c => c.id === action.car.id);
      newCars[carIndex] = action.car;
      return newCars;
    // case DELETE_CAR_ACTION:
    //   return cars.filter(c => c.id !== action.carId);
    default:
      return cars;
  }


};

export const editCarIdReducer = (editCarId = -1, action) => {

  if (action.type === EDIT_CAR_ACTION) {
    return action.carId;
  }

  if ([
    ADD_CAR_ACTION, SAVE_CAR_ACTION, CANCEL_CAR_ACTION
  ].includes(action.type)) {
    return -1;
  }

  return editCarId; 
};

export const carToolReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
});