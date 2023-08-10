import React from 'react';
import { Routing } from './Routing';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <QueryClientProvider client={new QueryClient()}>
          <BrowserRouter>
            <Routing />
          </BrowserRouter>
        </QueryClientProvider>
      </ChakraProvider>
    </React.StrictMode>
  );
}
