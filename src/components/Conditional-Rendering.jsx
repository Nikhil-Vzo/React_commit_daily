

function Conditional_Rendering({isLogged,User_Name})
{
    if(isLogged===true)
    {
        return(<h1>Welcome {User_Name} Your conditional Rendering is working now</h1>)
    }
    else
    {
    return(<h1>Please login</h1>)
    }
}

export default  Conditional_Rendering