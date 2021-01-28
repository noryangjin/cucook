import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TagBox from '../../components/write/TagBox';
import { RootState } from '../../module/index';
import { changeField } from '../../module/write';
import { onChange, onSubmit, onRemove } from './event/TagIngredientEvent';

const TagBoxContainer = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector(({ write }: RootState) => ({
    tags: write.tags,
  }));

  const [input, setInput] = useState<string>('');
  const [local, setLocal] = useState<Array<string>>([]);

  useEffect(() => {
    tags && setLocal(tags);
  }, [tags]);

  const onChangeTags = useCallback(
    (tagValue) => {
      dispatch(changeField({ key: 'tags', value: tagValue }));
    },
    [dispatch]
  );

  const onChange_ = onChange(setInput);
  const onSubmit_ = onSubmit(local, input, setInput, setLocal, onChangeTags);
  const onRemove_ = onRemove(local, setLocal, onChangeTags);

  return (
    <TagBox
      input={input}
      localTags={local}
      onChange={onChange_}
      onSubmit={onSubmit_}
      onRemove={onRemove_}
    />
  );
};

export default TagBoxContainer;
