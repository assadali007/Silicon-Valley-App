import {useState} from "react";


function useTheme (startingTheme) {
    const [theme,setTheme] = useState(startingTheme);


    function validateTheme(prevState) {
        if (prevState === "light")
        {
            setTheme("light");
        }
        else
        {
            setTheme("dark")
        }
    }


    return {
        theme,
        setTheme : validateTheme
    }
}
export default useTheme;