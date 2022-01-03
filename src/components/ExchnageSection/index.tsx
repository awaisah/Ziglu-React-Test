import { FC, useState, useContext } from 'react';
import { Asset } from '../../util/Assets';
import Context from '../../context/Context'

interface IExchangeSectionProps {

}

const ExchangeSection: FC<IExchangeSectionProps> = () => {

  const { exchange, setVal, val } = useContext(Context)

  const [source, setSource] = useState(Asset.USD)
  const [destination, setDestination] = useState(Asset.USD)
  const [amount, setAmount] = useState(0)

  const [errorMessage, setErrorMessage] = useState("")

  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setErrorMessage("")
    exchange!.exchange(source, destination, amount)
      .then(() => {
        setVal(val + 1)
        return
      })
      .catch((error) => {
        setErrorMessage(error.message)
      })
  }

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold mb-2">Exchange</h1>
      <div className="container-exchange-section">
        <form className="form" onSubmit={submitForm}>
          {errorMessage && <p className="text-red-500 text-center mt-3 mb-3 font-semibold text-lg">{errorMessage}</p>}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                Source
              </label>
              <select
                name="source"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                onChange={(e) => { setSource(e.target.value as Asset) }}
              >
                <option value={Asset.USD}>USD</option>
                <option value={Asset.BTC}>Bitcoin</option>
                <option value={Asset.ETH}>Ethereum</option>
                <option value={Asset.ADA}>Cordano</option>
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                Destination
              </label>
              <select
                name="destination"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                onChange={(e) => { setDestination(e.target.value as Asset) }}
              >
                <option value={Asset.USD}>USD</option>
                <option value={Asset.BTC}>Bitcoin</option>
                <option value={Asset.ETH}>Ethereum</option>
                <option value={Asset.ADA}>Cordano</option>
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <input
                type="number"
                step="0.05"
                name="amount"
                id="amount"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => { setAmount(e.target.valueAsNumber) }}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <button
                type="submit"
                className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-3"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExchangeSection;
