import Input from "../Input/Input"


const Formulario = ({ onSubmit }) => {
    const safeSubmit = evento => {
        evento.preventDefault()
        evento.stopPropagation()

        const name  = evento.target.elements["name"].value
        const email = evento.target.elements["email"].value
        onSubmit({name,email})
      }

  return (
  
        <form onSubmit={safeSubmit} 
            className=" flex
                        h-full
                        flex-col
                        items-center
                        justify-center
                        -mt-20
                        gap-10
                        mx-5
                        
        ">
            <Input type='text' required = {true} name="name" placeholder='Insira seu Nome...' 
               
            
            />
            <Input type='email' required= {true} name="email" placeholder='Insira seu E-mail...'/>
            <button type='submit'
                className="bg-proje-100 
                             rounded-full 
                             dark:bg-dark-200 
                             text-gray-200 
                             py-1 px-8
                             uppercase
                             hover:animate-pulse
                             hover:shadow-gray-500
                             hover:-translate-y-1
                             hover:delay-200

                             "
                             
            >Seguir</button>
        </form>
 
  )
}

export default Formulario;