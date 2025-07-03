'use client' // Mantendremos esta directiva por simplicidad y compatibilidad futura si agregas lógica aquí.

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps, // Importa el tipo de las props
} from 'next-themes'

// Exporta el ThemeProvider con props por defecto recomendadas
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"           // Añade 'dark' o 'light' al `<html>`
      defaultTheme="system"       // Tema por defecto: el del sistema del usuario
      enableSystem={true}         // Permite la detección del tema del sistema
      disableTransitionOnChange   // Evita transiciones bruscas al cambiar de tema
      {...props}                  // Pasa el resto de las props que se le den
    >
      {children}
    </NextThemesProvider>
  )
}