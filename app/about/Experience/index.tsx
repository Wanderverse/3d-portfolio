'use client'

import FaqItem from '@/components/dom/FaqItem'
import Image from '@/components/dom/Image'

type ExperienceItems = {
  id: string
  title: string
  content: string
  defaultOpen: boolean
}

type ExperienceProps = {
  items: ExperienceItems[]
}

const Experience = ({ items }: ExperienceProps) => (
  <>
    <div>
      {items.map((x) => (
        <FaqItem item={x} key={x.id} />
      ))}
    </div>
  </>
)

export default Experience
