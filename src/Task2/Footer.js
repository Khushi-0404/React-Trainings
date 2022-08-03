import React from 'react';
import './footer.css'
export default function Footer() {
  return (
    <footer className='footer'>
      <div className='p-4 pb-0'>
        <form action=''>
          <div >
            <div size='auto' className='sentence-2'>
              <p className='sentence'>
                <strong>Subscribe for more</strong>
              </p>
              <input type='text' class='text' label='Email address' />
            </div>

            <div  className='textnew'>
              
            </div>

            <div size='auto'>
              <button className='subscribe'>Subscribe</button>
            </div>
          </div>
        </form>
      </div>

      
    </footer>
  );
}