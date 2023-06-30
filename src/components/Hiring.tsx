import React from 'react'
import '../styles/hiring.css'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Button } from '@mui/material';

const Hiring = () => {
  return (
    <div className='hiring'>
      <div className='we_are'>
        <img src='/assets/hiringimage.png' alt='hiring image' />
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <p className='we'>WE ARE</p>
          <p className='hir'>HIRING</p>
        </div>
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: '2rem' }}>
          <div style={{ display: 'flex', marginRight: '3rem' }}>
            <p className='lets'>Let's Work</p>
            <p className='tog'>Together &</p>
          </div>
          <div style={{ display: 'flex', marginLeft: '3rem' }}>
            <p className='exp'>Explore</p>
            <p className='opp'>Opportunities</p>
          </div>
        </div>
        <Button
          style={{
            background: '#2228BB',
            height: '35px',
            width: '120px',
            color: 'white',
            fontSize: '0.75rem',
            textTransform: 'none',
            marginTop: '4rem',
            marginRight: '4rem'
          }}
        >
          <TaskAltIcon style={{ marginRight: '20px', fontSize: '1rem' }} /> Apply
        </Button>
      </div>
    </div>
  )
}

export default Hiring