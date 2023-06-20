'use client'
import { StrictMode, ReactNode } from 'react'
import { Layout } from '@/components/Layout'
import '@/global.css'
import { Toaster, resolveValue } from 'react-hot-toast'
import { ColorModeScript, ColorModeProvider } from '@chakra-ui/color-mode'
import { Tomorrow } from 'next/font/google'
import { Suspense } from 'react'

const tomorrow = Tomorrow({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'block',
  variable: '--font-tomorrow',
})

interface RootLayoutProps {
  children: ReactNode
}
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en' className='antialiased'>
      <style jsx global>{`
        html {
          font-family: ${tomorrow.style.fontFamily};
        }
        #headlessui-portal-root {
          font-family: ${tomorrow.style.fontFamily};
        }
      `}</style>
      <head />
      <body className={`${tomorrow.variable} font-sans bg-[#0e031a]`}>
        <ColorModeProvider>
          <ColorModeScript initialColorMode='system' key='chakra-ui-no-flash' storageKey='chakra-ui-color-mode' />
          <Suspense>
            <Layout>{children}</Layout>
          </Suspense>
          <Toaster
            containerStyle={{
              bottom: 40,
              left: 20,
              right: 20,
            }}
            position='bottom-center'
            gutter={10}
            toastOptions={{
              duration: 2000,
            }}
          >
            {(t) => (
              <div
                style={{
                  opacity: t.visible ? 1 : 0,
                  transform: t.visible ? 'translatey(0)' : 'translatey(0.75rem)',
                  transition: 'all .2s',
                }}
              >
                {resolveValue(t.message, t)}
              </div>
            )}
          </Toaster>
        </ColorModeProvider>
      </body>
    </html>
  )
}

export default RootLayout
