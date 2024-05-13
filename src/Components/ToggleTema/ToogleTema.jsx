import { MoonIcon,SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

const ToggleTema=()=>{
    const pageClasses = document.documentElement.classList
    const systemPreference =window.matchMedia('(prefers-color-scheme: dark)').matches

    useEffect(()=>{
        systemPreference && pageClasses.add('dark')
    })
    
    const toggle =()=>{
        console.log('clicou')
        pageClasses.toggle('dark')
    }
    return (
        <div className="hidden sm:block">
            <MoonIcon className="h-8 text-gray-100 dark:hidden cursor-pointer" onClick={toggle}/>
            <SunIcon className= "h-8 text-gray-100 hidden dark:block  cursor-pointer" onClick={toggle}/>
        </div>)
}
export default ToggleTema