import { FastField } from 'formik'
import React from 'react'

const TextArea = (props) => {
    const {inputType} =props
  return (
    <FastField as={"textarea"} {...props} rows={6} className="form-control"/>
  )
}

export default TextArea