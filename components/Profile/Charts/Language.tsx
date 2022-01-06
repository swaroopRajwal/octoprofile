import { Chart } from 'react-chartjs-2';
import React from 'react';
import { ChartWrapper } from './Helpers';
import { ILangStats } from '../../../interfaces';

interface Props { 
  langData: ILangStats[];
}

const Language = ({langData}: Props) => {
  // console.log(langData);
  const data = {
    labels: langData.map((item:any) => item.label),
    datasets: [{
      label: 'label',
      data: langData.map((item:any) => item.value),
      backgroundColor: langData.map((item: any) => item.color),
      borderColor: '#231E23',
      borderWidth: 0.5,
    }]
  }
  return(
    <ChartWrapper>
      <p className='title text-white font-bold'>Language Stats</p>
      <div className='bg-white p-2 rounded-md'>
        <Chart type='pie' data={data}/>
      </div>
    </ChartWrapper>
  )
}
export default Language;