import React from "react";
import { useLoaderData } from "react-router-dom"
import { Flex, Text, Box, Link } from "rebass";

import { getAllRecords } from '../../api/api'

export default function Records() {
    const records = useLoaderData()

    return(
        <div>
            <Text>some record info here</Text>
            <p>records</p>
        </div>
    )
}

export const recordsLoader = async () => {
    try {
        const records = await getAllRecords()
        console.log(records)
        return records 
    } catch(error) {
        console.log(error);
    }
}