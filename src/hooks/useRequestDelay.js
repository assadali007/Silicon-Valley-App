import {useEffect, useState} from "react";
import {data} from "../../SpeakerData";

export const REQUEST_SPEAKER= {
    LOADING : "loading",
    SUCCESS : "success",
    FAILURE : "failure"
}
const useRequestDelay = (delayTime,initialData=[]) => {

    const [data,setData] = useState(initialData);
    const [requestSpeaker,setRequestSpeaker] = useState(REQUEST_SPEAKER.LOADING);
    const [error,setError] = useState("");

    const delay =(ms) => new Promise((resolve, reject) => setTimeout(resolve,ms));



    useEffect(() => {

        async function delayFunc() {
            try {
                // throw "had Error"
                await delay(delayTime)
                setRequestSpeaker(prevState => REQUEST_SPEAKER.SUCCESS)
                setData(prevState => initialData)
            }
            catch (e) {
                setRequestSpeaker(prevState => REQUEST_SPEAKER.FAILURE);
                setError(prevState => e)
            }
        }
        delayFunc()

    },[])

    function updateRecord(speaker,onCallBack) {
       const speakerNewRecord =  data.map(rec => rec.id === speaker.id ? speaker : rec);

       async function delayFunction() {
           try {
           //    throw "had error"
               await delay(delayTime)
               if (onCallBack) {
                   onCallBack()
               }
               setData(prevState => speakerNewRecord)

           }
            catch (e) {
                if (onCallBack) {
                    onCallBack()
                }
               console.log("this error have come on this ",e)
            }
       }
       delayFunction()
    }

    function InsertRecord(record) {
        const speakerNewRecord = [record, ...data];
        setData(prevState => speakerNewRecord);
    }

    return {
        data,
        requestSpeaker,
        error,
        updateRecord,
        InsertRecord,
    }
}
export default useRequestDelay;