'use client'
import { Tab } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import Icon from '@/components/dom/Icon'
import { updates } from '@/mocks/updates'
import { experience, faqs } from '@/mocks/faq'
import dynamic from 'next/dynamic'
import { Suspense, useRef } from 'react'
import Loader from '@/components/dom/Loader'
import { generateRandomInteger } from '@/utils/numberUtils'

// const PageLayout = dynamic(() => import('@/components/dom/PageLayout').then((mod) => mod), { ssr: false })
const Updates = dynamic(() => import('./Updates').then((mod) => mod), { ssr: false })
const Experience = dynamic(() => import('./Experience').then((mod) => mod), { ssr: false })
const Faq = dynamic(() => import('./Faq').then((mod) => mod), { ssr: false })
const PageLayout = dynamic(() => import('@/components/dom/PageLayout').then((mod) => mod), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Loader dotVariant={generateRandomInteger(0, 11)} />,
})

const tabNavigation = ['Updates', 'FAQ', 'Experience']

const Main = () => {
  const containerRef = useRef() //   const router = useRouter()
  const router = useRouter()

  return (
    <Suspense fallback={<Loader dotVariant={generateRandomInteger(0, 11)} />}>
      <PageLayout>
        <div className=' p-10' ref={containerRef}>
          <div className='max-w-[58.5rem] mx-auto'>
            <div className='mb-4 h2 md:pr-16 md:h3'>About Me</div>
            <div className='mb-12 body2 text-n-4 md:mb-6 '>
              A highly motivated, passionate, and dependable software engineer with 5 years of experience in both
              frontend and backend development work in both startup and corporate environments. Proficient with modern
              frameworks and technologies such as ReactJS, VueJS, Angular, Next.JS, NodeJS, Python Django, Flask, Java
              Springboot, NodeJS/ExpressJS. Skilled in leading teams through innovation and modernization efforts. An
              innovative and creative individual that has driven efforts to improve processes and workflows of
              companies. Eager to apply my problem-solving skills and willingness to learn new technologies as a
              Frontend Engineer.
            </div>
            <Tab.Group defaultIndex={0}>
              <Tab.List className='mb-12 md:mb-6 space-x-3'>
                {tabNavigation.map((button, index) => (
                  <Tab
                    className='h-10 px-6 rounded-full base1 text-n-4 transition-colors outline-none tap-highlight-color hover:text-n-7 ui-selected:bg-primary-1 ui-selected:!text-n-1 dark:hover:text-n-1'
                    key={index}
                  >
                    {button}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <Updates items={updates} />
                </Tab.Panel>
                <Tab.Panel>
                  <Faq items={faqs} />
                </Tab.Panel>
                <Tab.Panel>
                  <Experience items={experience} />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </PageLayout>
      <View />
    </Suspense>
  )
}

export default Main
