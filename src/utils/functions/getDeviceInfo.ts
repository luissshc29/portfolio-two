export function getDeviceInfo() {
  // Checking if the device is an Android, iOS or Desktop
  const userAgent =
    navigator.userAgent || navigator.vendor || (window as any).opera;
  const isMobileUserAgent = /Mobi|Android|iPhone|iPad|iPod|Mobile/i.test(
    userAgent,
  );
  const isAndroid = /Android/i.test(userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent);

  // Checking if the user is using a mouse or a touch screen
  const isTouchByMedia = window.matchMedia("(pointer: coarse)").matches;
  const isTouchFallback =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const isTouch = isTouchByMedia || isTouchFallback;

  return {
    isTouch: isMobileUserAgent || isAndroid || isIOS || isTouch ? true : false,
  };
}
