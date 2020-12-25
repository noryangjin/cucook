import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../module/index';
import Editor from '../../components/write/Editor';
import { initialize, changeField } from '../../module/write';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }: RootState) => ({
    title: write.title,
    body: write.body,
  }));

  const onChange = useCallback(
    (payload: { key: string; value: any | string }) => {
      dispatch(changeField(payload));
    },
    [dispatch]
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return <Editor title={title} body={body} onChange={onChange} />;
};

export default EditorContainer;
