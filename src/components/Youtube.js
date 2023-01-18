import React from "react";

function Youtube(props) {
  return (
    <div className="video-responsive">
      <div class="ratio ratio-16x9">
        <iframe
          width="424"
          height="238"
          src="https://www.youtube.com/embed/MNRBo03K_pY"
          title="Teaser | POLITIE 24/7"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Youtube;
