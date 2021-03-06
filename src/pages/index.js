import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Welcome to Bello Bello</h1>
        <p>Experience designer with 10 years of experience in design and build products.</p>
        <Link to="/page-2/">Contact me</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
