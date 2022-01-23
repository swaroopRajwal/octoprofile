import { Chart } from 'react-chartjs-2';
import React from 'react';
import { ChartWrapper } from './Helpers';
import { ILangStats } from '../../../interfaces';

interface Props { 
  langData: ILangStats[] | undefined;
}

const Language = ({langData}: Props) => {
  const data = {
    labels: (langData || []).map((item:ILangStats) => item.label),
    datasets: [{
      label: 'label',
      data: (langData || []).map((item:ILangStats) => item.value),
      backgroundColor: (langData || []).map((item: ILangStats) => item.color),
      borderColor: '#231E23',
      borderWidth: 0.5,
    }],
  }
  return(
    <ChartWrapper>
      <p className='title text-white font-bold'>Language Stats</p>
      <div className='bg-white rounded-md pb-2 h-72 items-center flex sm:h-96 md:h-72 lg:h-96'>
        <Chart type='pie' data={data} />
      </div>
    </ChartWrapper>
  )
}
export default Language;