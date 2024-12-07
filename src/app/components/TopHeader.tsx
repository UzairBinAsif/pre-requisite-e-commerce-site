import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const TopHeader = () => {
  return (
    <div className='flex items-center justify-center bg-[#000000] w-screen h-12'>
        <div className="flex justify-between w-[859px] h-6">
            <div className="flex w-[550px] h-full gap-2">
                <p className='font-normal leading-[21px] text-sm text-[#FAFAFA]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <p className='font-semibold underline leading-[24px] text-[14px] w-[68px] h-full text-[#FAFAFA]'>ShopNow</p>
            </div>
            <div className='flex items-center w-[78px] h-full gap-[5px] text-[#FAFAFA]'>English <FaChevronDown className="down" /></div>
        </div>
    </div>
  )
}

export default TopHeader