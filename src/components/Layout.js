import {createContext, useContext, useState} from "react";
import ThemeProvider, {ThemeContext} from "../context/ThemeProvider";




function Layout({children,startingTheme}) {
    return (
        <ThemeProvider startingTheme={startingTheme}>
            <LayoutNoThemeProvider>
                {children}
            </LayoutNoThemeProvider>
        </ThemeProvider>

    )
}
export default Layout;

function LayoutNoThemeProvider({children}) {
    const {theme} = useContext(ThemeContext);
   return (
       <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
           {children}
       </div>
   )

}