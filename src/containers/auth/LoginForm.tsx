import {
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

const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }: RootState) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
  }));

  useEffect(() => {
    dispatch(initialize('login'));
  }, [dispatch]);
  useEffect(() => {
    if (auth) {
      console.log('auth', auth);
    }
    if (authError) {
      console.log('auth', authError);
    }
  }, [auth, authError]);

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

export default LoginForm;
