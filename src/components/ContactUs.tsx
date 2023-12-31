import React from 'react'
import '../styles/contact.css'

const ContactUs = () => {
  return (
    <div className='contact_us'>
        <div className='location'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.644921061427!2d77.66927351482221!3d12.994547990840795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU5JzQwLjQiTiA3N8KwNDAnMTcuMyJF!5e0!3m2!1sen!2sin!4v1688469065724!5m2!1sen!2sin" width="180" height="180" style={{border:'0', borderRadius: '10px'}} loading="lazy"></iframe>            
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-evenly', marginLeft: '1rem' }}>
                <p className='contact_us_contact'>Contact Us</p>
                <p className='address'>Second floor<br/>
                 125, Kaveri Main Road UDAYANAGAR,<br/>
                 Bengaluru, Karnataka 560016
                </p>
                <div style={{ display: 'flex' }}>
                    <img style={{ width: '15px', height: '15px', marginTop: '0.15rem' }} src='/assets/whatsapp.png' alt='whatsapp' />
                    <p className='number'>+91 960620 6893</p>
                </div>
            </div>
        </div>
        <div className='location'>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.326593867404!2d78.39498907503716!3d17.49191638341315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b439496371%3A0x419d95fe997f8d68!2sSri%20veda%20diagnostics!5e0!3m2!1sen!2sin!4v1688471829758!5m2!1sen!2sin" width="180" height="180" style={{border:'0', borderRadius: '10px'}} loading="lazy"></iframe>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-evenly', marginLeft: '1rem' }}>
                <p className='contact_us_contact'>Contact Us</p>
                <p className='address'>MIG-277, Road no:-4<br/>
                 KPHB Phase 1, Kukatpally<br/>
                 Hyderabad, Telangana 500072
                </p>
                <div style={{ display: 'flex' }}>
                    <img style={{ width: '15px', height: '15px', marginTop: '0.15rem' }} src='/assets/whatsapp.png' alt='whatsapp' />
                    <p className='number'>+91 913356 7954</p>
                </div>
            </div>
        </div>
        <div className='footer_links'>
            <p>Privacy</p>
            <p>Help</p>
            <p>Terms</p>
            <p>FAQs</p>
        </div>
        <div className='download'>
            <p className='contact_us_download_app'>Download App</p>
            <div className='contact_us_stores'>
                <div className='playappstore'>
                    <img style={{ width: '20px', height: '20px' }} src='/assets/appstore.png' alt='appstore' />
                    <p>AppStore</p>
                </div>
                <div className='playappstore'>
                    <img style={{ width: '30px', height: '30px' }} src='/assets/playstore.png' alt='playstore' />
                    <p>PlayStore</p>
                </div>
            </div>
            <div className='contact_us_social'>
                <img style={{ width: '30px', height: '30px', cursor: 'pointer' }} src='/assets/fb.png' alt='fb' />
                <img style={{ width: '30px', height: '30px', cursor: 'pointer' }} src='/assets/insta.png' alt='insta' />
                <img style={{ width: '30px', height: '30px', cursor: 'pointer' }} src='/assets/twitter.png' alt='twitter' />
                <img style={{ width: '30px', height: '30px', cursor: 'pointer' }} src='/assets/linkedin.png' alt='linkedin' />
            </div>
        </div>
    </div>
  )
}

export default ContactUs