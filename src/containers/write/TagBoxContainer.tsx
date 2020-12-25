import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TagBox from '../../components/write/TagBox';
import { RootState } from '../../module/index';
import { changeField } from '../../module/write';

const TagBoxContainer = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state: RootState) => state.write.tags);

  const onChangeTags = useCallback(
    (tagValue) => {
      dispatch(changeField({ key: 'tags', value: tagValue }));
    },
    [dispatch]
  );

  return <TagBox tags={tags} onChangeTags={onChangeTags} />;
};

export default TagBoxContainer;
