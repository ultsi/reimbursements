import * as React from 'react';
import './NewReimbursement.css';
import NewReimbursementForm from './NewReimbursementForm';


export default class NewReimbursement extends React.Component {

  public render() {
    return (
      <div>
        <p>Luo tässä uusi kulukorvaus.</p>
        <NewReimbursementForm onSubmit={this.submit} />
      </div>
    )
  }

  private submit = (formValues: object) => {
    console.log(formValues)
  }
}