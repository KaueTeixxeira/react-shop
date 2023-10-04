import { useEffect} from 'react'

import "./Title.css"
const Title = ({title}) => {

  return (
    <div className='carousel_title'>
        <h2 className='tittle'>{title}</h2>
        <div className='line'></div>
      </div>
  )
  
}

export default Title