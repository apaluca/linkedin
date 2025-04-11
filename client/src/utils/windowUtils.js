/**
 * Opens a new window for Google authentication
 * Creates a centered popup with specified dimensions
 */
export const openGoogleAuthWindow = () => {
  // Get the current origin (protocol + hostname + port)
  const origin = window.location.origin;

  // Set window features for a small centered window
  const width = 450;
  const height = 600;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;

  const features = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,status=yes`;

  // Open a new window with the Google Auth page
  window.open(`${origin}/google-auth`, "GoogleAuthWindow", features);
};
