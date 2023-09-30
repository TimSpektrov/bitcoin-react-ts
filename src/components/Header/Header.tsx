import './header.sass';
import {Filter} from "./Filter";
import {useState} from "react";

const heading = ['График общей ликвидации']
const currency = ['Bitcoin']
const period = ['Весь', 'За 5 лет', 'За год', 'За месяц', 'За неделю', 'За сутки', 'За час']

export function Header() {
  const [headingValue, setHeadingValue] = useState(heading[0])
  const [currencyValue, setCurrencyValue] = useState(currency[0])
  const [periodValue, setPeriodValue] = useState(period[0])

  function handleHeading(value:string) {
    setHeadingValue(value)
  }
  function handleCurrency(value:string) {
    setCurrencyValue(value)
  }
  function handlePeriod(value:string) {
    setPeriodValue(value)
  }

  return (
    <header className="header">
      <Filter options={heading} onSelect={handleHeading} key={'heading'} />
      <Filter options={currency} onSelect={handleCurrency} key={'currency'} />
      <Filter options={period} onSelect={handlePeriod} key={'period'} />
    </header>
  );
}
