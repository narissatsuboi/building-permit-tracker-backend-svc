import { Link } from 'theme-ui'

/** @jsxImportSource theme-ui */
const Footer = () => {
  return (
    <footer
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        p: 2,
        bg: 'light',
      }}
    >
      <div sx={{ p: 2 }}>©tracki 2023</div>
      <Link to='/' sx={{ p: 2 }}>
        Support
      </Link>
      <Link to='/' sx={{ p: 2 }}>
        Privacy Policy
      </Link>
      <Link to='/' sx={{ p: 2 }}>
        About
      </Link>
    </footer>
  )
}
export default Footer
