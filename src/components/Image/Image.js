import React, {useState} from 'react'
import { Main, ModalMain } from './Image.styled'

import { Modal } from '../index'

const Image = (props) => {
  const {img, delay, width} = props
  const [openImg, setOpenImg] = useState(false)

  return (
    <React.Fragment>
      <Main width={width} delay={delay !== undefined ? delay : 0} onClick={() => setOpenImg(true)}>
        <div className='card'>
          <div className='border'></div>
          <div className='image'>
            <img src={`${img}`} alt='imagen' />
          </div>
        </div>
      </Main>
      {
        openImg && <Modal open={openImg}>
          <ModalMain onClick={() => setOpenImg(false)}>
            <div className='overlay'></div>
            <img src={`${img}`} className='image' alt='imagen' />
          </ModalMain>
        </Modal>
      }
    </React.Fragment>
  )
}

export default Image