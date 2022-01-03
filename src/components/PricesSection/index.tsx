import { FC, useState } from 'react';
import { Asset } from '../../util/Assets';
import PriceTicker from '../PriceTicker';
import ToggleSwitch from '../ToggleSwitch';

interface IPricesSectionProps {

}

const PricesSection: FC<IPricesSectionProps> = () => {

  const [inUSD, setInUSD] = useState(true)

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold mb-2">Prices</h1>
      <ToggleSwitch enabled={inUSD} setEnabled={setInUSD} text="Showing In USD" />
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 xl:gap-x-8">
        {inUSD ?
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
    </div>
  );
}

export default PricesSection;
