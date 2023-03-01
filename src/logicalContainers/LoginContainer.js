import React,{useState} from "react";
import * as Yup from "yup";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { LoginScreen } from "../screens";
// import { login } from "../redux/actions/login";

const validationSchema = function (values) {
  return Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    password: Yup.string()
      .min(6, `Password has to be at least ${6} characters!`)
      // .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, 'Password must contain: numbers, uppercase and lowercase letters\n')
      .required("Password is required"),
  });
};

const validate = (getValidationSchema) => {
  return (values) => {
    const validationSchema = getValidationSchema(values);
    try {
      validationSchema.validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      return getErrorsFromValidationError(error);
    }
  };
};

const getErrorsFromValidationError = (validationError) => {
  const FIRST_ERROR = 0;
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    };
  }, {});
};

const findFirstError = (formName, hasError) => {
  const form = document.forms[formName];
  for (let i = 0; i < form.length; i++) {
    if (hasError(form[i].name)) {
      form[i].focus();
      break;
    }
  }
};

const validateForm = (errors) => {
  findFirstError("loginForm", (fieldName) => {
    return Boolean(errors[fieldName]);
  });
};

const LoginContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    setSubmitting(false);
    history.replace("/dashboard");
    // dispatch(login(values, history, setIsLoading));
  };
  const handleForgetPassword = () => {
    debugger
    history.push('/forgotPassword');
  }
  return (
    <LoginScreen
      isLoading={isLoading}
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      validateForm={validateForm}
      validate={validate(validationSchema)}
      handleForgetPassword={handleForgetPassword}
    />
  );
};

export default LoginContainer;
