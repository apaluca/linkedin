/**
 * Opens a new window for Google authentication
 * Creates a centered popup with specified dimensions
 */
export const openGoogleAuthWindow = () => {
  // Get the current origin (protocol + hostname + port)
  const origin = window.location.origin;

  // Add realistic-looking Google OAuth parameters
  const googleAuthParams =
    "identifier?continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D990339570472-k6nqn1tpmitg8pui82bfaun3jrpmiuhs.apps.googleusercontent.com%26auto_select%3Dtrue%26ux_mode%3Dpopup%26ui_mode%3Dcard%26context%3Dsignin%26as%3D3CjJCrvtQvPWb4huA%2FD7bw%26channel_id%3Db3d2d8e66d4063d24301b1578c2b3d7b26f8cc8ff5ec2ba22ab69a35bf788a97%26origin%3Dhttps%3A%2F%2Fwww.linkedin.com&faa=1&ifkv=AXH0vVvo6Dz0KORo78lc57TUy8YSQjoSXm8y6M6PZiOJN25_juT48ZzMSp8H5JkralYB9DXUnvvfrA&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-971931287%3A1744448022556319";

  // Set window features for a small centered window
  const width = 450;
  const height = 600;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;

  const features = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,status=yes`;

  // Open a new window with the Google Auth page (updated route with params)
  // Using a hash fragment to include the auth parameters without affecting server routing
  window.open(
    `${origin}/auth/google#${googleAuthParams}`,
    "GoogleAuthWindow",
    features
  );
};
