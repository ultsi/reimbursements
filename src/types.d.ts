
export interface IReimbursementItem {
  id?: number,
  name: string,
  price: number,
  reason: string
}

export interface IReimbursement {
  id: number,
  date: string,
  status: string, // 'PENDING', 'APPROVED', 'DENIED'
  imbursee: string,
  iban: string,
  items: IReimbursementItem[]
}

export interface IAction {
  type: string,
  reimbursement: IReimbursement
}