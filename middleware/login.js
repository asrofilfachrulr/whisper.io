// middleware/auth.js
export default function ({ app, redirect }) {
  // Check if the user is authenticated
  if (app.$cookies.get('auth._token.local')) {
    console.log("[MIDDLEWARE: INFO] already has token.. redirect to home")
    return redirect('/home'); // Redirect to the login page if not authenticated
  } else {
    console.log(`[DEBUG: ENV] API_URL: ${process.env.API_URL}`)
  }
}