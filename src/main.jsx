import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes';
import '../src/index.css'
import { HelmetProvider } from 'react-helmet-async';
import AuthContext from './provider/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container mx-auto'>
      <AuthContext>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </HelmetProvider>
      </AuthContext>
    </div>
  </StrictMode>,
)
