import './header.sass';
import {Filter} from "./Filter";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducer.ts";
import {currency, heading, period} from "../../constants/constantsMenu.ts";
import {changeCurrency, changeHeading, changePeriod} from "../../store/action.ts";

export function Header() {
let headingValue = useSelector<RootState, string>(state => state.choiceHeading)
let currencyValue = useSelector<RootState, string>(state => state.choiceCurrency)
let periodValue = useSelector<RootState, string>(state => state.choicePeriod)
  const dispatch = useDispatch()
  function handleHeading(value:string) {
    dispatch(changeHeading(value))
  }
  function handleCurrency(value:string) {
    dispatch(changeCurrency(value))
  }
  function handlePeriod(value:string) {
    dispatch(changePeriod(value))
  }

  return (
    <header className="header">
      <Filter options={heading} onSelect={handleHeading} selectedOption={headingValue} key={'heading'} />
      <Filter options={currency} onSelect={handleCurrency} selectedOption={currencyValue} key={'currency'} />
      <Filter options={period} onSelect={handlePeriod} selectedOption={periodValue} key={'period'} />
    </header>
  );
}
