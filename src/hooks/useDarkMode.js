import React, {useEffect} from "react";

import useLocalStorage from "./useLocalStorage"

const useDarkMode = () => {
const [value, setValue] = useLocalStorage('darkMode')

useEffect(() => {
value === true ? document.body.classList.add('dark-mode'): document.body.classList.remove('dark-mode')
},[value])

return [value, setValue]
}

export default useDarkMode;
    





