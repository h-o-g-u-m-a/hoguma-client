import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, LineChart } from '@toast-ui/react-chart';
import '@toast-ui/chart/dist/toastui-chart.min.css';

export const FeelingChart = () => {
  const feelingChart = useSelector((state) => state.character.feelingChart);
  const data = {
    categories: ['감정'],
    series: [
      {
        name: '슬픔',
        data: feelingChart['슬픔'],
      },
      {
        name: '기쁨',
        data: feelingChart['기쁨'],
      },
      {
        name: '분노',
        data: feelingChart['분노'],
      },
    ],
  };

  const options = {
    chart: {
      width: 'auto',
      height: 'auto',
      format: '1,000',
      animation: {
        duration: 500,
      },
    },
    yAxis: {
      title: 'Month',
    },
    xAxis: {
      title: 'Amount',
      min: 0,
      max: 9000,
      suffix: '$',
    },
    legend: {
      visible: true,
      showCheckbox: false,
      align: 'right',
    },
    exportMenu: {
      visible: false,
    },
    series: {
      showLabel: true,
      selectable: false,
      clockwise: false,
      dataLabels: {
        visible: true,
        anchor: 'outer',
      },
      radiusRange: {
        inner: '40%',
        outer: '100%',
      },
    },
  };

  return (
    <div>
      <PieChart
        data={data}
        options={options}
        style={{ width: '60vw', height: '40vh' }}
      />
    </div>
  );
};

export const AmountChart = ({ amount }) => {
  const amountChart = useSelector((state) => state.character.amountChart);
  const data = {
    categories: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
      '32',
      '33',
      '34',
      '35',
      '36',
      '37',
      '38',
      '39',
      '40',
      '41',
      '42',
      '43',
      '44',
      '45',
      '46',
      '47',
      '48',
      '49',
      '50',
      '51',
      '52',
      '53',
      '54',
      '55',
      '56',
      '57',
      '58',
      '59',
      '60',
      '61',
      '62',
      '63',
      '64',
      '65',
      '66',
      '67',
      '68',
      '69',
      '70',
      '71',
      '72',
      '73',
      '74',
      '75',
      '76',
      '77',
      '78',
      '79',
      '80',
      '81',
      '82',
      '83',
      '84',
      '85',
      '86',
      '89',
      '90',
      '91',
      '92',
      '93',
      '94',
      '95',
      '96',
      '97',
      '99',
      '100',
      '101',
      '102',
      '103',
      '104',
      '105',
      '106',
      '108',
      '109',
      '110',
      '111',
      '112',
      '113',
      '114',
      '115',
      '116',
      '117',
      '118',
      '119',
      '120',
      '121',
      '122',
      '123',
      '124',
      '125',
      '126',
      '127',
      '128',
      '129',
      '130',
      '131',
      '132',
      '133',
      '134',
      '135',
      '136',
      '138',
      '139',
      '140',
      '141',
      '142',
      '143',
      '144',
      '145',
      '146',
      '147',
      '148',
      '149',
      '150',
      '151',
      '152',
      '153',
      '154',
      '155',
      '156',
      '157',
      '158',
      '159',
      '160',
      '161',
      '162',
      '163',
      '164',
      '165',
      '166',
      '167',
    ],
    series: [
      {
        name: '분량',
        data: amountChart,
      },
    ],
  };

  const options = {
    chart: {
      width: 'auto',
      height: 'auto',
      // title: 'Monthly Revenue',
      format: '1,000',
    },
    yAxis: {
      title: 'Month',
      scale: {
        min: 0,
        max: 119,
        stepSize: 10,
      },
    },
    xAxis: {
      title: 'Amount',
      min: 0,
      max: 9000,
      suffix: '$',
    },
    series: {
      showLabel: true,
    },
    legend: {
      visible: false,
      showCheckbox: false,
    },
    exportMenu: {
      visible: false,
    },
  };

  return (
    <>
      <LineChart
        data={data}
        options={options}
        style={{ width: '60vw', height: '40vh' }}
      />
    </>
  );
};
