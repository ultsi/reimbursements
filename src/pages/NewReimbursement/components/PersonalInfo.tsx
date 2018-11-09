import * as React from 'react';
import { Field } from 'redux-form';

const required = (value: string) => value ? undefined : 'Kenttä ei voi olla tyhjä.'

const renderField = (props: any) => {
  const { input, placeholder, type, meta: { touched, error, warning } } = props
  return (
    <>
      <input {...input} placeholder={touched ? (error || warning) : placeholder} type={type} className={touched && ((error && 'error') || (warning && 'warning'))}/>
    </>
  )
}

export default () => {
  return (
    <div className="personal-info">
      <div className="field">
        <label htmlFor="name">Nimi:</label>
        <Field
            name="name"
            component={renderField}
            type="text"
            placeholder="Nimi"
            validate={[required]}
          />
      </div>
      <div className="field">
        <label htmlFor="number">Puh. numero:</label>
        <Field
            name="number"
            component={renderField}
            type="text"
            placeholder="Puh. numero"
            validate={[required]}
          />
      </div>
      <div className="field">
        <label htmlFor="iban">Tilinumero:</label>
        <Field
            name="iban"
            component={renderField}
            type="text"
            placeholder="FI12 3456 7890 1234 56"
            validate={[required]}
          />
      </div>
    </div>
  )
}