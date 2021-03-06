import React, { FC, ReactNode } from "react";

interface ChartWrapperProps {
  children: ReactNode
}

export const ChartWrapper: FC<ChartWrapperProps> = ({children}) => {
  return(
    <div className='bg-teal p-5 rounded-md w-72 sm:w-96 md:w-72 lg:w-96'>
      {children}
    </div>
  )
};
