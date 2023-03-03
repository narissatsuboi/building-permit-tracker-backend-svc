import { Outlet, NavLink, ScrollRestoration } from 'react-router-dom'
import Navbar from '../components/nav/Navbar'
import { Flex, Text, Box, Link } from "rebass";

const RecordsLayout = () => {
    return (
        <div>
            <Text 
            p={4} 
            fontSize={4}>
            Records
            </Text>
        </div>
    )
}

export default RecordsLayout 
