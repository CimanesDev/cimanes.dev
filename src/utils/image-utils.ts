// Image optimization utilities

export const generateImageSrcSet = (src: string, sizes: number[] = [400, 800, 1200]) => {
  // In a real app, you'd generate different sized images
  // For now, we'll return the original src
  return src;
};

export const getImagePlaceholder = (width: number, height: number, color: string = '#f3f4f6') => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}"/>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const isWebPSupported = (): boolean => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

export const getOptimizedImageSrc = (src: string): string => {
  // In a real app, you'd check for WebP support and return appropriate format
  // For now, we'll return the original src
  return src;
};
