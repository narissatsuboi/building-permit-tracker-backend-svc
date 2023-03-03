import axios from 'axios' 

export const getServerMessage = async () => {
    const res = await fetch('')
    return res 
}

export const getAllRecords = async () => {
    const res = await fetch(`/records`)
    return res
}
