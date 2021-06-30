// export const ADD_CAR_ACTION = 'ADD_CAR';
// export const SAVE_CAR_ACTION = 'SAVE_CAR';
// export const DELETE_CAR_ACTION = 'DELETE_CAR';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';

export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE';

export const ADD_CAR_REQUEST_ACTION = 'ADD_CAR_REQUEST';
export const ADD_CAR_DONE_ACTION = 'ADD_CAR_DONE';

export const DELETE_CAR_REQUEST_ACTION = 'DELETE_CAR_REQUEST';
export const DELETE_CAR_DONE_ACTION = 'DELETE_CAR_DONE';

export const SAVE_CAR_REQUEST_ACTION = 'SAVE_CAR_REQUEST';
export const SAVE_CAR_DONE_ACTION = 'SAVE_CAR_DONE';

export const createSaveCarRequestAction = () =>
({ type: SAVE_CAR_REQUEST_ACTION });

export const createSaveCarDoneAction = car =>
({ type: SAVE_CAR_DONE_ACTION, car, });

export const saveCar = (car) => {

  return (dispatch) => {

    dispatch(createSaveCarRequestAction());

    return fetch ("http://localhost:3060/cars/" + encodeURIComponent(car.id),{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    })
      .then(() => dispatch(refreshCars()));

  }
  
}


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

export const createAddCarRequestAction = () =>
  ({ type: ADD_CAR_REQUEST_ACTION });

export const createAddCarDoneAction = car =>
  ({ type: ADD_CAR_DONE_ACTION, car, });

export const addCar = car => {
  
  return dispatch => {
    dispatch(createAddCarRequestAction());

    return fetch("http://localhost:3060/cars", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    })
      .then (() => dispatch(refreshCars()));
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

export const createEditCarAction = carId => ({
  type: EDIT_CAR_ACTION,
  carId,
});

export const createCancelCarAction = () => ({
  type: CANCEL_CAR_ACTION,
});
