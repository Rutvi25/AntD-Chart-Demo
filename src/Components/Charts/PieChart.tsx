import { G2, Pie } from '@ant-design/charts';

const PieChart = ({
  data,
  colors,
}: {
  data: { status: string | number; value: string | number }[];
  colors: string[];
}) => {
  const { registerTheme } = G2;

  registerTheme('custom-theme', {
    colors10: colors,
  });
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'status',
    radius: 0.8,
    label: {
      type: 'inner',
      offset: '-10%',
      content: '{percentage}',
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
    theme: 'custom-theme',
  };
  return <Pie {...config} />;
};

export default PieChart;
