import * as React from 'react'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import FormReimbursementItem from './FormReimbursementItem';

export interface IReimbursementFormItem {
  name: string,
  price: string,
  reason: string
}

interface IFormReimbursementItemsProps {
  fields: IReimbursementFormItem[],
  sum?: number
}

export const parseNumber = (num: string) => {
  const float = parseFloat(num)
  return (float && !isNaN(float)) ? float : 0
}

class FormReimbursementItems extends React.Component<IFormReimbursementItemsProps, object> {
  constructor(props: IFormReimbursementItemsProps) {
    super(props)
    this.addReimbursement = this.addReimbursement.bind(this)
  }

  public render() {
    const { fields, sum } = this.props

    return (
      <div className="items">
        <h3>
          Summa: {sum}
        </h3>
        {fields.map((item, index) => {
          return (
            <div key={index} className="item">
              <FormReimbursementItem item={item}/>
            </div>
          )
        })}
        <div>
          <button type="button" onClick={this.addReimbursement}>
            Lisää kulu
          </button>
        </div>
      </div>
    )
  }


  private addReimbursement = () => {
    this.props.fields.push()
  }
}

const selector = formValueSelector('newReimbursement')

export default connect(
  (state: object) => {
    const items: IReimbursementFormItem[] = selector(state, 'items')
    const sum = items ? items.reduce((prev, reimbursement) => reimbursement ? (prev + parseNumber(reimbursement.price)) : prev, 0) : 0
    return {
      sum
    }
  }
)(FormReimbursementItems)