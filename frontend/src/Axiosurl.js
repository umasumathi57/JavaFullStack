import axios from 'axios';

const connect="http://localhost:8080";

export const join=async(object)=>{

    const hey=await axios.post(`${connect}/newadd`,object) //postmpping - axios.post // await--function must be async
    return hey;
}

export const gather=async=()=>{

    const yet=await axios.get(`${connect}/home`)
    return yet;
}