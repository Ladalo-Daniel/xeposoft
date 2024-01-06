"use client"
import React from 'react'

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export default function Providers({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    {children}
    </NextThemesProvider>
}
