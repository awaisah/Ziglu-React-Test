import { FC, useState } from 'react';
import './style.css';
import { Asset } from '../../util/Assets';
import PriceTicker from '../PriceTicker';
import ToggleSwitch from '../ToggleSwitch';

interface IPricesBoxProps {

}

const PricesBox: FC<IPricesBoxProps> = ({ }) => {

  const [fromUSD, setFromUSD] = useState(true)
  
  return (
    <div className="container-prices-box">
      <ToggleSwitch enabled={fromUSD} setEnabled={setFromUSD} />
      {fromUSD ?
        <>
          <PriceTicker source={Asset.USD} destination={Asset.BTC} coinName="BTC/USD" />
          <PriceTicker source={Asset.USD} destination={Asset.ETH} coinName="BTC/ETH" />
          <PriceTicker source={Asset.USD} destination={Asset.ADA} coinName="BTC/ADA" />
        </> :
        <>
          <PriceTicker source={Asset.BTC} destination={Asset.USD} coinName="USD/BTC" />
          <PriceTicker source={Asset.ETH} destination={Asset.USD} coinName="USD/ETH" />
          <PriceTicker source={Asset.ADA} destination={Asset.USD} coinName="USD/ADA" />
        </>}
    </div>
  );
}

export default PricesBox;
