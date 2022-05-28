import React from "react";

function GSIbutton(props) {
  function handleLogin(response) {
    localStorage.setItem("loggedin", true);
    localStorage.setItem("token", response.sub);
    localStorage.setItem("username", response.email);
    localStorage.setItem("pictureURL", response.picture);
    window.location.href = "/";
  }

  function decodeJwtResponse(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  function handleCredentialResponse(response) {
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    if (response == null) {
      alert("Can't Login");
    } else {
      const responsePayload = decodeJwtResponse(response.credential);
      handleLogin(responsePayload);
    }
  }

  window.onload = function () {
    const google = window.google;
    google.accounts.id.initialize({
      client_id:
        "605425009699-a08v212752nbljkldsado1odec6d8nfk.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      {
        type: "icon",
        theme: "outline",
        size: "large",
      } // customization attributes
    );
    if (localStorage.getItem("loggedin") !== "true") {
      google.accounts.id.prompt(); // also display the One Tap dialog
    }
  };

  return <div id="buttonDiv" className="pr-2"></div>;
}

export default GSIbutton;
