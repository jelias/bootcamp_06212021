export const ADD_CAR_ACTION = 'ADD_CAR';
export const SAVE_CAR_ACTION = 'SAVE_CAR';
export const DELETE_CAR_ACTION = 'DELETE_CAR';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';

export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE';

export const DELETE_CAR_REQUEST_ACTION = 'DELETE_CAR_REQUEST';
export const DELETE_CAR_DONE_ACTION = 'DELETE_CAR_DONE';

export const createaRefreshCarsRequestAction = () => 
({ type: REFRESH_CARS_REQUEST_ACTION });

export const createaRefreshCarsDoneAction = (cars) => 
({ type: REFRESH_CARS_DONE_ACTION, cars });

export const refreshCars = () => {

    return (dispatch) => {

      dispatch(createaRefreshCarsRequestAction());

      return fetch("http://localhost:3060/cars")
        .then(res => res.json())
        .then(cars => dispatch(createaRefreshCarsDoneAction(cars)));

    };
};

export const createDeleteCarRequestAction = () =>
  ({ type: DELETE_CAR_REQUEST_ACTION });

export const createDeleteCarDoneAction = () =>
  ({ type: DELETE_CAR_DONE_ACTION });

export const deleteCar = carId => {
  
  return dispatch => {

    dispatch(createDeleteCarRequestAction());

    return fetch("http://localhost:3060/cars/" + encodeURIComponent(carId), {
      method: 'DELETE',
    })
      .then(() => dispatch(refreshCars()));

  }

}


export const createAddCarAction = car => ({
  type: ADD_CAR_ACTION,
  car,
});

export const createSaveCarAction = car => ({
  type: SAVE_CAR_ACTION,
  car,
});

// export const createDeleteCarAction = carId => ({
//   type: DELETE_CAR_ACTION,
//   carId,
// });

export const createEditCarAction = carId => ({
  type: EDIT_CAR_ACTION,
  carId,
});

export const createCancelCarAction = () => ({
  type: CANCEL_CAR_ACTION,
});
