import { Push2Web } from "@snap/push2web";
import { bootstrapCameraKit } from "@snap/camera-kit";
import { useEffect } from "react";


const Push2WebTest = ({showCamera, onClose }) =>{

    useEffect(() => {
       
        (async function () {
            const push2Web = new Push2Web();
            const liveRenderTarget = document.getElementById(
                'canvas2'
              );
            const extensions = (container) => container.provides(push2Web.extension);
            const cameraKit = await bootstrapCameraKit(
            { 
                apiToken: "eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzA3NjUzMTU1LCJzdWIiOiIyZjBhM2RiMC02M2RhLTQ4NzQtYjE2YS04ODdhYjNkMDAwMjh-UFJPRFVDVElPTn5hNzkwYTFhNy01YmQ5LTQ0YWUtYTcwMi04NmNiYTBmM2ViM2QifQ.gIzmfq_ArT5--NrNpQ3KacFUzp0zb_PdBWQ8mtHDSvI" 
            },
            extensions
            );
            
            const cameraKitSession = await cameraKit.createSession(liveRenderTarget);
            push2Web.subscribe(
                "eecd7a8d-64e0-4229-b746-8f887af68735",
                cameraKitSession,
                cameraKit.lensRepository
                );
         })();
        
       
    },[]);

    return (
        <div>
            {showCamera &&  <canvas id="canvas2"></canvas>}
           
        </div>
    )
}

export default Push2WebTest;