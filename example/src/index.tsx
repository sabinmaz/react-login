import React from 'react'
import ReactDOM from 'react-dom/client'
import {Login} from "react-login-dynamic"

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div className={"login"}>

            <Login image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcjwBjErg0BEdVO88E6_a4KxB-3nsdwn41NQ&usqp=CAU' />
        </div>
    </React.StrictMode>,
)
