// middleware/auth.js
export default function ({ app, redirect }) {
  // Check if the user is authenticated
  if (!app.$cookies.get('jwt-token')) {
    console.log("cannot access /home, token is missing")
    return redirect('/login'); // Redirect to the login page if not authenticated
  } 
}