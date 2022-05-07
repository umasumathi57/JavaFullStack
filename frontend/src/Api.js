let arr=[
    {
        "proName":"Annakili",
        "proId":1,
        "proLoc":"Valapady",
        "proSkills":["Java","JavaScript","Python"]

    },
    {
    "proName":"Aarthi",
    "proId":2,
    "proLoc":"Salem",
    "proSkills":["Java","Python"]

},

{
    "proName":"Manoj",
    "proId":3,
    "proLoc":"Namakkal",
    "proSkills":["Python"]


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

export const change=(indx,data)=>
{
    return arr[indx]===data
}

export const fetch=(name)=>{
    const tmp=arr.filter( (elements)=>{

        return elements.proName===name
    }  )
}

export const del=()=>{

arr=arr.filter((dataa,position)=>{
    return dataa!==arr[position]
}
)
}