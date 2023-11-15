import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Home from '@/components/Home'
import Operation from '@/components/Operation'
import Price from '@/components/Price'
import Service from '@/components/Service'
import Warehouse from '@/components/Warehouse'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header />
      <Home />
      <Price />
      <Service />
      <Operation />
      <Warehouse />
      <Footer />
    </div>
  )
}
