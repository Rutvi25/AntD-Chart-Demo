import { Pie } from '@ant-design/charts';

const DonutChart = ({
  data,
}: {
  data: { status: string | number; value: string | number }[];
}) => {
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'status',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export default DonutChart;
