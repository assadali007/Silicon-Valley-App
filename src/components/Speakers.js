import Header from "./Header";
import SpeakersToolbar from "./SpeakersToolbar";
import SpeakerList from "./SpeakerList";
import {useState} from "react";
import SpeakerFilterProvider from "../context/SpeakerFilterProvider";


const Speakers = () => {

   return (
       <SpeakerFilterProvider startingShowSessions={false} startingEventYear="2019">
           <SpeakersToolbar/>
           <SpeakerList  />
       </SpeakerFilterProvider>

   );
}
export default Speakers;