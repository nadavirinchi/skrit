import React from 'react'
import '../styles/ourservices.css'
import { motion, useAnimation, useInView } from 'framer-motion'

interface Props{
    src: string,
    service: string,
    delay: number
}

const Services = ({ src, service, delay }: Props) => {

    const cardRef: any = React.useRef();
    const controls: any = useAnimation();
    const isInView = useInView(cardRef, { once: true })

    React.useEffect(() => {
        if(isInView){
            controls.start('visible')
        }
    }, [isInView])

  return (
    <motion.div 
        className='services_service'
        ref={cardRef}
        variants={{
            hidden: { opacity: 0, z: -100 },
            visible: { opacity: 1, z: 0 }
        }}
        initial='hidden'
        animate={controls}
        transition={{ duration: 1, delay: delay }}
    >
        <img src={src} alt='service' />
        <p>{service}</p>
    </motion.div>
  )
}

export default Services