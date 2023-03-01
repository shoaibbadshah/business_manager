import React,{useState} from "react";
import * as Yup from "yup";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ForgotPasswordScreen } from "../screens";
// import { forgotPassword } from "../redux/actions/login";

const validationSchema = function (values) {
  return Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
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
  findFirstError("forgotPasswordForm", (fieldName) => {
    return Boolean(errors[fieldName]);
  });
};

const ForgotPasswordContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    email: "",
  };

  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    setSubmitting(false);
    history.push({
      pathname: "/resetPassword",
      state: { email: values.email },
    });
    // dispatch(forgotPassword(values, history, setIsLoading));
  };
  return (
    <ForgotPasswordScreen
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      validateForm={validateForm}
      validate={validate(validationSchema)}
      isLoading={isLoading}
    />
  );
};

export default ForgotPasswordContainer;
