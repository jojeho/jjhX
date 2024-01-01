'use client'
import type { Metadata } from 'next'
import './globals.css'

import { useEffect, useState } from 'react';
import  client from "./client"
import {  ApolloProvider } from '@apollo/client';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    
    <html >
      <body >
         <ApolloProvider client={client}>
                {
                    children
                }
          </ApolloProvider>
        
        </body>
    </html>
  )
}
