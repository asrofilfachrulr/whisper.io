// middleware/auth.js
export default function ({ app, redirect }) {
  // Check if the user is authenticated
  if (!app.$cookies.get('jwt-token')) {
    console.log("[MIDDLEWARE: INFO] cannot access /home, token is missing. Redirect to /login instead")
    return redirect('/login'); // Redirect to the login page if not authenticated
  } 
}