import React from 'react'

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
const img =  require("../assets/4957136.jpg")
const Login = ({ image}: Props) => {

  return (
    <div>
        <div>
            <img src={image?image:img} alt={'login'}/>
            <p>test</p>
        </div>
    </div>
  )
}

export default Login
