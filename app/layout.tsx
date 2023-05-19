'use client'
import { Layout } from '@/components/dom/Layout'
import '@/global.css'

import { Toaster, resolveValue } from 'react-hot-toast'
import { Inter, Karla } from 'next/font/google'
import { ColorModeScript, ColorModeProvider } from '@chakra-ui/color-mode'

const inter = Inter({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  display: 'block',
  variable: '--font-inter',
})

const karla = Karla({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'block',
  variable: '--font-karla',
})
// export const metadata = {
//   title: 'Next.js + Three.js',
//   description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
// }

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <style jsx global>{`
        html {
          font-family: ${karla.style.fontFamily};
        }
        #headlessui-portal-root {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <head />
      <body className={`${karla.variable} ${inter.variable} font-sans`}>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <ColorModeProvider>
          <ColorModeScript initialColorMode='system' key='chakra-ui-no-flash' storageKey='chakra-ui-color-mode' />
          <Layout>{children}</Layout>
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
