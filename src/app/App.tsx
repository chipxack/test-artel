import {BoxCenter} from "../ui";
import {useAppDispatch, useAppSelector} from "../hooks/app";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import {addCurrency} from "../model/app/actions";
import {CurrencyParent} from "./organisms/currency-parent";

function App() {
    const dispatch = useAppDispatch()
    const dataList = useAppSelector((state) => state?.currency?.list)

    return (
        <BoxCenter>
            {
                dataList?.map((item, key) =>
                    <CurrencyParent data={item} key={key} parentKey={key}/>
                )
            }
            <button className='green' onClick={() => {dispatch(addCurrency())}}>
                <FontAwesomeIcon icon={faCirclePlus} />
            </button>
        </BoxCenter>
    );
}

export default App;
