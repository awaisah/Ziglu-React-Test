import { FC } from 'react';

interface IAccountOverviewProps {
  name: String,
  balance: number
}

const AccountOverview: FC<IAccountOverviewProps> = ({ name, balance }) => {
  return (
    <div className="mt-3 border-2 rounded-lg border-gray-200 p-5 text-center">
      <div className="">
        <h2 className="mb-3 font-semibold text-2xl">{name}</h2>
        <h3 className="text-lg font-semibold">{balance}</h3>
      </div>
    </div>
  );
}

export default AccountOverview;
