import './main.sass';
import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducer.ts";
import {IItemData, requestDataAsync} from "../../store/requests/action.ts";
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

export function Main() {
    let choicePeriod = useSelector<RootState, string>(state => state.menu.choicePeriod)
    let choiceCurrency = useSelector<RootState, string>(state => state.menu.choiceCurrency)
    const dataList = useSelector<RootState, IItemData[]>(state => state.request.data)
    // let isLoading = useSelector<RootState, boolean>(state => state.request.loading)
    const dispatch = useDispatch();

    // console.log(dataList.map(item => new Date(item.time)))
    useEffect(() => {
      dispatch(requestDataAsync())
    }, [choicePeriod, choiceCurrency]);

    const labels = dataList.map(item => (new Date(item.time)).toLocaleTimeString())
    const close = dataList.map(item => item.close)
    const high = dataList.map(item => item.high)
    const low = dataList.map(item => item.low)

    const chartData = {
        labels,
        datasets: [
            {
                type: 'line' as const,
                label: 'Close',
                data: close,
                borderColor: '#fff',
                pointStyle: 'line',
                borderWidth: 1,
                tension: 0.2,
            },
            {
                type: 'bar' as const,
                label: 'High',
                data: high,
                backgroundColor: 'rgb(255, 99, 132)',
                tension: 0.2,
            },
            {
                type: 'bar' as const,
                label: 'Low',
                data: low,
                backgroundColor: 'rgb(75, 192, 192)',
            },
        ]}

    const options = {
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    }
    const lineRef = useRef()

    return (
        <main className="main">
            <Chart type='bar' data={chartData} options={options} ref={lineRef}/>
        </main>
    );
}
