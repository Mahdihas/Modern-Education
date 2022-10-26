import React from 'react'

const Blog = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6'>
      <div className="card h-[auto] min:h-[580px] bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-green-600 font-bold">2. Why we use firebase? what is it's alternative?</h2>
    <p className='text-start'> <span className='text-starts text-purple-500 font-bold'>Answer : </span>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, <br /> in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. <br />An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts.</p>
    <div className="card-actions justify-end">
      <button className="btn bg-pink-600">Read More</button>
    </div>
  </div>
      </div>
      





      <div className="card h-[auto] min:h-[580px] bg-base-100 shadow-xl">
  <div className="card-body">
  <h2 className="card-title text-green-600 font-bold">1. What is cors?</h2>
  <p className='text-start'> <span className='text-starts text-purple-500 font-bold'>Answer : </span>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.

When you upgrade to Firebase Authentication with Identity Platform, you unlock additional features, such as multi-factor authentication, blocking functions, user activity and audit logging, SAML and generic OpenID Connect support, multi-tenancy, and enterprise-level support. <br />And also it has lot's of alternative such as 1. Parse .  2. AWS Amplify etc.</p>
    <div className="card-actions justify-end">
    <button className="btn bg-pink-600">Read More</button>
    </div>
  </div>
      </div>
      





      <div className="card h-[auto] min:h-[580px] bg-base-100 shadow-xl">
  <div className="card-body">
  <h2 className="card-title text-green-600 font-bold">3. How does the private route work?</h2>
  <p className='text-start'> <span className='text-starts text-purple-500 font-bold'>Answer : </span> The react private route component renders a route component if the user is logged in and in an authorised role for the route, if the user isn’t logged in they’re redirected to the /login page, if the user is logged in but aren’t in an authorised role they’re redirected to the home page.</p>
    <div className="card-actions justify-end">
    <button className="btn bg-pink-600">Read More</button>
    </div>
  </div>
      </div>
      


      <div className="card h-[auto] min:h-[580px] bg-base-100 shadow-xl">
  <div className="card-body">
  <h2 className="card-title text-green-600 font-bold">4. What is Node? How does Node work?</h2>
          <p className='text-start'> <span className='text-starts text-purple-500 font-bold'>Answer : </span>
          What is Node.js?
Node.js is an open source server environment
Node.js is free
Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
Node.js uses JavaScript on the server .<br />

   
How does Node work? <br />   Node.JS works and runs on the VB JavaScript engine. An essential thing to comprehend is that Node isn’t a web server. In this article will give a simple method to comprehend the outline of how Node.JS works? along with its functions, what makes Node.JS extraordinary and clarify that it’s something other than server-side JavaScript. <br /> How Node.JS works?
               
          </p>
    <div className="card-actions justify-end">
    <button className="btn bg-pink-600">Read More</button>
    </div>
  </div>
</div>
      </div>
  )
}

export default Blog