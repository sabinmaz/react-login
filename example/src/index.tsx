import React from 'react'
import ReactDOM from 'react-dom/client'
import {Login} from "react-login-dynamic"

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div className={"login"}>

            <Login  />
        </div>
    </React.StrictMode>,
)
