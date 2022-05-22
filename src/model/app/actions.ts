import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CurrencyState} from "../../entities/currency-entity";

const initialState: CurrencyState = {
    list: [
        {
            name: 'UZS',
            value: 0,
            child: [
                {
                    name: 'USD',
                    value: 0
                }
            ]
        }
    ],
    correctCurrency: {}
}

export const currency = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addCurrency: (state) => {
            state.list.push({
                name: 'UZS',
                value: 0,
                child: [
                    {
                        name: 'USD',
                        value: 0
                    }
                ]
            })
        },
        addChild: (state, action: PayloadAction<number>) => {
            state.list[action.payload].child.push({
                name: 'USD',
                value: 0
            })
        },
        deleteChild: (state, action: PayloadAction<{ currency: number, child: number }>) => {
            state.list[action.payload.currency].child.splice(action.payload.child, 1)
        },
        editParentCurrency: (state, action: PayloadAction<{ currency: number, currencyName: string }>) => {
            state.list[action.payload.currency].name = action.payload.currencyName
        },
        editChildCurrency: (state, action: PayloadAction<{ currency: number, child: number, currencyName: string }>) => {
            console.log('editChild')
            state.list[action.payload.currency].child[action.payload.child].name = action.payload.currencyName
        },
        editCurrencyValue: (state, action: PayloadAction<{ currency: number, value: number }>) => {
            state.list[action.payload.currency].value = action.payload.value
        },
        editChildCurrencyValue: (state, action: PayloadAction<{ currency: number, child: number, value: number }>) => {
            state.list[action.payload.currency].child[action.payload.child].value = action.payload.value
        },
        changeCurrency: (state, action: PayloadAction<{ [key: string]: { code: string, value: number } }>) => {
            state.correctCurrency = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    addChild,
    addCurrency,
    deleteChild,
    editChildCurrency,
    editParentCurrency,
    editChildCurrencyValue,
    editCurrencyValue,
    changeCurrency
} = currency.actions

export default currency.reducer