import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Create from "../pages/create";
import PNF from "../pages/PNF";
import ProtectedRoute from "./protectedRoute";


const AllRoutes = () => {
    return ( 
        <main>
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route  path="create" element={ <ProtectedRoute><Create/></ProtectedRoute>}/>
                <Route  path="*" element={<PNF/>}/>
            </Routes>
        </main>
     );
}
 
export default AllRoutes;