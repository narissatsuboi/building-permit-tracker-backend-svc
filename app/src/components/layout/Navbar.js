import React from 'react'
import { Flex, Text, Link, NavLink } from 'theme-ui'
/** @jsxImportSource theme-ui */

const Navbar = () => {
  return (
    <Flex>
      <Flex bg='light' fontFamily='heading' sx={{ flex: 'initial', alignItems: 'center',
 }}>
        <Link href='/'>
          <Text
            sx={{
              pl: 5,
              pr: 5,
              color: 'orange',
              fontSize: 5,
              fontWeight: 'bold'
            }}
          >
            tracki
          </Text>
        </Link>
      </Flex>
      <Flex bg='light' sx={{ 
        flex: '1 1 auto',
        pt: 2
        }}>
        <NavLink href='/records' px={2}>
          Records List
        </NavLink>
        <NavLink href='/' px={2}>
          Dashboard
        </NavLink>
      </Flex>
      <Flex bg='light' sx={{ pr: 5, flex: '1 1 auto', flexDirection: 'row-reverse'}}>
        <NavLink href='/' p={2}>
          Log In
        </NavLink>
        <NavLink href='/' p={2}>
          Sign Up
        </NavLink>
      </Flex>
    </Flex>
  )
}
export default Navbar
