import {CurrencyBlock} from "../../components/change-currency";
import {addChild} from "../../model/app/actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {CurrencyBox} from "../atoms";
import {CurrencyStateList} from "../../entities/currency-entity";
import {useAppDispatch} from "../../hooks/app";
import {useCurrencyHooks} from "../../hooks/currency";

type Props = {
    data: CurrencyStateList,
    parentKey: number
}

export const CurrencyParent = ({data, parentKey}: Props) => {
    const dispatch = useAppDispatch()
    useCurrencyHooks(data, parentKey)

    return (
        <CurrencyBox>
            <CurrencyBlock parentValue={data.value} child={false} index={parentKey} currencyIndex={parentKey} name={data.name} value={data.value}/> =
            {
                data.child.map((childItem, index) =>
                    <CurrencyBlock parentValue={data.value} key={index} child={true} currencyIndex={parentKey} index={index} name={childItem.name} value={childItem.value}/>
                )
            }
            <button className='green' onClick={() => {dispatch(addChild(parentKey))}}>
                <FontAwesomeIcon icon={faCirclePlus} />
            </button>
        </CurrencyBox>
    )
}