import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbo from "../components/Jumbo"
import AboutMe from "../components/AboutMe";
import Companies from "../components/Companies"
import BlogFeatured from "../components/BlogFeatured";
import Portfolio from "../components/Portfolio";



const IndexPage = () => (
  <Layout>
    <Jumbo h1Title="UX Designer, Developer & Speaker" p="I design and code beautifully simple things, and I love what I do."/>
    <SEO title="Emilio Sánchez - Developer & Designer" />
    <AboutMe />
    {/* <Portfolio /> */}
    <Companies headlineText="Companies I've Collaborated With"/>
    <BlogFeatured />
  </Layout>
)

// var readTime = () => {
//   if (document.getElementById('pruebaTime').lenght  > 10  ) {
//     console.log('5minutos')
//   }
//   else {
//     console.log('12minutos')
//   }
// }

// readTime();

export default IndexPage
