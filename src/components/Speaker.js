import {useContext, useState} from "react";
import {SpeakerFilterContext} from "../context/SpeakerFilterProvider";
import SpeakerProvider, {SpeakerContext} from "../context/SpeakerProvider";

const Session = ({title,room}) => {
    return (
        <span className="session w-100">
                    {title} <strong>{room.name}</strong>

                </span>
    )
}

const Sessions = () => {
    const {eventYear} = useContext(SpeakerFilterContext);
    const {speaker} = useContext(SpeakerContext)


    const filterEventYear = speaker.sessions.filter(sessions => sessions.eventYear === eventYear);
    return (
        <div className="sessionBox card h-250">
            {filterEventYear.map(sessions => <Session {...sessions}/>)}
        </div>
    )
}



const SpeakerImage = () => {
    const {speaker} = useContext(SpeakerContext);
    const {id,first,last} = speaker;
    return (

        <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
            <img
                src={`images/speaker-${id}.jpg`}
                className="contain-fit"
                alt={`${first} ${last}`}
            />



        </div>
    )
}


const SpeakerFavorite= () => {
    const {speaker,updateRecord} = useContext(SpeakerContext);
    const {favorite} = speaker;
    const [isTransition,setIsTransition] = useState(false);

    function onCallBack() {
        setIsTransition(false)
        console.log("this the data that take time",new Date().getMilliseconds());
    }

    return (
        <div className="action padB1">
            <span onClick={() => {
                setIsTransition(true);
                return (updateRecord({
                    ...speaker,
                    favorite : !speaker.favorite
                },onCallBack))
            }}>
                <i className={favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"}/>{" "}Favorite{"  "}
                 {isTransition ? (<span className="fas fa-circle-notch fa-spin"></span>) : null}

            </span>

        </div>
    );
}

const SpeakerDemoGraphics = () => {
    const {speaker,updateRecord} = useContext(SpeakerContext);
    const {first,last,company,twitterHandle,favorite,bio} = speaker;
    return (
        <div className="speaker-info">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="text-truncate w-200">
                    {first} {last}
                </h3>
            </div>
            <SpeakerFavorite />
            <div>
                <p className="card-description">{bio}</p>
                <div className="social d-flex flex-row mt-4">
                    <div className="company">
                        <h5>Company</h5>
                        <h6>{company}</h6>
                    </div>
                    <div className="twitter">
                        <h5>Twitter</h5>
                        <h6>{twitterHandle}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Speaker = ({speaker,updateRecord,insertRecord}) => {
    const {showSessions} = useContext(SpeakerFilterContext);
    return (
        <SpeakerProvider speaker={speaker} updateRecord={updateRecord} insertRecord={insertRecord} >
            <div key={speaker.id} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
                <div className="card card-height p-4 mt-4">
                    <SpeakerImage />
                    <SpeakerDemoGraphics/>

                </div>
                {showSessions === true ? <Sessions/> : null}

            </div>
        </SpeakerProvider>

    )
}

export default Speaker;