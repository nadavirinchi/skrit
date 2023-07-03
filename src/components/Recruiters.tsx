import React from 'react'
import '../styles/toprecs.css'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

interface Props{
    src: string,
    name: string,
    location: string
}

const Recruiters = ({src, name, location}: Props) => {


  return (
    <div className='rec_div'>
        <img src={src} alt='company logo' />
        <div className='company_deets'>
            <p className='company_name'>{name}</p>
            <p className='company_location'><LocationOnRoundedIcon style={{ fontSize: '1rem', marginTop: '1px' }} /> {location}</p>
            <div className='stars'>
                <StarRoundedIcon style={{ color: '#FFC700', fontSize: '1.25rem' }} />
                <StarRoundedIcon style={{ color: '#FFC700', fontSize: '1.25rem' }} />
                <StarRoundedIcon style={{ color: '#FFC700', fontSize: '1.25rem' }} />
                <StarRoundedIcon style={{ color: '#FFC700', fontSize: '1.25rem' }} />
                <StarRoundedIcon style={{ color: '#FFC700', fontSize: '1.25rem' }} />
            </div>
        </div>
    </div>
  )
}

export default Recruiters