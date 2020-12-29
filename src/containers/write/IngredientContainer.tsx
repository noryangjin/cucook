import IngredientBox from '../../components/write/IngredientBox';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../module/index';
import { changeField } from '../../module/write';

const IngredientContainer = () => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector(
    (state: RootState) => state.write.ingredients
  );

  const onChangeIngredient = useCallback(
    (ingredientValue) => {
      dispatch(changeField({ key: 'ingredients', value: ingredientValue }));
    },
    [dispatch]
  );

  return (
    <IngredientBox
      ingredients={ingredients}
      onChangeIngredient={onChangeIngredient}
    />
  );
};

export default IngredientContainer;
