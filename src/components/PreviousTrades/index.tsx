import { FC, useContext } from 'react';
import Context from '../../context/Context'
import { Asset, getAssetName } from '../../util/Assets'

interface IPreviousTradesProps {

}

const PreviousTrades: FC<IPreviousTradesProps> = () => {

  const { exchange } = useContext(Context)

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold mb-2">History</h1>
      <div className="container-previous-trades">
        {exchange!.trades.length > 0 ?
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Source
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Destination
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Executed At
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
                        exchange!.trades.map((trade, index) => {
                          return (
                            <>
                              <tr>
                                <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-bold">{index+1}</td>
                                <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{getAssetName(trade.Source)}</td>
                                <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{getAssetName(trade.Destination)}</td>
                                <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{trade.ExecutedAt.toDateString()} {trade.ExecutedAt.toTimeString()}</td>
                                <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{trade.Price}</td>
                                <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{trade.Volume}</td>
                              </tr>
                            </>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          :
          <h3>No Trade History</h3>}
      </div>
    </div>
  );
}

export default PreviousTrades;
