import { useCallback } from 'react';
import useBasisCash from './useBasisCash';
import { useTransactionAdder } from '../state/transactions/hooks';
import { Bank } from '../basis-cash';

const useRedeem = (bank: Bank) => {
  const basisCash = useBasisCash();
  const addTransaction = useTransactionAdder();

  const handleRedeem = useCallback(async () => {
    const tx = await basisCash.exit(bank.contract);
    addTransaction(tx, { summary: `Redeem ${bank.contract}` });
  }, [bank, basisCash, addTransaction]);

  return { onRedeem: handleRedeem };
};

export default useRedeem;
