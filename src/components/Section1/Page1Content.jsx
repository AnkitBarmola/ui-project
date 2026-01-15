import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1Content = () => {
  return (
    <div className='py-10 px-18 flex justify-between h-[90vh] w-full gap-7' >
       <LeftContent />
       <RightContent />
    </div>
  )
}

export default Page1Content
