'use client'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
// import { MenuIcon, XIcon } from '@heroicons/react/outline'
// import { ChevronRightIcon } from '@heroicons/react/solid'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Embed() {
  return (
    <div className='relative overflow-hidden'>
      <Popover as='header' className='relative'>
        <div className='bg-gray-900 pt-6 p-4'>
          <nav className='relative max-w-7xl mx-auto flex items-center justify-between px-6' aria-label='Global'>
            <div className='flex items-center flex-1'>
              <div className='flex items-center justify-between w-full'>
                <a href='#'>
                  <span className='sr-only'>Workflow</span>
                  <img
                    className='w-auto h-10'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                    alt=''
                  />
                </a>
                <div className='-mr-2 flex items-center'>
                  <Popover.Button className='bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {/* <MenuIcon className='h-6 w-6' aria-hidden='true' /> */}
                  </Popover.Button>
                </div>
              </div>
              <div className='hidden space-x-8'>
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className='text-base font-medium text-white hover:text-gray-300'>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className='hidden'>
              <a href='#' className='text-base font-medium text-white hover:text-gray-300'>
                Log in
              </a>
              <a
                href='#'
                className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700'
              >
                Start free trial
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel focus className='absolute z-10 top-0 inset-x-0 p-4 transition transform origin-top'>
            <div className='rounded-3xl shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
              <div className='px-5 pt-4 flex items-center justify-between'>
                <div>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt=''
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600'>
                    <span className='sr-only'>Close menu</span>
                    {/* <XIcon className='h-6 w-6' aria-hidden='true' /> */}
                  </Popover.Button>
                </div>
              </div>
              <div className='pt-5 pb-6'>
                <div className='px-2 space-y-1'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='mt-6 px-5'>
                  <a
                    href='#'
                    className='block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700'
                  >
                    Start free trial
                  </a>
                </div>
                <div className='mt-6 px-5'>
                  <p className='text-center text-base font-medium text-gray-500'>
                    Existing customer?{' '}
                    <a href='#' className='text-gray-900 hover:underline'>
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        <div className='pt-10 bg-gray-900 pt-16'>
          <div className='mx-auto max-w-7xl'>
            <div className=''>
              <div className='mx-auto max-w-md px-4 max-w-2xl px-6 text-center'>
                <div className=''>
                  <a
                    href='#'
                    className='inline-flex items-center text-white bg-black rounded-full p-1 pr-2 text-base hover:text-gray-200'
                  >
                    <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full'>
                      We're hiring
                    </span>
                    <span className='ml-4 text-sm'>Visit our careers page</span>
                    {/* <ChevronRightIcon className='ml-2 w-5 h-5 text-gray-500' aria-hidden='true' /> */}
                  </a>
                  <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white mt-5 text-6xl'>
                    <span className='block'>A better way to</span>
                    <span className='block text-indigo-400'>ship web apps</span>
                  </h1>
                  <p className='mt-3 text-base text-gray-300 mt-5 text-xl'>
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat.
                  </p>
                  <div className='mt-10 mt-12'>
                    <form action='#' className='max-w-xl mx-auto'>
                      <div className='flex'>
                        <div className='min-w-0 flex-1'>
                          <label htmlFor='email' className='sr-only'>
                            Email address
                          </label>
                          <input
                            id='email'
                            type='email'
                            placeholder='Enter your email'
                            className='block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900'
                          />
                        </div>
                        <div className='mt-0 ml-3'>
                          <button
                            type='submit'
                            className='block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900'
                          >
                            Start free trial
                          </button>
                        </div>
                      </div>
                      <p className='mt-3 text-sm text-gray-300 mt-4'>
                        Start your free 14-day trial, no credit card necessary. By providing your email, you agree to
                        our{' '}
                        <a href='#' className='font-medium text-white'>
                          terms of service
                        </a>
                        .
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className='mt-12 -mb-48'>
                <div className='mx-auto max-w-md px-4 max-w-2xl px-6'>
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className='w-full'
                    src='https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='mx-auto max-w-md px-4 max-w-2xl px-6' style={{ height: 220 }} />

            <div>
              {/* Hero card */}
              <div className='relative'>
                <div className='absolute inset-x-0 bottom-0 h-1/2' />
                <div className='max-w-7xl mx-auto px-6'>
                  <div className='relative shadow-xl rounded-2xl overflow-hidden'>
                    <div className='absolute inset-0'>
                      <img
                        className='h-full w-full object-cover'
                        src='https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100'
                        alt='People working on laptops'
                      />
                      <div className='absolute inset-0 bg-indigo-700 mix-blend-multiply' />
                    </div>
                    <div className='relative px-4 py-16 px-6 py-24'>
                      <h1 className='text-center text-4xl font-extrabold tracking-tight text-5xl'>
                        <span className='block text-white'>Take control of your</span>
                        <span className='block text-indigo-200'>customer support</span>
                      </h1>
                      <p className='mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 max-w-3xl'>
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                        sunt amet fugiat veniam occaecat fugiat aliqua.
                      </p>
                      <div className='mt-10 max-w-sm mx-auto max-w-none flex justify-center'>
                        <div className='space-y-0 space-y-0 mx-auto inline-grid grid-cols-2 gap-5'>
                          <a
                            href='#'
                            className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 px-8'
                          >
                            Get started
                          </a>
                          <a
                            href='#'
                            className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 px-8'
                          >
                            Live demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// 'use client'

// /* This example requires Tailwind CSS v2.0+ */
// import { Fragment } from 'react'
// import { Popover, Transition } from '@headlessui/react'
// import {
//   BookmarkAltIcon,
//   CalendarIcon,
//   ChartBarIcon,
//   CursorClickIcon,
//   MenuIcon,
//   PhoneIcon,
//   PlayIcon,
//   RefreshIcon,
//   ShieldCheckIcon,
//   SupportIcon,
//   ViewGridIcon,
//   XIcon,
// } from '@heroicons/react/outline'
// import { ChevronDownIcon } from '@heroicons/react/solid'

// const features = [
//   {
//     name: 'Analytics',
//     href: '#',
//     description: 'Get a better understanding of where your traffic is coming from.',
//     icon: ChartBarIcon,
//   },
//   {
//     name: 'Engagement',
//     href: '#',
//     description: 'Speak directly to your customers in a more meaningful way.',
//     icon: CursorClickIcon,
//   },
//   { name: 'Security', href: '#', description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon },
//   {
//     name: 'Integrations',
//     href: '#',
//     description: "Connect with third-party tools that you're already using.",
//     icon: ViewGridIcon,
//   },
//   {
//     name: 'Automations',
//     href: '#',
//     description: 'Build strategic funnels that will drive your customers to convert',
//     icon: RefreshIcon,
//   },
// ]
// const callsToAction = [
//   { name: 'Watch Demo', href: '#', icon: PlayIcon },
//   { name: 'Contact Sales', href: '#', icon: PhoneIcon },
// ]
// const resources = [
//   {
//     name: 'Help Center',
//     description: 'Get all of your questions answered in our forums or contact support.',
//     href: '#',
//     icon: SupportIcon,
//   },
//   {
//     name: 'Guides',
//     description: 'Learn how to maximize our platform to get the most out of it.',
//     href: '#',
//     icon: BookmarkAltIcon,
//   },
//   {
//     name: 'Events',
//     description: 'See what meet-ups and other events we might be planning near you.',
//     href: '#',
//     icon: CalendarIcon,
//   },
//   { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
// ]
// const recentPosts = [
//   { id: 1, name: 'Boost your conversion rate', href: '#' },
//   { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
//   { id: 3, name: 'Improve your customer experience', href: '#' },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   return (
//     <div className='relative bg-gray-50'>
//       <Popover className='relative bg-white shadow'>
//         {({ open }) => (
//           <>
//             <div className='max-w-7xl mx-auto px-4 px-6'>
//               <div className='flex justify-between items-center py-6'>
//                 <div className='flex justify-start'>
//                   <a href='#'>
//                     <span className='sr-only'>Workflow</span>
//                     <img
//                       className='h-8 w-auto h-10'
//                       src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
//                       alt=''
//                     />
//                   </a>
//                 </div>
//                 <div className='-mr-2 -my-2'>
//                   <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
//                     <span className='sr-only'>Open menu</span>
//                     <MenuIcon className='h-6 w-6' aria-hidden='true' />
//                   </Popover.Button>
//                 </div>
//                 <Popover.Group as='nav' className='hidden space-x-10'>
//                   <Popover className='relative'>
//                     {({ open }) => (
//                       <>
//                         <Popover.Button
//                           className={classNames(
//                             open ? 'text-gray-900' : 'text-gray-500',
//                             'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
//                           )}
//                         >
//                           <span>Solutions</span>
//                           <ChevronDownIcon
//                             className={classNames(
//                               open ? 'text-gray-600' : 'text-gray-400',
//                               'ml-2 h-5 w-5 group-hover:text-gray-500',
//                             )}
//                             aria-hidden='true'
//                           />
//                         </Popover.Button>

//                         <Transition
//                           show={open}
//                           as={Fragment}
//                           enter='transition ease-out duration-200'
//                           enterFrom='opacity-0 translate-y-1'
//                           enterTo='opacity-100 translate-y-0'
//                           leave='transition ease-in duration-150'
//                           leaveFrom='opacity-100 translate-y-0'
//                           leaveTo='opacity-0 translate-y-1'
//                         >
//                           <Popover.Panel
//                             static
//                             className='absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md px-0'
//                           >
//                             <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
//                               <div className='relative grid gap-6 bg-white px-5 py-6 gap-8 p-8'>
//                                 {features.map((item) => (
//                                   <a
//                                     key={item.name}
//                                     href={item.href}
//                                     className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
//                                   >
//                                     <item.icon className='flex-shrink-0 h-6 w-6 text-indigo-600' aria-hidden='true' />
//                                     <div className='ml-4'>
//                                       <p className='text-base font-medium text-gray-900'>{item.name}</p>
//                                       <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
//                                     </div>
//                                   </a>
//                                 ))}
//                               </div>
//                               <div className='px-5 py-5 bg-gray-50 space-y-6 flex space-y-0 space-x-10 px-8'>
//                                 {callsToAction.map((item) => (
//                                   <div key={item.name} className='flow-root'>
//                                     <a
//                                       href={item.href}
//                                       className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100'
//                                     >
//                                       <item.icon className='flex-shrink-0 h-6 w-6 text-gray-400' aria-hidden='true' />
//                                       <span className='ml-3'>{item.name}</span>
//                                     </a>
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>
//                           </Popover.Panel>
//                         </Transition>
//                       </>
//                     )}
//                   </Popover>

//                   <a href='#' className='text-base font-medium text-gray-500 hover:text-gray-900'>
//                     Pricing
//                   </a>
//                   <a href='#' className='text-base font-medium text-gray-500 hover:text-gray-900'>
//                     Docs
//                   </a>

//                   <Popover className='relative'>
//                     {({ open }) => (
//                       <>
//                         <Popover.Button
//                           className={classNames(
//                             open ? 'text-gray-900' : 'text-gray-500',
//                             'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
//                           )}
//                         >
//                           <span>More</span>
//                           <ChevronDownIcon
//                             className={classNames(
//                               open ? 'text-gray-600' : 'text-gray-400',
//                               'ml-2 h-5 w-5 group-hover:text-gray-500',
//                             )}
//                             aria-hidden='true'
//                           />
//                         </Popover.Button>

//                         <Transition
//                           show={open}
//                           as={Fragment}
//                           enter='transition ease-out duration-200'
//                           enterFrom='opacity-0 translate-y-1'
//                           enterTo='opacity-100 translate-y-0'
//                           leave='transition ease-in duration-150'
//                           leaveFrom='opacity-100 translate-y-0'
//                           leaveTo='opacity-0 translate-y-1'
//                         >
//                           <Popover.Panel
//                             static
//                             className='absolute left-1/2 z-10 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md px-0'
//                           >
//                             <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
//                               <div className='relative grid gap-6 bg-white px-5 py-6 gap-8 p-8'>
//                                 {resources.map((item) => (
//                                   <a
//                                     key={item.name}
//                                     href={item.href}
//                                     className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
//                                   >
//                                     <item.icon className='flex-shrink-0 h-6 w-6 text-indigo-600' aria-hidden='true' />
//                                     <div className='ml-4'>
//                                       <p className='text-base font-medium text-gray-900'>{item.name}</p>
//                                       <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
//                                     </div>
//                                   </a>
//                                 ))}
//                               </div>
//                               <div className='px-5 py-5 bg-gray-50 px-8 py-8'>
//                                 <div>
//                                   <h3 className='text-sm tracking-wide font-medium text-gray-500 uppercase'>
//                                     Recent Posts
//                                   </h3>
//                                   <ul className='mt-4 space-y-4'>
//                                     {recentPosts.map((item) => (
//                                       <li key={item.id} className='text-base truncate'>
//                                         <a href={item.href} className='font-medium text-gray-900 hover:text-gray-700'>
//                                           {item.name}
//                                         </a>
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 </div>
//                                 <div className='mt-5 text-sm'>
//                                   <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
//                                     {' '}
//                                     View all posts <span aria-hidden='true'>&rarr;</span>
//                                   </a>
//                                 </div>
//                               </div>
//                             </div>
//                           </Popover.Panel>
//                         </Transition>
//                       </>
//                     )}
//                   </Popover>
//                 </Popover.Group>
//                 <div className='hidden items-center justify-end'>
//                   <a href='#' className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
//                     Sign in
//                   </a>
//                   <a
//                     href='#'
//                     className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
//                   >
//                     Sign up
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <Transition
//               show={open}
//               as={Fragment}
//               enter='duration-200 ease-out'
//               enterFrom='opacity-0 scale-95'
//               enterTo='opacity-100 scale-100'
//               leave='duration-100 ease-in'
//               leaveFrom='opacity-100 scale-100'
//               leaveTo='opacity-0 scale-95'
//             >
//               <Popover.Panel
//                 focus
//                 static
//                 className='absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right'
//               >
//                 <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
//                   <div className='pt-5 pb-6 px-5'>
//                     <div className='flex items-center justify-between'>
//                       <div>
//                         <img
//                           className='h-8 w-auto'
//                           src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
//                           alt='Workflow'
//                         />
//                       </div>
//                       <div className='-mr-2'>
//                         <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
//                           <span className='sr-only'>Close menu</span>
//                           <XIcon className='h-6 w-6' aria-hidden='true' />
//                         </Popover.Button>
//                       </div>
//                     </div>
//                     <div className='mt-6'>
//                       <nav className='grid gap-y-8'>
//                         {features.map((item) => (
//                           <a
//                             key={item.name}
//                             href={item.href}
//                             className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
//                           >
//                             <item.icon className='flex-shrink-0 h-6 w-6 text-indigo-600' aria-hidden='true' />
//                             <span className='ml-3 text-base font-medium text-gray-900'>{item.name}</span>
//                           </a>
//                         ))}
//                       </nav>
//                     </div>
//                   </div>
//                   <div className='py-6 px-5 space-y-6'>
//                     <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
//                       <a href='#' className='text-base font-medium text-gray-900 hover:text-gray-700'>
//                         Pricing
//                       </a>

//                       <a href='#' className='text-base font-medium text-gray-900 hover:text-gray-700'>
//                         Docs
//                       </a>
//                       {resources.map((item) => (
//                         <a
//                           key={item.name}
//                           href={item.href}
//                           className='text-base font-medium text-gray-900 hover:text-gray-700'
//                         >
//                           {item.name}
//                         </a>
//                       ))}
//                     </div>
//                     <div>
//                       <a
//                         href='#'
//                         className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
//                       >
//                         Sign up
//                       </a>
//                       <p className='mt-6 text-center text-base font-medium text-gray-500'>
//                         Existing customer?
//                         <a href='#' className='text-indigo-600 hover:text-indigo-500'>
//                           Sign in
//                         </a>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </Popover.Panel>
//             </Transition>
//           </>
//         )}
//       </Popover>

//       <main>
//         <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center'>
//           <div className='px-4 px-8'>
//             <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 text-5xl'>
//               <span className='block'>Data to enrich your</span>{' '}
//               <span className='block text-indigo-600'>online business</span>
//             </h1>
//             <p className='mt-3 max-w-md mx-auto text-lg text-gray-500 text-xl'>
//               Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//               fugiat veniam occaecat fugiat aliqua.
//             </p>
//             <div className='mt-10 flex justify-center'>
//               <div className='mt-3 rounded-md shadow mt-0 ml-3'>
//                 <a
//                   href='#'
//                   className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
//                 >
//                   Get started
//                 </a>
//               </div>
//               <div className='mt-3 rounded-md shadow mt-0 ml-3'>
//                 <a
//                   href='#'
//                   className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50'
//                 >
//                   Live demo
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='relative w-full h-64 h-72'>
//           <img
//             className='absolute inset-0 w-full h-full object-cover'
//             src='https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'
//             alt=''
//           />
//         </div>
//       </main>
//     </div>
//   )
// }
