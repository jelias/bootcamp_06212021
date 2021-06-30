import { useEffect, useMemo } from 'react';

import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { refreshCars, deleteCar, addCar, saveCar,
  
  createSaveCarAction, 
  createEditCarAction, createCancelCarAction,
  
} from '../actions/car-tool';

import { ToolHeader } from "../components/ToolHeader";
import { CarTable } from "../components/CarTable";
import { CarForm } from "../components/CarForm";

export const CarToolContainer = () => {

  const cars = useSelector(state => state.cars);
  const editCarId = useSelector(state => state.editCarId);

  const dispatch = useDispatch();

  const carTableActions = useMemo (() => bindActionCreators({
    onSaveCar: saveCar,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,

    refreshCars: refreshCars,
    onDeleteCar: deleteCar,
  }, dispatch), [dispatch]);

  const carFormActions = bindActionCreators({
    onSubmitCar: addCar,
  }, useDispatch());

  useEffect(() => {
    carTableActions.refreshCars();
  }, [carTableActions])

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId} {...carTableActions} />
      <CarForm buttonText="Add Car" {...carFormActions} />
    </>
  );
};
