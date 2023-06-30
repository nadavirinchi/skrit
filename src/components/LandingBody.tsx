import React, { useEffect, useRef } from 'react'
import '../styles/landingbody.css'
import { motion, useAnimation, useInView } from 'framer-motion'

const LandingBody = () => {

    const cardRef: any = useRef();
    const controls: any = useAnimation();
    const isInView = useInView(cardRef, { once: true })

    useEffect(() => {
        if(isInView){
            controls.start('visible')
        }
    }, [isInView])

  return (
    <div className='landing_body'>
        <div className='landing_texts'>
            <motion.p 
                ref={cardRef}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial='hidden'
                animate={controls}
                transition={{ duration: 1, delay: 0.25 }}
                className='text_1'
            >Streamlining Recruitment <br />
                for Efficient Business <br />
                Operations.
            </motion.p>
            <motion.p 
                ref={cardRef}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial='hidden'
                animate={controls}
                transition={{ duration: 1, delay: 0.5 }}
                className='text_2'
            >Building Bridges Between <br /> 
                Job Seekers and <br />
                Employers.
            </motion.p>
            <motion.p 
                ref={cardRef}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial='hidden'
                animate={controls}
                transition={{ duration: 1, delay: 0.75 }}
                className='text_3'
            >Each month, more than 3 million job <br />
                seekers turn to website in their search for work, <br />
                making over 140,000 applications <br />
                every single day
            </motion.p>
        </div>
        <motion.div 
            ref={cardRef}
            variants={{
                hidden: { opacity: 0, z: -100 },
                visible: { opacity: 1, z: 0 }
            }}
            initial='hidden'
            animate={controls}
            transition={{ duration: 1, delay: 0.5 }}
            className='landing_img'
        >
            <img src='/assets/landimage1.png' alt='landing image' />
        </motion.div>
    </div>
  )
}

export default LandingBody