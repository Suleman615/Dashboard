import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

import Profile from "./Profile"
import Sidebar from "../components/Sidebar"
import Shop from "./Shop"
import AddProduct from "./AddProduct"
import Home from "./Home"
import UpdateProduct from "./UpdateProduct"
import { ProductProvider } from "../utils/ProductContext"



function Dashboard() {


    return (
        <>
            <ProductProvider>
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
                                <Route path="/updateProduct" element={<UpdateProduct />} />

                            </Routes>

                        </div>
                    </div>

                </Router>

            </ProductProvider>

        </>
    )
}

export default Dashboard