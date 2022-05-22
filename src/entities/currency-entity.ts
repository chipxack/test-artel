interface CurrencyStateListChild {
    name: string,
    value: number
}

export interface CurrencyStateList {
    name: string,
    value: number
    child: CurrencyStateListChild[]
}

export interface CurrencyState {
    list: CurrencyStateList[]
    correctCurrency: {
        [key: string]: {
            code: string
            value: number
        }
    }
}