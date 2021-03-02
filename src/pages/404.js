import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
// Components
import { Layout, SEO } from '../components'

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    text-align: center;

    .link {
      font-size: 20px;
      color: black;
    }


    .title {
      background-color: black;
      color: white;
      font-size: 50px;
      margin-bottom: 20px;
    }
  }
`

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404" />
      <Main>
        <div className='content'>
          <h1 className='title'>
            404. No econtrado
          </h1>
          <Link className='link' to="/">Ir a a inicio</Link>.
        </div>


          {process.env.NODE_ENV === "developmen" ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
      </Main>
    </Layout>
  )
}

export default NotFoundPage
