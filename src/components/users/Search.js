// External Imports
// JavaScript
import { ErrorMessage, Field, Form, Formik } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'

const Search = ({ getUsers }) => {
  return (
    <Formik
      initialValues={{ usernameInput: '' }}
      validationSchema={Yup.object({
        usernameInput: Yup.string().required('Please, Type a Username')
      })}
      onSubmit={({ usernameInput }, { setSubmitting }) => {
        getUsers(usernameInput)
        setSubmitting(false)
      }}
    >
      <Form>
        <Field type='text' name='usernameInput' id='usernameInput' />
        <ErrorMessage name='usernameInput'>{msg => <ErrorParagraph>{msg}</ErrorParagraph>}</ErrorMessage>
        <input type='submit' value='Search' />
      </Form>
    </Formik>
  )
}

// Prop Types
Search.propTypes = {
  getUsers: PropTypes.func.isRequired
}

// Styled Components
const ErrorParagraph = styled.p`
  color: #FF0000;
`

export default Search
