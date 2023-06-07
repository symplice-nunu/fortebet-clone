import React from 'react'
import ScheduleBetTime from './ScheduleBetTime'
import RightSidebar from './RightSidebar'

export default function Sidebar() {
  return (
   <div className='flex justify-between'>
     <div><ScheduleBetTime /></div>
     <div><RightSidebar /></div>
   </div>
  )
}
