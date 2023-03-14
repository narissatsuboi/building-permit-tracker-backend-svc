import { Outlet, NavLink, ScrollRestoration } from 'react-router-dom'
import Navbar from '../components/nav/Navbar'
/** @jsxImportSource theme-ui */
// const RootLayout = (props) => {
//   return (
//     <div
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         // set this to `minHeight: '100vh'` for full viewport height
//         // minHeight: 256
//         minHeight: '100vh'

//       }}
//     >
//       <header
//         sx={{
//           width: '100%'
//         }}
//       >
//         Header
//         {/* <Navbar></Navbar> */}
//       </header>
//       <main
//         sx={{
//           width: '100%',
//           flex: '1 1 auto'
//         }}
//       >
//         {props.children}
//       </main>
//       <Outlet />
//       <footer
//         sx={{
//           width: '100%'
//         }}
//       >
//         Footer
//       </footer>
//       <ScrollRestoration />
//     </div>
//   )
// }

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
      <header
        sx={{
          width: '100%'
        }}
      >
        Header
      </header>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto'
        }}
      >
        Main
      </main>
      <footer
        sx={{
          width: '100%',
        }}
      >
        Footer
      </footer>
    </div>
  )
}

export default RootLayout
