import React from "react";
import CIcon from "@coreui/icons-react";

import './style.css'

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
import { ClipLoader } from "react-spinners";

const LoginForm = ({
  handleSubmit,
  initialValues,
  validate,
  handleForgetPassword,
  isLoading,
}) => {
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
                          name="loginForm"
                        >
                          <h1>Login</h1>
                          <p className="text-muted">Sign In to your account</p>
                          <CInputGroup className="mb-4">
                            <CInputGroupPrepend>
                              <CInputGroupText>
                                <CIcon name="cil-user" />
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
                          <CInputGroup className="mb-4">
                            <CInputGroupPrepend>
                              <CInputGroupText>
                                <CIcon name="cil-lock-locked" />
                              </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput
                              type="password"
                              name="password"
                              id="password"
                              placeholder="Password"
                              autoComplete="password"
                              // valid={!errors.password}
                              invalid={touched.password && !!errors.password}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                            />
                            {/* <CInvalidFeedback>Required password containing at least: number, uppercase and lowercase letter, 8 characters</CInvalidFeedback> */}
                            <CInvalidFeedback>
                              {errors.password}
                            </CInvalidFeedback>
                          </CInputGroup>
                          <CRow>
                            <CCol xs="6">
                              <CButton
                                type='submit'
                                className="px-4 login-form-submit"
                                onClick={handleSubmit}
                              >
                                {isLoading ? (
                                  <ClipLoader size={20} color="white" loading />
                                ) : (
                                  "Login"
                                )}
                              </CButton>
                            </CCol>
                            <CCol xs="6" className="text-right">
                              <CButton
                                style={{color:"#1365B6"}}
                                color="link"
                                className="px-0"
                                onClick={handleForgetPassword}
                              >
                                Forgot password?
                              </CButton>
                            </CCol>
                          </CRow>
                        </CForm>
                      </CCardBody>
                    </CCard>
                    <CCard
                      className="text-white p-4 d-md-down-none"
                      style={{backgroundColor:"#1365B6"}}
                      stylvalidateForme={{ width: "44%" }}
                    >
                      <CCardBody className="text-center">
                        <div>
                          {/*<img*/}
                          {/*  src="https://res.cloudinary.com/techling/image/upload/v1644405934/ChexAI_1_thaztb.png"*/}
                          {/*  width="100px"*/}
                          {/*  height="30px"*/}
                          {/*  alt="Chex.AI"*/}
                          {/*/>*/}
                          <p style={{fontSize: 30, color:'white'}}>RC</p>
                          <p style={{textAlign:"center", marginTop:"30px"}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          </p>
                          {/* <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link> */}
                        </div>
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

export default LoginForm;
