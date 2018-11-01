
export interface IReimbursementItems {
  id: number,
  name: string,
  reason: string,
  price: number
}

export interface IReimbursement {
  id: number,
  date: string,
  status: string, // 'PENDING', 'APPROVED', 'DENIED'
  imbursee: string,
  iban: string,
  items: IReimbursementItems
}

export interface IAction {
  type: string,
  reimbursement: IReimbursement
}