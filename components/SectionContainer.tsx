import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <div className="notion app">
      <div className="viewport"></div>
      <div className="frame">{children}</div>
    </div>
  )
}
