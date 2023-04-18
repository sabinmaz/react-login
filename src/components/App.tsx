import React, { useState } from 'react'
import * as url from "url";

type Props = {
    favicon?: string
    logo?:string
    showLanguage?:boolean
    userNameLabel?:string
    passwordLabel?: string
    showRole?: string
    languageList?:[]
    roleList?:[]
    primaryColor?:string
    secondaryColor?:string
    onLogin?: React.MouseEventHandler<HTMLButtonElement>
    error?:{}
    style?:{}
    footer?:React.ReactElement
    image?: string

}
const Login = ({ favicon,logo,showLanguage,userNameLabel,passwordLabel,showRole
languageList,roleList,primaryColor,secondaryColor,onLogin,error,style,footer,image}: Props) => {

  return (
    <div>
        <div>
            <image src={image}/>
        </div>
    </div>
  )
}

export default Login
