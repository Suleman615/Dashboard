import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

import Profile from "./Profile"
import Sidebar from "../components/Sidebar"
import Shop from "./Shop"
import AddProduct from "./AddProduct"
import Home from "./Home"



function Dashboard() {


    return (
        <>

            <Router>
                <div className='flex min-h-[100vh] w-full'>

                    {/* ************* SideBar *************** */}
                    <Sidebar />

                    {/* ********** Page Content *******************/}
                    <div className="    w-full relative ">


                        <Routes>
                            <Route path="/" element={< Home />} />

                            <Route path="/profile" element={< Profile />} />
                            <Route path="/shop" element={<Shop />} />
                            <Route path="/addproduct" element={<AddProduct />} />
                            <Route path="/updateProduct" element={<AddProduct />} />

                        </Routes>

                    </div>
                </div>

            </Router>



        </>
    )
}

export default Dashboard