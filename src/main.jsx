import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            refetchOnWindowFocus:false, //disables refetch everytime you focus the window
        },
    },   
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client = {queryClient}>
        <BrowserRouter>
            <App /> 
        </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
