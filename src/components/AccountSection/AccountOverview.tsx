import { FC, useContext, useEffect } from 'react';
import './style.css';
import BankContext from '../../context/BankContext'
import { Asset } from '../../util/Assets';

interface IAccountOverviewProps {
    name: String,
    balance: number
}

const AccountOverview: FC<IAccountOverviewProps> = ({name, balance}) => {
  return (
    <>
      <div className="container-account-overview">
        <h2>{name}</h2>
        <h3 className="price-title">{balance}</h3>
      </div>
    </>
  );
}

export default AccountOverview;
