import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"

function NotFound() {
  return (
    <Layout>
      <Helmet>
        <title>404!</title>
        <meta name="description" content="The page you are trying to see does not exists." />
      </Helmet>
      <div className="main height-100vh min-height-600 max-height-700 flex justify-content-center">
        <div className="container max-width-1100">
          <h1 className="font-size-4xl font-weight-bold text-danger mb-10">
            Sorry!
            <span className="text-gray-100 block my-10">
              This page will be added soon
            </span>
          </h1>
          <p className="text-gray-400">
            I am working on this page, and it will be available for you soon.
          </p>
          <p className="text-gray-400">Try again sometime...</p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound
