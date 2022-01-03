import { FC, useEffect, useState, useContext } from 'react';
import { Asset } from '../../util/Assets';
import Context from '../../context/Context';

interface IPriceTickerProps {
  source: Asset
  destination: Asset, 
  coinName: String
}

const PriceTicker: FC<IPriceTickerProps> = ({source, destination, coinName}) => {
  const [price, setPrice] = useState(0.0)
  const [showUpdated, setShowUpdated] = useState(false)

  const {pricer} = useContext(Context)

  // This useEffect is run whenever the source or destination changes.
  // Change the showUpdated state so the colour changes for 500ms
  useEffect(() => {
    setShowUpdated(true)
    setTimeout(() => {
      setShowUpdated(false)
    }, 500)
  }, [price])

  useEffect(() => {
    setPrice(0.0)
    const updatePrice = () => {
      pricer!.getCoinPrice(source, destination)
        .then((val) => {
          setPrice(val.Price)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    // Create a timeout which refreshes the price every 10 seconds
    updatePrice() 
    const interval = setInterval(updatePrice, 10000);

    return () => {
      clearInterval(interval)
    }
  }, [source, destination])

  return (
    <div className="mt-3 border-2 rounded-lg border-gray-200 p-5 text-center">
      <h2 className="mb-3 font-semibold text-2xl">{coinName}</h2>
      <h3 className={"text-lg font-semibold" + (showUpdated ? " text-green-300" : "")}>{price}</h3>
    </div>
  );
}

export default PriceTicker;
