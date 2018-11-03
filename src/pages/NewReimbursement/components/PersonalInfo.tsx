import * as React from 'react';
import { Field } from 'redux-form';

export default () => {
  return (
    <div className="personal-info">
      <div className="field">
        <label htmlFor="name">Nimi:</label>
        <Field
            name="name"
            component="input"
            type="text"
            placeholder="Nimi"
          />
      </div>
      <div className="field">
        <label htmlFor="number">Puh. numero:</label>
        <Field
            name="number"
            component="input"
            type="text"
            placeholder="Puh. numero"
          />
      </div>
      <div className="field">
        <label htmlFor="iban">Tilinumero:</label>
        <Field
            name="iban"
            component="input"
            type="text"
            placeholder="FI12 3456 7890 1234 56"
          />
      </div>
    </div>
  )
}