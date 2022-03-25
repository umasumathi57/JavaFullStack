let arr=[
    {
        "proName":"Annakili",
        "proId":1,
        "proLoc":"Valapady"
    },
    {
    "proName":"Aarthi",
    "proId":2,
    "proLoc":"Salem"
},

{
    "proName":"Manoj",
    "proId":3,
    "proLoc":"Namakkal"

}]

export const list=()=>{
    return arr;

}

export const join=(ob)=>
{
    arr.push(ob)
}
export const read=(index)=>{
    return arr[index]
}

export const change=()=>
{
    return 
}