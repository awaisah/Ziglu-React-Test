import {createContext} from 'react'
import {Bank} from '../util/bank'

interface BankContextState {
    bank: Bank | null
}

const BankContext = createContext({} as BankContextState)

export default BankContext