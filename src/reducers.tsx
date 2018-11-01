import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {
  ADD_REIMBURSEMENT,
  APPROVE_REIMBURSEMENT,
  DELETE_REIMBURSEMENT,
  DENY_REIMBURSEMENT
} from './actions'

import { IAction, IReimbursement } from './types';
​
function reimbursements(state = [], action: IAction): IReimbursement[] {
  switch (action.type) {
    case ADD_REIMBURSEMENT:
      return [
        ...state,
        {
          ...action.reimbursement
        }
      ]
    case APPROVE_REIMBURSEMENT:
      return state.map((reimbursement: IReimbursement) => {
        if (reimbursement.id === action.reimbursement.id) {
          return Object.assign({}, reimbursement, {
            status: 'APPROVED'
          })
        }
        return reimbursement
      })
    case DELETE_REIMBURSEMENT:
      return state.filter((reimbursement: IReimbursement) => {
        if (reimbursement.id === action.reimbursement.id) {
          return Object.assign({}, reimbursement, {
            status: 'DELETED'
          })
        }
        return reimbursement
      })
    case DENY_REIMBURSEMENT:
      return state.filter((reimbursement: IReimbursement) => {
        if (reimbursement.id === action.reimbursement.id) {
          return Object.assign({}, reimbursement, {
            status: 'DENIED'
          })
        }
        return reimbursement
      })
    default:
      return state
  }
}
​
const reimbursementApp = combineReducers({
  form: formReducer,
  reimbursements
})
​
export default reimbursementApp