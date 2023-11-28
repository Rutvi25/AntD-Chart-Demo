import { Bar } from '@ant-design/charts';

const BarChart = ({
  data,
}: {
  data: { status: string | number; value: string | number }[];
}) => {
  const config = {
    data,
    xField: 'value',
    yField: 'status',
    isStack: true,
    seriesField: 'status',
    verticle: true,
  };
  return <Bar {...config} />;
};

export default BarChart;
