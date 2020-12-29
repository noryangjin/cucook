import { useCallback, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module/index';
import { changeField } from '../../module/write';
import Category from '../../components/write/Category';

const CategoryContainer = () => {
  const dispatch = useDispatch();
  const { category } = useSelector(({ write }: RootState) => ({
    category: write.category,
  }));

  const onChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      dispatch(changeField({ key: 'category', value: value }));
    },
    [dispatch]
  );

  return <Category category={category} onChange={onChange} />;
};

export default CategoryContainer;
