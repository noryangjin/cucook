import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  useCallback,
} from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module/index';
import { changeField, initialize, register } from '../../module/auth';

const RegisterForm = () => {
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }: RootState) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
  }));

  useEffect(() => {
    dispatch(initialize('register'));
  }, [dispatch]);

  useEffect(() => {
    if (auth) {
      console.log('auth', auth);
    }
    if (authError) {
      console.log('authError', authError);
    }
  }, [auth, authError]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      dispatch(changeField({ form: 'register', key: name, value }));
    },
    [dispatch]
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password, confirmPassword } = form;
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({ form: 'register', key: 'password', value: '' }));
      dispatch(
        changeField({ form: 'register', key: 'confirmPassword', value: '' })
      );
      return;
    }
    if ([username, password, confirmPassword].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }
    dispatch(register({ username, password }));
  };

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default RegisterForm;
