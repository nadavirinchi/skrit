import React from 'react'
import '../styles/toprecs.css'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Company } from '../models';
import Recruiters from './Recruiters';

const TopRecruiters = () => {


    const recruiters: Company[] = [
        {
            src: '/assets/ibm.png',
            name: 'IBM',
            location: 'Hyderabad'
        },
        {
            src: '/assets/uber.png',
            name: 'UBER',
            location: 'Hyderabad'
        },
        {
            src: '/assets/amazon.png',
            name: 'AMAZON',
            location: 'Hyderabad'
        },
        {
            src: '/assets/infy.png',
            name: 'INFOSYS',
            location: 'Hyderabad'
        }
    ]

  return (
    <div className='toprecs'>
        <div>
            <p className='toprecs_title'>Top Recruiters</p>
            <p className='toprecs_caption'>Discover your next career move, freelance gig, or internship</p>
        </div>
        <div className='toprecs_arrows'>
            <ArrowBackIosNewRoundedIcon className='toprecs_arrow' style={{ fontSize: '0.75rem' }} />
            <ArrowForwardIosRoundedIcon className='toprecs_arrow' style={{ fontSize: '0.75rem' }} />
        </div>
        <div className='companies'>
            {recruiters.map((recruiter) => {
                return <Recruiters src={recruiter.src} name={recruiter.name} location={recruiter.location} />
            })}
        </div>
    </div>
  )
}

export default TopRecruiters