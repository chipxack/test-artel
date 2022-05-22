import {CurrencyStateList} from "../../entities/currency-entity";
import {useEffect} from "react";
import axios from "axios";
import {useAppDispatch} from "../app";
import {changeCurrency, editChildCurrencyValue} from "../../model/app/actions";


export const useCurrencyHooks = (data: CurrencyStateList, parentKey: number) => {
    const dispatch = useAppDispatch()

    const apiKey = 'xIclxV88PO82UuK4BXygx8Y0v6DbWRiym8dgh9vv'
    useEffect(() => {
        axios.get(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${data.name}&currencies=USD,RUB,UZS,EUR`)
            .then(response => {
                dispatch(changeCurrency(response.data.data))
            })
    }, [data.name]);

}