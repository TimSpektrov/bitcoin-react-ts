import './main.sass';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducer.ts";
import {requestDataAsync} from "../../store/requests/action.ts";

export function Main() {
    let choicePeriod = useSelector<RootState, string>(state => state.menu.choicePeriod)
    let choiceCurrency = useSelector<RootState, string>(state => state.menu.choiceCurrency)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(requestDataAsync() as any)
    }, [choicePeriod, choiceCurrency]);
    return (
        <main className="main">

        </main>
    );
}
