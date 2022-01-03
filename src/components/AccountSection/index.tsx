import { FC, useContext, useEffect } from 'react';
import './style.css';
import Context from '../../context/Context'
import { Asset } from '../../util/Assets';
import AccountOverview from './AccountOverview';

interface IAccountSectionProps {

}

const AccountSection: FC<IAccountSectionProps> = () => {

  const {bank} = useContext(Context)

  useEffect(() => {
    console.log(bank!.balances)
  }, [bank!.balances])

  const accounts = () => {
    return bank!.assetAccounts.map((asset) => {
      return <AccountOverview name="USD" balance={bank!.getBalance(asset)} />
    })
  }

  return (
    <>
      <h1>Accounts</h1>
      
      <div className="container-acount-section">
        {accounts()}
      </div>
    </>
  );
}

export default AccountSection;
