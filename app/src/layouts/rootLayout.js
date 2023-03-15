import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

/** @jsxImportSource theme-ui */
const RootLayout = () => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // set this to `minHeight: '100vh'` for full viewport height
        // minHeight: 256,
        minHeight: '100vh'
      }}
    >
      <Navbar></Navbar>
      <main
        sx={{
          pl: 5,
          width: '100%',
          flex: '1 1 auto'
        }}
      >
        Landing Page
      </main>
      
      <Footer></Footer>
    </div>
  )
}

export default RootLayout
