import {createContext} from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";


export const SpeakerFilterContext = createContext();

function SpeakerFilterProvider({startingShowSessions,startingEventYear,children}) {
    const {
        showSessions,
        setShowSessions,
        eventYear,
        setEventYear,
        searchQuery,
        setSearchQuery,
        EVENTS_YEARS
    } = useSpeakerFilter(startingShowSessions,startingEventYear)
    return (
        <SpeakerFilterContext.Provider value={{
            showSessions,
            setShowSessions,
            eventYear,
            setEventYear,
            searchQuery,
            setSearchQuery,
            EVENTS_YEARS
        }}>
            {children}

        </SpeakerFilterContext.Provider>
    )
}
export default SpeakerFilterProvider;