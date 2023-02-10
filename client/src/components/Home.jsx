import React, { useState } from "react"
import axios from "axios"
import {Link, Navlink, useNavigate} from "react-router-dom"

const Home = () => {
    const [allPermits, setAllPermits] = useState([])
    const [allProjects, setAllProjects] = useState([])

    const navigate = useNavigate()

    const logout = (e) => {
        
    }

    return(
        <div>
            <h1>Cool future features to come</h1>
        </div>
    )
}

export default Home