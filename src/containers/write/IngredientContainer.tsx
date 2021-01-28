import IngredientBox from '../../components/write/IngredientBox';
import { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../module/index';
import { changeField } from '../../module/write';
import { onChange, onSubmit, onRemove } from './event/TagIngredientEvent';

const IngredientContainer = () => {
  const [input, setInput] = useState<string>('');
  const [local, setLocal] = useState<Array<string>>([]);
  const dispatch = useDispatch();
  const { ingredients } = useSelector(({ write }: RootState) => ({
    ingredients: write.ingredients,
  }));

  useEffect(() => {
    ingredients && setLocal(ingredients);
  }, [ingredients]);

  const onChangeIngredient = useCallback(
    (ingredientValue) => {
      dispatch(changeField({ key: 'ingredients', value: ingredientValue }));
    },
    [dispatch]
  );

  const onChange_ = onChange(setInput);
  const onSubmit_ = onSubmit(
    local,
    input,
    setInput,
    setLocal,
    onChangeIngredient
  );
  const onRemove_ = onRemove(local, setLocal, onChangeIngredient);

  return (
    <IngredientBox
      localIngredients={local}
      onChange={onChange_}
      onSubmit={onSubmit_}
      onRemove={onRemove_}
      input={input}
    />
  );
};

export default IngredientContainer;
