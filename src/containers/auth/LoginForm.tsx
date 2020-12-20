import { useEffect, ChangeEvent, FormEvent, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initialize } from '../../module/auth';
import { RootState } from '../../module/index';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }: RootState) => ({ form: auth.login }));

  useEffect(() => {
    dispatch(initialize('login'));
  }, [dispatch]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      dispatch(changeField({ form: 'login', key: name, value }));
    },
    [dispatch]
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
