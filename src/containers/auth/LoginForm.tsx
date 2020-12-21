import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  useCallback,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initialize, login } from '../../module/auth';
import { RootState } from '../../module/index';
import { check } from '../../module/user';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const LoginForm = ({ history }: RouteComponentProps<any>) => {
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const { form, authLogin, authError, user } = useSelector(
    ({ auth, user }: RootState) => ({
      form: auth.login,
      authLogin: auth.authLogin,
      authError: auth.authError,
      user: user.user,
    })
  );

  useEffect(() => {
    dispatch(initialize('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authLogin) {
      dispatch(check());
    }
    if (authError) {
      if (authError.response.status === 401) {
        setError('없는 계정 입니다.');
        return;
      }
    }
    return () => {
      setError(null);
    };
  }, [authLogin, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [history, user]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      dispatch(changeField({ form: 'login', key: name, value }));
    },
    [dispatch]
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = form;
    if ([username, password].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }
    dispatch(login({ username, password }));
  };

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginForm);
