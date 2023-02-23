import React from 'react'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
interface Props {
  children?: React.ReactNode
}
function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
