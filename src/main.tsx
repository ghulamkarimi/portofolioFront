import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.tsx'

import { ContactProvider } from './context/ContactContext.tsx'

createRoot(document.getElementById('root')!).render(
  <ContactProvider>
    <RouterProvider router={router} />
  </ContactProvider>
   
)
