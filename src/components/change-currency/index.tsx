import React, {useEffect} from "react";
import {CurrencyBox} from './atoms'
import {useAppDispatch, useAppSelector} from "../../hooks/app";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {
    deleteChild,
    editChildCurrency,
    editChildCurrencyValue,
    editCurrencyValue,
    editParentCurrency
} from "../../model/app/actions";

type Props = {
    name: string,
    value: number,
    child: boolean,
    index: number,
    currencyIndex: number,
    parentValue: number
}

export const CurrencyBlock = ({name, value, index, child, currencyIndex, parentValue}: Props) => {
    const dispatch = useAppDispatch()
    const correctCurrency = useAppSelector((state) => state?.currency?.correctCurrency)
    useEffect(() => {
        if(child && correctCurrency && correctCurrency[name]){
            dispatch(editChildCurrencyValue({currency: currencyIndex, child: index, value: correctCurrency[name].value}))
        }
    }, [name, correctCurrency])

    return (
        <CurrencyBox>
            <select
                value={name}
                onChange={(e) => {
                    child ?
                        dispatch(editChildCurrency({
                            currency: currencyIndex,
                            child: index,
                            currencyName: e.target.value
                        })) :
                        dispatch(editParentCurrency({currency: currencyIndex, currencyName: e.target.value}))
                }}>
                <option value="USD">USD</option>
                <option value="RUB">RUB</option>
                <option value="UZS">UZS</option>
                <option value="EUR">EUR</option>
            </select>
            <input
                onChange={
                    (e) =>
                        !child && dispatch(editCurrencyValue({currency: currencyIndex, value: Number(e.target.value)}))
                }
                disabled={child}
                value={child ? (value * parentValue) : value}
            />
            {
                child && index > 0 &&
                <button className='red' onClick={() => {
                    dispatch(deleteChild({currency: currencyIndex, child: index}))
                }}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            }
        </CurrencyBox>
    )
}