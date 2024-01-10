import * as yup from 'yup';

const minDepositAmount = 1;
const minWithdrawAmount = 10;

export const schemaDeposit = yup.object({
  amount: yup.number().required().min(minDepositAmount),
});

export const schemaWithdraw = yup.object({
  amount: yup.number().required().min(minWithdrawAmount),
});

export type DepositValue = yup.InferType<typeof schemaDeposit>;
export type WithdrawValue = yup.InferType<typeof schemaWithdraw>;
