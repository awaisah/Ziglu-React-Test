import { FC, useState } from 'react';
import './style.css';
import { Asset } from '../../util/Assets';
import PriceTicker from '../PriceTicker';
import ToggleSwitch from '../ToggleSwitch';

interface IPricesSectionProps {

}

const PricesSection: FC<IPricesSectionProps> = () => {

  const [fromUSD, setFromUSD] = useState(true)

  return (
    <>
      <h1>Prices</h1>
      <ToggleSwitch enabled={fromUSD} setEnabled={setFromUSD} text="Toggle USD to Coin" />
      <div className="container-prices-box">
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
    </>
  );
}

export default PricesSection;
