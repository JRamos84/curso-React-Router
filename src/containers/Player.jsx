import React from 'react'
import '../assets/styles/components/Player.scss'
import { useNavigate } from 'react-router-dom'

const Player = ()=>{
const navigate = useNavigate()
    return (
<div className='Player'>
<video controls autoPlay>
    <source src='' type='video/mp4' />
</video>
<div className="Player-back">
    <button type='button' onClick={()=>navigate(-1)}>Regresar</button>
</div>
</div>
    )
}

export default Player