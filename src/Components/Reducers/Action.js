export const AddContactAction=(newrecord)=>{
    return{
        type:"AddContact",
        payload:newrecord
    }
}

export const DeleteContactAction=(id)=>{
    return{
        type:"DeleteContact",
        payload:id
    }
}

export const UpdateContactAction=(load)=>{
    console.log("load",load)
    return{
        type:"UpdateContact",
        payload:load
    }
}