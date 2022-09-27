
import React, { useState } from 'react';

 const GoogleForm = () => {
    return(
        <div className='flex w-screen h-screen my-4'>
            <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSf7y9YcrW9Xnx2KAaKMjILeS-2gCl-dQNvMc9Kwpzgx6fC7tw/viewform?embedded=true" 
                width="95%" 
                height="1106" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0">
                Cargando…
            </iframe>
        </div>
  );
};

export default GoogleForm