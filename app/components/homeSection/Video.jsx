'use client';

export default function Video() {
  return (
    <>
      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/placeholder.jpg"
        >
          <source src="/videos/night.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="content">
          <h1>Your Headline Here</h1>
          <p>Some descriptive text.</p>
        </div>
      </div>
 
    </>
  );
}
