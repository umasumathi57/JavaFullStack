import axios from 'axios';

const connect="http://localhost:8080";

export const join=async(object)=>{

    const hey=await axios.post(`${connect}/newadd`,object) //postmpping - axios.post // await--function must be async
    return hey;
}

export const gather=async()=>{

    const yet = await axios.get(`${connect}/home`)
    return yet;
}

export const reachOne=async(position)=>{

    const te = await axios.get(`${connect}/getting/${position}`)
    return te;
}

export const updateOne=async(obj)=>{
    const hey=await axios.put(`${connect}/update`,obj)
    return hey;
}

export const erase=async(d)=>{
    const clr=await axios.delete(`${connect}/del/${d}`)
    return clr;
}