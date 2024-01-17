"use client"
import React from 'react'

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NextUIProvider } from '@nextui-org/system'
import { Toaster } from "./ui/sonner";


export default function Providers({ children, ...props }: ThemeProviderProps) {
   
  const queryClient  = new QueryClient()

  return (
    <NextThemesProvider {...props}
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
      <QueryClientProvider client={queryClient}>
  
      <NextUIProvider>
        {children}
        <Toaster richColors position='top-right' theme='system' />
      </NextUIProvider>
      </QueryClientProvider>
    </NextThemesProvider>
    )
}
