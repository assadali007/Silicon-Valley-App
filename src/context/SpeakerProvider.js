import {createContext} from "react";


export const SpeakerContext = createContext();


function SpeakerProvider({speaker,children,updateRecord,insertRecord}) {
    return (
        <SpeakerContext.Provider value={{speaker,updateRecord,insertRecord}}>
            {children}
        </SpeakerContext.Provider>
    )
}
export default SpeakerProvider;