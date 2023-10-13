import React, { useRef, useEffect } from 'react';

function CameraComponent() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(err => console.error(err));
    }
  }, []);

  return <video ref={videoRef} autoPlay />;
}

export default CameraComponent;