import { useEffect } from "react"

import AppRoutes from "./routes/AppRoutes"

const App = () => {
    

    useEffect(()=>{
        console.log(":D")
    })

    
    return (
        <>
            
            <AppRoutes/>
            
        </>
            
    )
}

export default App
