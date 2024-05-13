
import ToggleTema from "../ToggleTema/ToogleTema";

const Header =({user}) => {
  console.log(user)
  return (
  <div className='flex h-20 
                bg-proje-100 
                dark:bg-dark-200
                  justify-between 
                  p-5 
                  sm:rounded-xl 
                  sm:m-5 
    '>
      
    <span className="text-gray-100">Olá, {user?user.name:"Usuario"}</span>
    <h1 className="text-gray-100 text-xl hover:text-2xl" >Bem-vindo</h1>
    
    <ToggleTema/>
  
  </div>)
}

export default Header;