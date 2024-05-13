import { useState } from "react";
import ArticleList from "./Components/ArticleList/ArticleList";
import Formulario from "./Components/Formulario/Formulario";

import Header from "./Components/Header/Header";


export default function App() {
    const [user, setUser] = useState()
    const hasUser =  Boolean(user)
  return (
    <div className="h-screen">
    <Header user = {user}> </Header>
    {
      
      hasUser && <ArticleList/>
      
    }
    {
      
      !hasUser && <Formulario onSubmit={setUser}/>
    }

    {
        console.log(hasUser)
    }
    </div>
  )
}