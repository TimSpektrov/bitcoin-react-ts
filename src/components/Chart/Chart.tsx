import './chart.sass';
import {IItemData} from "../../store/requests/action.ts";
import {useRef} from "react";


interface IChart {
  data: IItemData[]
}
export function Chart({data}: IChart ) {

  console.log(data)
  // const labels = data.map(item => (new Date(item.time)).toLocaleTimeString())


  return <Chart type='bar' data={lineData} options={options} ref={lineRef}/>
}
