import { ChangeEvent, useState, useCallback, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../module/index';
import Ask from '../../components/ask/Ask';
import * as askAPI from '../../lib/api/ask';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { changeMessage } from '../../module/message';

const AskContainer = ({ history }: RouteComponentProps) => {
  const [values, setValues] = useState<{
    username: string;
    guestEmail: string;
    title: string;
    content: string;
  }>({
    username: '',
    guestEmail: '',
    title: '',
    content: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }: RootState) => ({
    user: user.user,
  }));

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    },
    [values]
  );

  const onClickBack = useCallback(() => {
    history.goBack();
    setError('');
    dispatch(changeMessage(''));
  }, [history, dispatch]);

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const func = () => {
        return [
          setTimeout(() => dispatch(changeMessage('')), 3500),
          setError(''),
          setLoading(false),
          setValues({
            ...values,
            username: '',
            title: '',
            guestEmail: '',
            content: '',
          }),
        ];
      };
      const { username, guestEmail, title, content } = values;

      if ([username, guestEmail, title, content].includes('')) {
        return setError('빈칸을 모두 채워주세요');
      }
      await askAPI
        .askSend({ username, guestEmail, title, content })
        .then(() => {
          dispatch(changeMessage('메일이 전송되었습니다. 감사합니다.'));
          func();
        })
        .catch((e) => {
          dispatch(
            changeMessage('전송에 실패하였습니다. 나중에 다시 시도해 주세요.')
          );
          func();
        });
    },
    [values, dispatch]
  );

  const onClickSend = useCallback(() => {
    const { username, guestEmail, title, content } = values;
    if ([username, guestEmail, title, content].includes('')) {
      return null;
    }
    setLoading(true);
  }, [values]);

  return (
    <Ask
      user={user}
      values={values}
      onChange={onChange}
      onClickBack={onClickBack}
      onSubmit={onSubmit}
      onClickSend={onClickSend}
      error={error}
      loading={loading}
    />
  );
};

export default withRouter(AskContainer);
