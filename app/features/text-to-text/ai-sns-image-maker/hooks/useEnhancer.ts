import { useRef, RefObject } from "react";

const useEnhancer = () => {
  const canv = useRef<HTMLCanvasElement>(null);
  const img = useRef<HTMLImageElement>(null);

  const downloadImage = (
    canvas: RefObject<HTMLCanvasElement>,
    image: RefObject<HTMLImageElement>,
    id: string
  ) => {
    if (canvas.current !== null) {
      const currentCnavas = canvas.current;
      const ctx = currentCnavas.getContext("2d");
      if (ctx && image.current !== null) {
        const currentImage = image.current;
        currentCnavas.width = currentImage.width;
        currentCnavas.height = currentImage.height;
        ctx.drawImage(
          currentImage,
          0,
          0,
          currentImage.width,
          currentImage.height
        );
      }
      const anchor: HTMLAnchorElement = document.createElement("a");
      currentCnavas.toBlob((blob: any) => {
        if (anchor !== null && blob) {
          anchor.href = window.URL.createObjectURL(blob);
          anchor.download = `${id}.png`;
          anchor.click();
        }
      });
    }
  };

  return {
    downloadImage,
    canv,
    img,
  };
};

export default useEnhancer;
