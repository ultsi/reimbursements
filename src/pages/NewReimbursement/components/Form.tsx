import * as React from 'react';
import { FieldArray, InjectedFormProps, reduxForm } from 'redux-form'
import './Form.css'
import FormReimbursementItems from './FormReimbursementItems';
import PersonalInfo from './PersonalInfo';

interface INewReimbursementFormState {
  page: string
}

class NewReimbursementForm extends React.Component<InjectedFormProps, INewReimbursementFormState> {
  constructor(props: InjectedFormProps) {
    super(props)
    this.next = this.next.bind(this);
    this.state = {
      page: 'personal-info'
    }
  }

  public render() {
    const { handleSubmit, pristine, invalid } = this.props
    console.log(this.props)
    const { page } = this.state
    return (
      <form onSubmit={handleSubmit}>
        {page === 'personal-info'
        ? (
          <>
            <PersonalInfo />
            <div>
              <button type="button" disabled={pristine || invalid} onClick={this.next('items')}>
                Seuraava
              </button>
            </div>
          </>
        ) : (
          <>
            <FieldArray name="items" component={FormReimbursementItems} />
            <div>
              <button type="button" disabled={pristine || invalid} onClick={this.next('check')}>
                Valmis
              </button>
            </div>
          </>
        )
        }
        
      </form>
    )
  }

  private next(page: string) {
    return () => {
      this.setState({
        page
      })
    }
  }
}

export default reduxForm({
  destroyOnUnmount: false,
  form: 'newReimbursement'
})(NewReimbursementForm)