'use client'
import { Tab } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import Icon from '@/components/dom/Icon'
import { updates } from '@/mocks/updates'
import { experience, faqs } from '@/mocks/faq'
import dynamic from 'next/dynamic'
import { Suspense, useRef, useState } from 'react'
import Loader from '@/components/dom/Loader'
import { generateRandomInteger } from '@/utils/numberUtils'
import { useMediaQuery } from 'react-responsive'

const Updates = dynamic(() => import('./Updates').then((mod) => mod), { ssr: false })
const Experience = dynamic(() => import('./Experience').then((mod) => mod), { ssr: false })
const Faq = dynamic(() => import('./Faq').then((mod) => mod), { ssr: false })
const PageLayout = dynamic(() => import('@/components/dom/PageLayout').then((mod) => mod), { ssr: false })
const View = dynamic(() => import('@/components/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Loader dotVariant={generateRandomInteger(0, 11)} />,
})

const tabNavigation = ['Updates', 'FAQ', 'Experience']

const Main = () => {
  const containerRef = useRef(null)
  const isMobile = useMediaQuery({
    query: '(min-width: 767px)',
  })

  const isDesktop = useMediaQuery({
    query: '(min-width: 1179px)',
  })
  return (
    <Suspense fallback={<Loader dotVariant={generateRandomInteger(0, 11)} />}>
      <PageLayout>
        <div className=' p-10 bg-n-3 dark:bg-n-6 w-full h-full' ref={containerRef}>
          <div className='max-w-[58.5rem] mx-auto'>
            <div className='mb-4 h2 md:pr-16 md:h3'>About Me</div>
            <div className='mb-12 body2 text-n-5 dark:text-n-3 md:mb-6 '>
              {`An avid Creative Technologist operating at the Intersection of Art and AI, I bring a fresh, unique
              perspective to software engineering with 5 years of rich experience. Just as an artist sees a canvas, I
              view my screen as a platform for creating, refining, and innovating. To me, "Art and code are simply two
              languages telling the same story of creation." Every line of code I write reflects a stroke of creativity,
              sculpting solutions from the marble block of challenges, and drawing a vivid picture of possibilities.
             `}
              <br />
              <br />
              {`Much like the creation of art, my coding process involves breathing life into an idea, designing and
              crafting with meticulous care. I take pride in leading teams through innovative endeavors in startup and
              corporate environments alike, always pushing for process improvement and modernization. This zest for
              creative innovation has seen me build and deploy elegant solutions using modern frameworks and
              technologies, always striving for simplicity amid complexity.`}
              <br />
              <br />
              {`I believe, "Great software, like great art, is never finished—only abandoned." Hence, I am
              consistently driven to learn, adapt and reinvent in this ever-evolving tech space. As an innovative
              software engineer, I remain eager to leverage my problem-solving skills and am continually ready to
              embrace new technologies. I look forward to exploring the symphony where the rhythm of art and the melody
              of code harmoniously converge, crafting digital masterpieces that inspire and captivate.  `}
            </div>
            <Tab.Group defaultIndex={0}>
              <Tab.List className='mb-12 md:mb-6 space-x-3'>
                {tabNavigation.map((button, index) => (
                  <Tab
                    className='h-10 px-6 rounded-full base1 text-n-4 transition-colors outline-none tap-highlight-color hover:text-primary-1 ui-selected:bg-primary-1 ui-selected:!text-n-1 dark:hover:text-n-1'
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
