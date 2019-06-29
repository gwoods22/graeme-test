import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Header from "../components/header"

const PageTwoTemplateStyle = styled.main`
  h2 {
    padding: 70px 50px;
    font-size: 4rem;
    color: ${p => p.theme.colors.primary};
    .bold {
      font-weight: 700;
    }
  }
  .img-container {
    text-align: center;
  }
`
const PageTwoTemplate = () => {
  return (
    <Layout>
      <Header />
      <PageTwoTemplateStyle>
        <h2>
          Welcome to <span className="bold">Page Two</span>
        </h2>
        <div className="img-container">
          <img src="https://picsum.photos/500/280" alt="placeholder" />
        </div>
      </PageTwoTemplateStyle>
    </Layout>
  )
}

export default PageTwoTemplate
