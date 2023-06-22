import {data} from "../../SpeakerData";
import Speaker from "./Speaker";
import {useContext, useEffect, useState} from "react";
import useRequestDelay from "../hooks/useRequestDelay";
import ReactPlaceholder from "react-placeholder";
import useSpeakerFilter from "../hooks/useSpeakerFilter";
import {SpeakerFilterContext} from "../context/SpeakerFilterProvider";
import SpeakerAdd from "./SpeakerAdd";


const SpeakerList = ({showSessions}) => {

 const{
     data:speakerData,
     requestSpeaker,
     error,
     updateRecord,
     InsertRecord,
  } = useRequestDelay(2000,data);

 const {searchQuery,eventYear} =  useContext(SpeakerFilterContext);


    //
    // if (requestSpeaker === "loading") {
    //    return  (<div>Loading...</div>)
    // }

    if (requestSpeaker === "failure") {
        return  (
            <div className="text-danger">
                Error Speaker data Failed {error}

            </div>
        )
    }

    const speakerFilterName = speakerData.filter(speaker => {
        return (
            speaker.first.toLowerCase().includes(searchQuery) || speaker.last.toLowerCase().includes(searchQuery)
        );
    })

    const SpeakerEvent = speakerFilterName.filter(speaker => speaker.sessions.find(sessions => sessions.eventYear === eventYear))


    return (
        <div className="container speakers-list">
            <ReactPlaceholder ready={requestSpeaker === "success"}
                              className="speakerslist-placeholder"
                              type="media" rows={15}>
                <SpeakerAdd eventYear={eventYear} insertRecord={InsertRecord}/>
            <div className="row">
                {SpeakerEvent.map(speaker => {
                    return (
                        <Speaker key={speaker.id}
                                 speaker={speaker}
                                 updateRecord={updateRecord}
                                 insertRecord={InsertRecord}
                        />

                    );
                })}


            </div>
            </ReactPlaceholder>
        </div>
    );
}
export default SpeakerList;