import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ButtonPrimary from "../components/ButtonPrimary"
import Jumbo from "../components/Jumbo"
import AboutMe from "../components/AboutMe";
import Companies from "../components/Companies"
import BlogFeatured from "../components/BlogFeatured";



const IndexPage = () => (
  <Layout>
    <Jumbo h1Title="UX Designer, Developer & Speaker" p="I design and code beautifully simple things, and I love what I do."/>
    <SEO title="Emilio Sánchez - Developer & Designer" />
    <AboutMe />
    <Companies headlineText="Companies I've Collaborated With"/>
    <BlogFeatured />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
