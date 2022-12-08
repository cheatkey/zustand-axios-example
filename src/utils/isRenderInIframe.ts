const isRenderInIframe = () => window.location !== window.parent.location;

export default isRenderInIframe;
