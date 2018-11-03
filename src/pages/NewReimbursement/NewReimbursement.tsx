import * as React from 'react';
import Form from './components/Form';
import './NewReimbursement.css';


export default class NewReimbursement extends React.Component {

  public render() {
    return (
      <div>
        <p>Luo tässä uusi kulukorvaus.</p>
        <Form onSubmit={this.submit} />
      </div>
    )
  }

  private submit = (formValues: object) => {
    console.log(formValues)
  }
}