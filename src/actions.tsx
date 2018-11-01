/*
 * action types
 */
​
export const ADD_REIMBURSEMENT = 'ADD_REIMBURSEMENT'
export const APPROVE_REIMBURSEMENT = 'APPROVE_REIMBURSEMENT'
export const DENY_REIMBURSEMENT = 'DENY_REIMBURSEMENT'
export const DELETE_REIMBURSEMENT = 'REMOVE_REIMBURSEMENT'
​
/*
 * action creators
 */
​
export function addReimbursement(reimbursement: object) {
  return { type: ADD_REIMBURSEMENT, reimbursement }
}
​
export function approveReimbursement(reimbursement: object) {
  return { type: APPROVE_REIMBURSEMENT, reimbursement }
}
​
export function denyReimbursement(reimbursement: object) {
  return { type: DENY_REIMBURSEMENT, reimbursement }
}
​
export function deleteReimbursement(reimbursement: object) {
  return { type: DELETE_REIMBURSEMENT, reimbursement }
}