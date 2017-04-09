import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Disrutpive Kiwi home page"},
            {"name": "keywords", "content": "disruptive, kiwi, website, site, auckland, new zealand"},
          ]}
        />
        <h1>
          Thinking about getting a site built?
        </h1>
        <p>Ask me your questions <strong>right</strong> now.</p>
        <h1>For free? Yes. Why?</h1>
        <p>
          Because I personally know a whole bunch of people who got hustled into paying
          absurd sums of money for next to nothing. Or worse, for something that they
          couldn't even use.
        </p>
        <p>
          I want to make sure that doesn't happen to you. So tell me what you want
        to be able to do and I will tell you the best and most cost effective (or
        potentially free) way of doing it.
      </p>
      <p>
        The simple reason for that is, this isn't my primary source of income. I earn well
        over 6 figures as a software engineer so my main aim here is to help people out
        and make sure they aren't getting duped.
      </p>
      <p>
        Questions like:
        How much should I be paying for my site?
        How can I get to the top on the search results?
        How can I accept payments from my customers?
        #1A3764
        #FF8173
      </p>
      </div>
    )
  }
}
