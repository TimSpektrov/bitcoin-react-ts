import './main.sass';
import axios from "axios";
import {useEffect, useState} from "react";

export function Main() {
const [value, setValue] = useState([])

    console.log(value)
  useEffect(() => {
    // Создаем функцию для отправки GET-запроса к CoinGecko API
      try {
        axios
            .get('https://api.coingecko.com/api/v3/coins/bitcoin')
            .then(res => {
                setValue(res.data.tickers)
                // setValue(res.data)
            })
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }


    // Вызываем функцию при загрузке компонента
  }, []);
  return (

      <main className="main">

      </main>
  );
}
