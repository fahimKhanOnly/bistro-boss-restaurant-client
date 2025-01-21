import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes';
import '../src/index.css'
import { HelmetProvider } from 'react-helmet-async';
import AuthContext from './provider/AuthContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container mx-auto'>
      <AuthContext>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AuthContext>
    </div>
  </StrictMode>,
)
