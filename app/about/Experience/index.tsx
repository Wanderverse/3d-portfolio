'use client'

import FaqItem from '@/components/dom/FaqItem'
import Image from '@/components/dom/Image'

type ExperienceItems = {
  id: string
  title: string
  subtitle: string
  content: any
  defaultOpen: boolean
}

type ExperienceProps = {
  items: ExperienceItems[]
}

const Experience = ({ items }: any) => (
  <>
    <div>
      {items.map((x: any) => (
        <FaqItem item={x} key={x.id} />
      ))}
    </div>
  </>
)

export default Experience
