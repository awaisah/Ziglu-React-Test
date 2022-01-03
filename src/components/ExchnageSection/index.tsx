import { FC, useState, useContext } from 'react';
import './style.css';
import { Asset } from '../../util/Assets';
import Context from '../../context/Context'

interface IExchangeSectionProps {

}

const ExchangeSection: FC<IExchangeSectionProps> = () => {

    const {exchange, setVal, val} = useContext(Context)

    const [source, setSource] = useState(Asset.USD)
    const [destination, setDestination] = useState(Asset.USD)
    const [amount, setAmount] = useState(0)

    const submitForm = (event: React.SyntheticEvent) => {
        event.preventDefault()
        console.log(source, destination, amount)
        exchange!.exchange(source, destination, amount)
        .then((trade) => {
            console.log(trade)
            setVal(val+1)
            return
        })
        .catch((error) => {
            alert(error)
        })
    }

    return (
        <>
            <h1>Exchange</h1>
            <div className="container-exchange-section">
                <form className="form" onSubmit={submitForm}>
                    <label>
                        Source:
                        <select id="source" onChange={(e) => {setSource(e.target.value as Asset)}}>
                            <option value={Asset.USD}>USD</option>
                            <option value={Asset.BTC}>Bitcoin</option>
                            <option value={Asset.ETH}>Ethereum</option>
                            <option value={Asset.ADA}>Cordano</option>
                        </select>
                    </label>
                    <label>
                        Destination:
                        <select id="destination" onChange={(e) => {setDestination(e.target.value as Asset)}}>
                            <option value={Asset.USD}>USD</option>
                            <option value={Asset.BTC}>Bitcoin</option>
                            <option value={Asset.ETH}>Ethereum</option>
                            <option value={Asset.ADA}>Cordano</option>
                        </select>
                    </label>
                    <label>
                        Amount:
                        <input type="number" step="0.1" name="amount" onChange={(e) => {setAmount(e.target.valueAsNumber)}} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}

export default ExchangeSection;
