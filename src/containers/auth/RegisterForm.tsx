import React, { useEffect, ChangeEvent, useCallback } from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module/index';
import { changeField, initialize } from '../../module/auth';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }: RootState) => ({
    form: auth.register,
  }));

  useEffect(() => {
    dispatch(initialize('register'));
  }, [dispatch]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      dispatch(changeField({ form: 'register', key: name, value }));
    },
    [dispatch]
  );

  return <AuthForm type="register" form={form} onChange={onChange} />;
};

export default RegisterForm;
