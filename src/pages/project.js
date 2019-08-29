import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Button from "../components/Button";
import Jumbo from '../components/Jumbo';

const ProjectPage = () => (
  <Layout>
    <Jumbo/>
    <h1>Esta sera la página de proyectos</h1>
    <Button buttonText="CTA TEXT" />
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
  )

  export default ProjectPage