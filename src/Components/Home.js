import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar  from './Navbar'
import Sidebar from './Sidebar'
export default function Home() {
  return (
   <div>
     <dic><Header /></dic>
     <div><Navbar /></div>
     <div><Sidebar /></div>
     <div className=''><Footer /></div>
   </div>
  )
}
