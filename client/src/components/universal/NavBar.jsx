import React, { useEffect, useState } from "react"
import axios from "axios"
import {Link, Navlink, useNavigate} from "react-router-dom"

const NavBar = () => {
    const [searchInput, setSearchInput] = useEffect('')
    const [allPermits, setAllPermits] = useState([])

    useEffect(() => {
        axios.get('https://localhost:8000', {withCredentials:true}) //Need to set up credentials for logout in the backend & determine api route for logout
        .then((res) => {
            console.log(res)
            setAllPermits(res.data) //verify its res.data in json response
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    }
    if (searchInput.length > 0) {
        allPermits.filter((permit) => {
            return permit.name.match(searchInput)  //Verify Json response matches with return
        })
    }

    const logout = (e) => {
        axios.get('http://localhost:8000',{withCredentials:true}) //Need to set up credentials for logout in the backend & determine api route for logout
            .then((res)=>{
                console.log('logged out')
                navigate("/logreg") //"/logreg" will be the directory of the login pag
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    return(
        <div className="d-flex justify-content-around">
            <div id="left-section" className="d-flex justify-content-around">
                <p>Home</p>
                <p>Projects</p>
                <p>Settings</p>
                <link onClick={logout} className="danger">Log Out</link>
            </div>
            <div>
                <img src="" alt="" />
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <input 
                    type="search"
                    placeholder="Search a Permit"
                    onChange={handleSearch}
                    value={searchInput}
                    className="form-control"
                />
            </div>
        </div>
    )
}

export default NavBar