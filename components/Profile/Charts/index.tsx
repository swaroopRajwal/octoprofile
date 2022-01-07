import React from 'react';
import { ILangStats } from '../../../interfaces';
import Language from './Language';
import 'chart.js/auto';
import MostStarred from './MostStarred';

interface Props {
  langData: ILangStats[];
  repoData: any;
}

const Charts = ({langData, repoData}: Props) => {
  return(
    <div className='grid gap-5 md:grid-cols-2'>
      <Language langData={langData}/>
      <MostStarred repoData={repoData}/>
    </div>
  )
}
export default Charts;