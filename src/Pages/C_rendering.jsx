import Conditional_Rendering from "../components/Conditional-Rendering";       

function User_tracking()
{
    return(
        <>
        <Conditional_Rendering isLogged={true} User_Name="Nikhil Yadav" />
        </>
    );
}

export default User_tracking;