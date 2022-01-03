import { FC, useContext, useEffect } from 'react';
import Context from '../../context/Context'
import { getAssetName } from '../../util/Assets';
import AccountOverview from './AccountOverview';

interface IAccountSectionProps {

}

const AccountSection: FC<IAccountSectionProps> = () => {

  const { bank } = useContext(Context)

  useEffect(() => {
  }, [bank!.balances])

  const accounts = () => {
    return bank!.assetAccounts.map((asset) => {
      return <AccountOverview name={getAssetName(asset)} balance={bank!.getBalance(asset)} key={asset} />
    })
  }

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold mb-2">Accounts</h1>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4 xl:gap-x-8">
        {accounts()}
      </div>
    </div>
  );
}

export default AccountSection;
