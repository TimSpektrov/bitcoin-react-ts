import './chart.sass';
import {IItemData} from "../../store/requests/action.ts";
import {useEffect, useRef, useState} from "react";
import * as d3 from 'd3';

interface IChart {
  data: IItemData[]
}
export function Chart({data}: IChart ) {
  const svgRef = useRef();
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(400);

  useEffect(() => {
    // Очистите предыдущий график при изменении данных
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const x = d3.scaleTime()
      .domain(d3.extent(data, d => new Date(d.time)))
      .range([0, innerWidth]);

    const y = d3.scaleLinear()
      .domain([d3.min(data, d => d.close), d3.max(data, d => d.close)])
      .range([innerHeight, 0]);

    const xAxis = d3.axisBottom(x)
      // .ticks(6) // Указываем желаемое количество меток на оси x
      .tickFormat(d3.timeFormat('%H:%M:%S')); // Форматируем отображение даты и времени

    const yAxis = d3.axisLeft(y);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    g.append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${innerHeight})`);

    g.append('g')
      .call(yAxis);

    const line = d3.line()
      .x(d => x(new Date(d.time)))
      .y(d => y(d.close));

    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', line);
  }, [data, width, height]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
}
