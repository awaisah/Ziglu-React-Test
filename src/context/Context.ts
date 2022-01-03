import {createContext, Dispatch, SetStateAction} from 'react'
import {Bank} from '../util/bank'
import {MyPricer} from '../util/Pricer'
import {AssetExchange} from '../util/Exchange'

interface ContextState {
    bank: Bank | null,
    pricer: MyPricer | null,
    exchange: AssetExchange | null,
    val: number,
    setVal: Dispatch<SetStateAction<number>>
}

const Context = createContext({} as ContextState)

export default Context