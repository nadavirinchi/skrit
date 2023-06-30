import React, { useEffect, useRef, useState } from 'react'
import { Count } from '../models'
import '../styles/counts.css'
import CountUp from 'react-countup'
import { motion, useAnimation, useInView } from 'framer-motion'

const Counts = () => {
    
    const counts: Count[] = [
        {
            count: 25,
            thou: 'K',
            title: 'Completed Cases',
            description: 'We always provide people a complete solution upon focused of any business'
        },
        {
            count: 17,
            thou: '',
            title: 'Our Office',
            description: 'Our office is a vibrant and collaborative space where ideas flourish and teamwork thrives.'
        },
        {
            count: 86,
            thou: '',
            title: 'Skilled People',
            description: 'The company\'s growth can be attributed to the talented and skilled people it employs.'
        },
        {
            count: 28,
            thou: '',
            title: 'Happy Clients',
            description: 'The success stories of our satisfied clients speak volumes about our dedication and expertise.'
        }
    ]

    const cardRef: any = useRef();
    const controls: any = useAnimation();
    const isInView = useInView(cardRef, { once: true })

    const [counterOn, setCounterOn] = useState(false);

    useEffect(() => {
        if(isInView){
            setCounterOn(true);
        }else{
            setCounterOn(false);
        }
    }, [isInView])

  return (
        <div className='counts'>
            <div>
                <div className='counthou'>
                    <p ref={cardRef}>{counterOn && <CountUp start={0} end={counts[0].count} duration={1} delay={0.5} />}</p>
                    <p>{counts[0].thou}</p>
                    <p>+</p>
                </div>
                <p className='title'>{counts[0].title}</p>
                <p className='description'>{counts[0].description}</p>
            </div>
            <div>
                <div className='counthou'>
                    <p ref={cardRef}>{counterOn && <CountUp start={0} end={counts[1].count} duration={1} delay={0.5} />}</p>
                    <p>{counts[1].thou}</p>
                    <p>+</p>
                </div>
                <p className='title'>{counts[1].title}</p>
                <p className='description'>{counts[1].description}</p>
            </div>
            <div>
                <div className='counthou'>
                    <p ref={cardRef}>{counterOn && <CountUp start={0} end={counts[2].count} duration={1} delay={0.5} />}</p>
                    <p>{counts[2].thou}</p>
                    <p>+</p>
                </div>
                <p className='title'>{counts[2].title}</p>
                <p className='description'>{counts[2].description}</p>
            </div>
            <div>
                <div className='counthou'>
                    <p ref={cardRef}>{counterOn && <CountUp start={0} end={counts[3].count} duration={1} delay={0.5} />}</p>
                    <p>{counts[3].thou}</p>
                    <p>+</p>
                </div>
                <p className='title'>{counts[3].title}</p>
                <p className='description'>{counts[3].description}</p>
            </div>
        </div>
  )
}

export default Counts