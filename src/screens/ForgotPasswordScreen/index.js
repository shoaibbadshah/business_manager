import React from "react";
import CIcon from "@coreui/icons-react";

import {
  CInvalidFeedback,
  CRow,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from "@coreui/react";

import { Formik } from "formik";

import { ClipLoader } from 'react-spinners';

import './style.css';

const ForgotPassword = ({ handleSubmit, initialValues, validate, isLoading }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="c-app c-default-layout flex-row align-items-center">
            <CContainer>
              <CRow className="justify-content-center">
                <CCol md="8">
                  <CCardGroup>
                    <CCard className="p-4">
                      <CCardBody>
                        <CForm
                          onSubmit={handleSubmit}
                          noValidate
                          name="forgotPasswordForm"
                        >
                          <h1>Forgot Password</h1>
                          <p className="text-muted">Enter your email where we will send a reset password link</p>
                          <CInputGroup className="mb-4">
                            <CInputGroupPrepend>
                              <CInputGroupText>
                                <CIcon name="cib-mail-ru" />
                              </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Email"
                              autoComplete="email"
                              // valid={!errors.email}
                              invalid={touched.email && !!errors.email}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                            />
                            <CInvalidFeedback>{errors.email}</CInvalidFeedback>
                          </CInputGroup>
                          <CInvalidFeedback>{errors.email}</CInvalidFeedback>
                            <div className="submitBtn" >
                              <CRow>
                                <CButton
                                  className="submit px-6"
                                  onClick={handleSubmit}
                                >
                                  {isLoading ? <ClipLoader size={20} color="white" loading /> : 'Submit'}
                                </CButton>
                              </CRow>
                            </div>
                        </CForm>
                      </CCardBody>
                    </CCard>
                    </CCardGroup>
                </CCol>
              </CRow>
            </CContainer>
          </div>
        )}
      </Formik>
    </>
  );
};

export default ForgotPassword;
