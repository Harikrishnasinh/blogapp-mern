
'use client';

import { Footer } from 'flowbite-react';

export default function Foot() {
  return (
    <Footer container className=''>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          {/*<Footer.Brand
            href="https://codeatnow.com"
            src="#"
            alt="Flowbite Logo"
            name="BlogApp"
  />*/}
  <h1 className='text-2xl font-medium'><span className='text-violet-700'>Blog</span>App</h1>
  <Footer.Copyright href="https://www.codeatnow.com" by="CodeAtNow" year={2022} />
        </div>  
      </div>
    </Footer>
  );
}