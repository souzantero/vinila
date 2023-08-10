import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './Routing';

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
