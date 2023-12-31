import './main.sass';
import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IItemData, requestDataAsync} from "../../store/requests/action";
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
import {RootState} from "../../store";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
);

export function Main() {
    const choicePeriod = useSelector<RootState, string>(state => state.menu.choicePeriod)
    const choiceCurrency = useSelector<RootState, string>(state => state.menu.choiceCurrency)
    const dataList = useSelector<RootState, IItemData[]>(state => state.request.data)
    const isLoading = useSelector<RootState, boolean>(state => state.request.loading)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(requestDataAsync() as any)
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
                borderWidth: 2,
                tension: 0.2,

                fill: false, // Не заполнять область под линией
            },
            {
                type: 'bar' as const,
                label: 'Low',
                data: low,
                backgroundColor: '#474a23', // Цвет заполнения столбцов
                base: dataList[0]?.open,
            },
            {
                type: 'bar' as const,
                label: 'High',
                data: high,
                backgroundColor: '#473a33', // Цвет заполнения столбцов
                base: dataList[0]?.open,
            },
        ]
    }

    const options = {
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: false, // Если хотите, чтобы график "Low" начинался не с нуля, измените на true
                beginAtZero: false,
            },
        },
    };
    const lineRef = useRef()

    return (
        <main className="main">
            {isLoading ? 'loading...' : <Chart type='bar' data={chartData} options={options} ref={lineRef}/>}
        </main>
    );
}
