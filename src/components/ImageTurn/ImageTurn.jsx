import PropTypes from 'prop-types'
import './ImageTurn.css'
import { useState } from 'react'

const ImageTurn = ({ src, alt }) => {
  const [rotated, setRotate] = useState(false)
  function handleClick() {
    console.log('click')
    setRotate(!rotated)
    console.log(rotated)
    return rotated
  }
  return (
    <figure className={rotated ? 'rotate' : ''}>
      <img src={src} alt={alt} onClick={handleClick} />
    </figure>
  )
}

ImageTurn.propTypes = { src: PropTypes.string, alt: PropTypes.string }

export default ImageTurn
