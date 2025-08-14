import { Header } from "../components/Header"
import './NotFound.css'

export function NotFound(){

  return(
    <>
    <title>404 - Not Found</title>
    <Header />

    <img className="sad-robo" src="/images/icons/not-found.jpg"/>
    
    </>
  )

}