import './header.sass';
import {Filter} from "./Filter";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {heading} from "../../constants/constantsMenu.ts";
import {changeCurrency, changeHeading, changePeriod} from "../../store/menu/action.ts";
import {FSYM as currencyOptions, PERIOD} from "../../constants/API.ts";



export function Header() {
let headingValue = useSelector<RootState, string>(state => state.menu.choiceHeading)
let currencyValue = useSelector<RootState, string>(state => state.menu.choiceCurrency)
let periodValue = useSelector<RootState, string>(state => state.menu.choicePeriod)

const periodOptions = PERIOD.map(item => item.name)

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
      <Filter options={currencyOptions} onSelect={handleCurrency} selectedOption={currencyValue} key={'currency'} />
      <Filter options={periodOptions} onSelect={handlePeriod} selectedOption={periodValue} key={'period'} />
    </header>
  );
}
