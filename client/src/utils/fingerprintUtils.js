export const generateFingerprint = async () => {
  try {
    // Get screen resolution
    const screenResolution = {
      width: window.screen.width,
      height: window.screen.height,
      availWidth: window.screen.availWidth,
      availHeight: window.screen.availHeight,
      colorDepth: window.screen.colorDepth,
      pixelDepth: window.screen.pixelDepth,
    };

    // Get timezone
    const timezone = {
      offset: new Date().getTimezoneOffset(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    // Get browser language
    const languages = navigator.languages || [
      navigator.language || navigator.userLanguage,
    ];

    // Get platform info
    const platform = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      vendor: navigator.vendor,
      doNotTrack: navigator.doNotTrack,
    };

    // Canvas fingerprinting
    const canvasFingerprint = await getCanvasFingerprint();

    // WebGL fingerprinting
    const webglFingerprint = await getWebglFingerprint();

    // Fonts fingerprinting
    const fontsFingerprint = await getFontsFingerprint();

    // Combine all data into one fingerprint
    const fingerprintData = {
      screenResolution,
      timezone,
      languages,
      platform,
      canvasFingerprint,
      webglFingerprint,
      fontsFingerprint,
    };

    // Create a hash of the fingerprint data
    const fingerprintHash = await createHash(JSON.stringify(fingerprintData));

    return {
      fingerprint: fingerprintHash,
      rawData: fingerprintData,
    };
  } catch (error) {
    console.error("Error generating fingerprint:", error);
    return {
      fingerprint: "error-generating-fingerprint",
      rawData: { error: error.message },
    };
  }
};

// Canvas fingerprinting
const getCanvasFingerprint = async () => {
  try {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 200;
    canvas.height = 50;

    // Draw text with specific styling
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(10, 10, 150, 30);
    ctx.fillStyle = "#069";
    ctx.font = "15px Arial";
    ctx.fillText("Fingerprint Canvas", 15, 30);

    // Get canvas data
    return canvas.toDataURL().slice(0, 100); // Just take the first part for efficiency
  } catch (e) {
    return "canvas-not-supported";
  }
};

// WebGL fingerprinting
const getWebglFingerprint = async () => {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (!gl) {
      return "webgl-not-supported";
    }

    // Get WebGL vendor and renderer
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");

    if (!debugInfo) {
      return "webgl-debug-info-not-supported";
    }

    const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

    return { vendor, renderer };
  } catch (e) {
    return "webgl-error";
  }
};

// Fonts fingerprinting
const getFontsFingerprint = async () => {
  // List of common fonts to check
  const fontList = [
    "Arial",
    "Arial Black",
    "Arial Narrow",
    "Calibri",
    "Cambria",
    "Comic Sans MS",
    "Courier",
    "Courier New",
    "Georgia",
    "Helvetica",
    "Impact",
    "Lucida Console",
    "Tahoma",
    "Times",
    "Times New Roman",
    "Trebuchet MS",
    "Verdana",
  ];

  // Create a canvas to check for font rendering
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 400;
  canvas.height = 30;

  // Text to render
  const text = "abcdefghijklmnopqrstuvwxyz";

  // Default font metrics
  ctx.font = "16px Arial";
  ctx.fillText(text, 10, 20);
  const defaultMetrics = ctx.measureText(text);

  // Check each font
  const availableFonts = [];

  for (const font of fontList) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `16px '${font}', Arial`;
    ctx.fillText(text, 10, 20);
    const metrics = ctx.measureText(text);

    // If the font is available, the metrics should be different
    if (metrics.width !== defaultMetrics.width) {
      availableFonts.push(font);
    }
  }

  return availableFonts;
};

// Create a hash of the fingerprint data
const createHash = async (str) => {
  try {
    // Use the Web Crypto API for hashing
    const msgUint8 = new TextEncoder().encode(str);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  } catch (e) {
    // Fallback to a simple hash function if Web Crypto isn't available
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return hash.toString(16);
  }
};
