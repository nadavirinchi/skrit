import React from 'react'
import '../styles/feedback.css'
import { Button, TextField } from '@mui/material'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import InputAdornment from '@mui/material/InputAdornment';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { motion, useAnimation, useInView } from 'framer-motion'

const Feedback = () => {

    const cardRef: any = React.useRef();
    const controls: any = useAnimation();
    const isInView = useInView(cardRef, { once: true })

    React.useEffect(() => {
        if(isInView){
            controls.start('visible')
        }
    }, [isInView])

  return (
    <div className='feedback'>
        <motion.div 
            className='subscribe'
            ref={cardRef}
            variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 }
            }}
            initial='hidden'
            animate={controls}
            transition={{ duration: 1, delay: 0.25 }}
        >
            <div className='discover'>
                <img style={{ marginTop: '1rem' }} src='/assets/feed1.png' alt='pic 1' />
                <p>Discover More: Sign up for Our <br /> 
                Newsletter and Expand Your Horizons</p>
                <img style={{ marginTop: '2rem' }} src='assets/feed2.png' alt='pic 2' />
            </div>
            <TextField 
                style={{
                    width: '50%',
                    marginLeft: '15rem',
                    marginTop: '2rem',
                    background: 'white',
                    borderRadius: '5px'
                }}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                         <EmailRoundedIcon style={{ color: 'gray', marginRight: '5rem' }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position='end'>
                            <Button
                                style={{
                                    background: '#2228BB',
                                    height: '35px',
                                    width: '120px',
                                    color: 'white',
                                    fontSize: '0.75rem',
                                    textTransform: 'none',
                                }}
                                >
                                <TaskAltIcon style={{ marginRight: '20px', fontSize: '1rem' }} /> Subscribe
                            </Button>
                        </InputAdornment>
                    )
                  }}
                variant='outlined' 
                placeholder='Enter Your Email Here...' 
            >
               
            </TextField>
            <div className='discover'>
                <img style={{ marginTop: '1rem', marginLeft: '-6rem' }} src='/assets/feed3.png' alt='pic 1' />
                <img style={{ marginTop: '2rem', marginLeft: '26rem' }} src='assets/feed4.png' alt='pic 2' />
            </div>
        </motion.div>
    </div>
  )
}

export default Feedback