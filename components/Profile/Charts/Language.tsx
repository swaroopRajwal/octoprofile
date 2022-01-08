import { Chart } from 'react-chartjs-2';
import React from 'react';
import { ChartWrapper } from './Helpers';
import { ILangStats } from '../../../interfaces';

interface Props { 
  langData: ILangStats[];
}

const Language = ({langData}: Props) => {
  const data = {
    labels: langData.map((item:any) => item.label),
    datasets: [{
      label: 'label',
      data: langData.map((item:any) => item.value),
      backgroundColor: langData.map((item: any) => item.color),
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