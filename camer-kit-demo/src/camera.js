import { bootstrapCameraKit } from '@snap/camera-kit';
import { useEffect, useState } from 'react';
import { Push2Web } from "@snap/push2web";



const Camera = ({showCamera, onClose }) => {

    //const [push2web, setPushToWeb] = useState(); 
    const [session, setSession] = useState(null);

    useEffect(() => {
        
        (async function () {
            const cameraKit = await bootstrapCameraKit({
              apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzA3NjUzMTU1LCJzdWIiOiIyZjBhM2RiMC02M2RhLTQ4NzQtYjE2YS04ODdhYjNkMDAwMjh-U1RBR0lOR34yYTdkODlhMS03NzE2LTQ3MzItYWUyNS0wMTg4MzI0NGY5MDcifQ.tora2ZH3-FOrZIMoWJHmc5tZthXtmDoOZBeY877CWDQ',
            });
            const liveRenderTarget = document.getElementById(
              'canvas'
            );
            const activeSession = await cameraKit.createSession({ liveRenderTarget });
            await setSession(activeSession);

            const mediaStream = await navigator.mediaDevices.getUserMedia({
              video: true,
            });
            
            await activeSession.setSource(mediaStream);
            await activeSession.play();
          
            const lens = await cameraKit.lensRepository.loadLens(
              //'ccf52627-a25d-43bb-bbf5-4790cb146b9e',
               "9e980fe2-049f-4cbd-9bc5-7e9373ee1a0d", // another lense
              'b003a1ba-8c92-47e4-bdf6-d618f1195e0a'
            );
          
            await activeSession.applyLens(lens);
            
            console.log("showCamera : ", showCamera);
        
                
          })();
          return () => {
            // This cleanup function runs when Camera component unmounts
            console.log("camera unmounted")
            if (session) {
              session.pause();
            }
          };
         // setPushToWeb(new Push2Web());

       
    },[])

    return (
        <div>
            {showCamera &&  <canvas id="canvas"></canvas>}
           
        </div>
    )
}

export default Camera;