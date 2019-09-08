import React from 'react'

import Layout from "../components/layout"
import ButtonPrimary from "../components/ButtonPrimary";
import Jumbo from '../components/Jumbo';

const SuccessPage = () => (
  <Layout>
    <Jumbo/>
    <h2>Message Sent</h2>
    <ButtonPrimary buttonText="CTA TEXT" />
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
  )

  export default SuccessPage