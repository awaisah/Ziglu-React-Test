import { FC, useContext } from 'react';
import './style.css';
import Context from '../../context/Context'
import { Asset, getAssetName } from '../../util/Assets'

interface IPreviousTradesProps {

}

const PreviousTrades: FC<IPreviousTradesProps> = () => {

    const { exchange } = useContext(Context)

    return (
        <>
            <h1>History</h1>
            <div className="container-previous-trades">
                {exchange!.trades.length > 0 ?
                    <table>
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                >
                                    Source
                                </th>
                                <th
                                    scope="col"
                                >
                                    Destination
                                </th>
                                <th
                                    scope="col"
                                >
                                    Executed At
                                </th>
                                <th
                                    scope="col"
                                >
                                    Price
                                </th>
                                <th
                                    scope="col"
                                >
                                    Volume
                                </th>
                                <th>
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                exchange!.trades.map((trade) => {
                                    console.log(trade)
                                    return (
                                        <>
                                            <tr>
                                                <td>{getAssetName(trade.Source)}</td>
                                                <td>{getAssetName(trade.Destination)}</td>
                                                <td>{trade.ExecutedAt.toDateString()} {trade.ExecutedAt.toTimeString()}</td>
                                                <td>{trade.Price}</td>
                                                <td>{trade.Volume}</td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    :
                    <h3>No Trade History</h3>}
            </div>
        </>
    );
}

export default PreviousTrades;
