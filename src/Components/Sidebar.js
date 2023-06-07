import React from 'react'
import ScheduleBetTime from './ScheduleBetTime'
import RightSidebar from './RightSidebar'
import MainContent from './MainContent'

export default function Sidebar() {
  return (
   <div className='flex justify-between'>
     <div><ScheduleBetTime /></div>
     <div><MainContent /></div>
     <div><RightSidebar /></div>
   </div>
  )
}
