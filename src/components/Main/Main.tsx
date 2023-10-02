import './main.sass';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducer.ts";
import {IItemData, requestDataAsync} from "../../store/requests/action.ts";
import {Chart} from "../Chart";

export function Main() {
    let choicePeriod = useSelector<RootState, string>(state => state.menu.choicePeriod)
    let choiceCurrency = useSelector<RootState, string>(state => state.menu.choiceCurrency)
    const dataList = useSelector<RootState, IItemData[]>(state => state.request.data)
    let isLoading = useSelector<RootState, boolean>(state => state.request.loading)
    const dispatch = useDispatch();

    console.log(dataList.map(item => new Date(item.time)))
    useEffect(() => {
      dispatch(requestDataAsync() as any)
    }, [choicePeriod, choiceCurrency]);

    return (
        <main className="main">
            <Chart data={dataList} />
        </main>
    );
}
