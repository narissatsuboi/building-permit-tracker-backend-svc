import React, { useEffect, useState } from "react"
import axios from "axios"
import {Link, Navlink, useNavigate} from "react-router-dom"
import NavBar from "./universal/NavBar"

const Home = () => {
    const [allPermits, setAllPermits] = useState([])
    const [allProjects, setAllProjects] = useState([])
    const navigate = useNavigate()

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

    useEffect(() => {
        axios.get('https://localhost:8000', {withCredentials:true}) //Need to set up credentials for logout in the backend & determine api route for logout
        .then((res) => {
            console.log(res)
            setAllProjects(res.data) //verify its res.data in json response
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return(
        <div>
            <NavBar />
            <div>
                <div>
                    <h2>My Projects</h2>
                    <div className='card col-3 mb-5 mx-2'>
                        {allProjects.map((project, index) => {
                            return(
                                <div key={index}>
                                    <img 
                                        src={project.image}  //Verify json response matches with src input
                                        alt="Project Image" 
                                        className="card"
                                        id="container"
                                        // onClick={}
                                    />
                                    {/* Verify json response matches p tag input */}
                                    <p>{project.name}</p> 
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <h2>Permits</h2>
                    {allPermits.map((permit, index) => {
                        return(
                            <div className='card col-3 mb-5 mx-2' key={index}>
                                <div>
                                    <h3>{permit.name}</h3>
                                    <h5>{permit.type}</h5>
                                </div>
                                <div>
                                    <p>{permit.number}</p>
                                    <link to={`/permit/detail/${permit._id}`}>Detail</link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home