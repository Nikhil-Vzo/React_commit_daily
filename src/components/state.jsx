import { useState } from "react";  



function FavouriteColor()
    {
        const [color, setColor] = useState("red")
        return(
            <>
            <h1 style={{color: color}} >My fav color is {color}</h1>
            </>
        )
    }

export default FavouriteColor