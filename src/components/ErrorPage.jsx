import React from 'react'
import '../styles/App.css'

export default function ErrorPage(){
  return (
    <div>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthecyberpost.com%2Fwp-content%2Fuploads%2F2020%2F05%2F404-error-hackers-rat-malware.jpg&f=1&nofb=1"
        alt="404" class="error-image"
      />
      <main>
        <h1>Sorry!</h1>
        <p>You must be 18 or older to sign up for our site!</p>
        <button>Back</button>
      </main>
    </div>
  )
}
