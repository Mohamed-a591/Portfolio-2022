import { Route, Routes } from "react-router-dom"
import Auth from "./containers/Auth"

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/auth' element={<Auth />}/>
            </Routes> 
        </div>
    )
}

export default MainRoutes