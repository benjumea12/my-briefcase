import React, { useState } from "react"
import { graphql } from "gatsby"
// Components
import { Layout, HomeCard, Typography, SEO } from '../components'
// Styles
import { Main, Header, Content } from '../styles/index.styled'
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
// Data
import dataIndex from '../data/index.data'

const IndexPage = ({ data }) => {
  const [openContent, setOpenContent] = useState(false)

  const pageData = data.allProjectsJson.nodes

  return (
    <Layout>
      <SEO title="Home" />
      <Main>
        <Header openContent={openContent}>
          <div className='overlay'>
            <div className='content'>
              <h1 className='title'>{ dataIndex.title }</h1>
              <FontAwesomeIcon icon={faChevronDown} className='icon' onClick={() => setOpenContent(true)} />
            </div>
          </div>
        </Header>

        <Content openContent={openContent}>
          <div className='header'>
            <Typography variant='h1' text='Sobre mi.' />

            <div className='text'>
              <Typography variant='p' text={dataIndex.presentation} />
            </div>

            <a href={dataIndex.cv} target='_blank' rel="noreferrer">Ver mi CV</a>
          </div>

          <div className='proyects'>
              <Typography variant='h2' text='Mis proyectos.' />

            {/* Map all projects pages of the json archive data `src/data/projects` */}
            <div className='list'>
              { pageData.map((card, index) =>
                  <HomeCard
                    key={index}
                    index={index}
                    info={card}
                    openContent={openContent}
                  />
              )}
            </div>
          </div>
        </Content>
      </Main>
    </Layout>
  )
}

export const query = graphql`
    query {
      allProjectsJson(sort: {order: ASC, fields: order}) {
        nodes {
          title
          startText
          startImg
          path
        }
      }
    }
`

export default IndexPage
