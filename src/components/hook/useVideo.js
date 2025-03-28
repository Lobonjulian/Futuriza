import { useRef, useEffect } from "react";
import VideoPresentation from "../../assets/video/presentacion.mp4";
import HeroImg from "/futuriza.png";

const useVideo = () => {
  const videoContainer = useRef(null);

  useEffect(() => {
    const video = videoContainer.current;
    const thumb = document.createElement("div");
    thumb.classList.add("heroVideo");
    thumb.innerHTML = `
      <img src="${HeroImg}" alt="hero" />
      <div class="play"></div>
    `;
    thumb.addEventListener("click", () => {
      const iframe = document.createElement("iframe");
      iframe.src = `${VideoPresentation}?autoplay=1`;
      iframe.allowFullscreen = true;
      iframe.allow = "autoplay; encrypted-media";
      iframe.frameBorder = "0";
      video.replaceChild(iframe, thumb);
    });
    if (video.children.length === 0) {
      video.appendChild(thumb);
    }
  }, [videoContainer]);

  return videoContainer;
};

export default useVideo;
