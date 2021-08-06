var initialState = [
    {
    id:"0",
    Name:"varun0",
    Email:"v@mail.com",
    phonenumber:"1234567890"
},
    {
        id:"1",
        Name:"varun1",
        Email:"v1@mail.com",
        phonenumber:"1238232390"
    }
]

const ContactReducer=(state=initialState,action)=>{
switch(action.type){
    case "AddContact":
        console.log("dawad")
        state=[...state,action.payload]
        console.log(action.payload)
        console.log(state)
        return state
    case "DeleteContact":
        console.log(action.payload)
        state=state.filter((item)=>item.id!==action.payload)
        console.log(action.payload)
        console.log("state",state)
        return state
    case "UpdateContact":
        console.log("king of kin")
        console.log("payload",action.payload)
        const updated=state.map((item)=>item.id===action.payload.id?action.payload:item)
        console.log("update",updated)
        state=updated
        return state
    default:
        console.log(state)
        return state
}
}

export default ContactReducer