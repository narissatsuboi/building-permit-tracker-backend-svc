import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom"
import { Flex, Text, Box, Link } from "rebass";

import { getServerMessage } from "../api/api";



(async () =>{
    const msg = await getServerMessage(); 
    console.log(msg);
})() 

export default function Home() {

    return(
        <div>
            <Text>home.js page</Text>

        </div>
    )
}

