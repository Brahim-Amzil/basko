// ... existing code ...
{videoSrc && (
  <div className="hero-video-container absolute inset-0 z-0">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      style={{ opacity: videoOpacity || 0.5 }}
      onError={(e) => console.error("Video failed to load:", e)}
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
)}
// ... existing code ...