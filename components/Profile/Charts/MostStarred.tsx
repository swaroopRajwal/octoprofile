import React, { useState } from 'react';
import { Chart } from 'react-chartjs-2';
import { ChartWrapper } from './Helpers';

interface Props {
  repoData: any;
}

const MostStarred = ({repoData}: Props) => {
  // const data = {
  //   labels: langData.map((item:any) => item.label),
  //   datasets: [{
  //     label: 'label',
  //     data: langData.map((item:any) => item.value),
  //     backgroundColor: langData.map((item: any) => item.color),
  //     borderColor: '#231E23',
  //     borderWidth: 0.5,
  //   }]
  // }
  const [mostStarred, setMostStarred] = useState(repoData.sort((a:any, b:any) => b.stargazers_count - a.stargazers_count).slice(0, 5))
  // console.log(mostStarred);
  const data = {
    labels: mostStarred.map((item: any) => item.name),
    datasets: [{
      label: mostStarred.map((item: any) => item.name),
      // label: {display: false},
      data: mostStarred.map((item: any) => item.stargazers_count),
      backgroundColor: [  'rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(153, 102, 255, 0.7)', 'rgba(255, 159, 64, 0.7)'],
      borderColor: '#231E23',
      borderWidth: 0.5,
    }],
  }
  
  return(
    <ChartWrapper>
      <p className='title text-white font-bold'>Most Starred Repos</p>
      <div className='bg-white rounded-md pb-2 h-72 items-center flex sm:h-96 md:h-72 lg:h-96'>
        <Chart type='doughnut' data={data} />
      </div>
    </ChartWrapper>
  )
}
export default MostStarred;