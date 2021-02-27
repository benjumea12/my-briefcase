import React, { useState } from "react"
// Components
import { Layout, SEO, Typography } from '../components'
// Styles
import { Main, Header, Content } from '../styles/index.styled'
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
// Data
import dataIndex from '../data/index.data'


// markup
const IndexPage = () => {
  const [openContent, setOpenContent] = useState(false)

  return (
    <Layout>
      <SEO title="Home" />
      <Main>
        <Header openContent={openContent}>
          <div className='overlay'>
            <div className='content'>
              <h1 className='title'>{dataIndex.title}</h1>
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

          </div>
        </Content>
      </Main>
    </Layout>
  )
}

export default IndexPage
