// middleware/auth.js
export default function ({ app, redirect }) {
  // Check if the user is authenticated
  if (app.$cookies.get('jwt-token')) {
    console.log("[MIDDLEWARE: INFO] already has token.. redirect to home")
    return redirect('/home'); // Redirect to the login page if not authenticated
  } else {
    console.log("[MIDDLEWARE: INFO] you dont have token")
    console.log(`[DEBUG: ENV] process.env: ${process.env}`)
  }
}