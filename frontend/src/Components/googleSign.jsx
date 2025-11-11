import React, { useEffect } from "react";

export default function GoogleLoginButton() {
  useEffect(() => {
    /* Load Google script if not loaded */
    if (!window.google) return;

    window.google.accounts.id.initialize({
      client_id:
        "936609673781-3474auo6bn3gka6shfr4s7j8km09qs2m.apps.googleusercontent.com",
      callback: handleCredentialResponse,
      auto_select: false, // important – forces account chooser
    });

    // render the button
    window.google.accounts.id.renderButton(
      document.getElementById("googleSignInDiv"),
      { theme: "outline", size: "large" }
    );
  }, []);

  const handleCredentialResponse = (response) => {
    console.log("Google token:", response.credential);

    // send token to backend for verification
    fetch("http://localhost:5000/api/google-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credential: response.credential }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Server verified:", data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div id="googleSignInDiv"></div>
    </div>
  );
}
