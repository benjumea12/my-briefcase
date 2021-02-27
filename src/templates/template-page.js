import React from "react"
import { graphql, Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// Components
import { Layout, SEO, Typography, Image } from '../components'
// Styles
import { Main } from './template.styled'

const TemplatePage = ({ data }) => {

    const page = data.projectsJson

    return (
        <Layout>
            <SEO title={page.title} />
            <Main>
               <section className='header'>
                   <Link to={`/`} className='return'>
                            <FontAwesomeIcon className='icon' icon={faArrowLeft} />
                   </Link>
                    <Typography variant='h1' text={page.title} />

                    <div className='content'>
                        <div className='img'>
                            <Image img={page.startImg} />
                        </div>
                        <div className='presentation'>
                                <Typography variant='p' text={page.presentation} />
                        </div>
                    </div>
               </section>

                {
                    page.description !== '' &&
                    <section className='description'>

                        <div className='text'>
                            <Typography variant='p' text={page.description} />
                        </div>
                    </section>
                }
                
                {
                    page.development !== '' && 
                    <section className='development'>
                        <Typography variant='h2' text='Desarrollo' />

                        <div className='text'>
                            <Typography variant='p' text={page.development} />
                        </div>
                    </section>
                }

                {
                    page.links.length > 0 && 
                    <section className='links'>
                        <Typography variant='h2' text='Links' />

                        <div className='text'>
                            { page.links.map((item, index ) => (
                                <a href={`${item.link}`} target='_blank' rel="noreferrer">{ item.name }</a>
                            )) }
                            
                            {
                                page.addText &&
                                <div className='text'>
                                    <Typography variant='p' text={page.addText} />
                                </div>
                            }
                        </div>
                    </section>
                }

               <section className='gallery'>
                    <Typography variant='h2' text='Galería' />

                    {
                        page.gallery.map((section, index) => (
                            <div className='section' key={`section${index}`}>
                                <h3>{ section.name }</h3>

                                <div className='images'>
                                    {
                                        section.images.map((image, indexImg) => (
                                            <Image 
                                                img={image} 
                                                width='20em' 
                                                delay={indexImg}
                                                key={`img-${index}-${indexImg}`} />
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
               </section>
            </Main>
        </Layout>
    )
}

export const query = graphql`
    query ($project: String!) {
        projectsJson(path: {eq: $project}) {
            description
            development
            path
            presentation
            startImg
            title
            addText
            links {
                name
                link
            }
            gallery {
                name
                images
            }
        }
    }
`

export default TemplatePage