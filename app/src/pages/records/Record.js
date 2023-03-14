import React from "react";
import { useLoaderData } from "react-router-dom"
import { Flex, Text, Box, Link } from "rebass"
import axios from 'axios'

export default function Record() {
    let records = useLoaderData()
    return (
        <div>
          {records.data.map(record => (
            <Text key={record.numstring}>
            <p>{record.address}</p>
            <p>{record.numstring}</p>
            </Text>
          ))}
        </div>
      )
    }

export const loader = async () => {
    try {
        const res = await axios.get('http://localhost:5000/records')
        return res.data
    } catch(error) {
        console.log(error);
    }
}
