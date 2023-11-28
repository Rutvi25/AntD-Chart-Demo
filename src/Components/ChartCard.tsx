import { Select } from 'antd';
import { useState } from 'react';
import BarChart from './Charts/BarChart';
import PieChart from './Charts/PieChart';
import DonutChart from './Charts/DonutChart';

// const data = [
//   ['In Review', 1],
//   ['IN QA', 1],
//   ['On Hold', 2],
//   ['Done', 11],
//   ['Dev Done', 12],
//   ['In progress', 19],
//   ['Open', 68],
//   ['Closed', 175],
// ];

const data: {
  wid: string;
  STATUSOBJ: (string | number)[][];
  STATUSCOLOUR: string[];
  TTOTAL: number;
  PROJECT_ID: string;
} = {
  wid: 'task_count_688906000053351557',
  STATUSOBJ: [
    ['In Review', 1, '688906000053351557_status_688906000018658369'],
    ['IN QA', 1, '688906000053351557_status_688906000044497725'],
    ['On Hold', 2, '688906000053351557_status_688906000014695191'],
    ['Done', 11, '688906000053351557_status_688906000031853289'],
    ['Dev Done', 12, '688906000053351557_status_688906000048751516'],
    ['In progress', 20, '688906000053351557_status_688906000009371355'],
    ['Open', 68, '688906000053351557_status_688906000008476068'],
    ['Closed', 175, '688906000053351557_status_688906000008476071'],
  ],
  STATUSCOLOUR: [
    'gray',
    '#000',
    'red',
    'green',
    '#8cbabb',
    'orange',
    'purple',
    'lightBlue',
  ],
  TTOTAL: 290,
  PROJECT_ID: '688906000053351557',
};
const ChartCard = () => {
  const [chartType, setChartType] = useState('pie');

  const chartData = data.STATUSOBJ.map(([status, value]) => ({
    status,
    value,
  }));
  return (
    <div>
      <Select
        placeholder='Select a person'
        optionFilterProp='children'
        onChange={(e) => setChartType(e)}
        value={chartType}
        options={[
          {
            value: 'bar',
            label: 'bar',
          },
          {
            value: 'pie',
            label: 'pie',
          },
          {
            value: 'donut',
            label: 'donut',
          },
        ]}
      />
      {chartType === 'bar' && <BarChart data={chartData} />}
      {chartType === 'pie' && (
        <PieChart colors={data.STATUSCOLOUR} data={chartData} />
      )}
      {chartType === 'donut' && <DonutChart data={chartData} />}
    </div>
  );
};

export default ChartCard;
