import {Suspense} from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {RouterInfo} from "./util/router"

const App = () => {
    const RouterObject = createBrowserRouter(RouterInfo)

    return (
        <div>
            <Suspense fallback={<div>loading</div>}>
                <RouterProvider router={RouterObject}/>
            </Suspense>
        </div>
    )
}

export default App
