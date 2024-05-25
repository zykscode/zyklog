import Link from 'next/link'
import PageLogo from './page-logo'

const Breadcrumbs = () => {
  console.log({ todo: 'add site name' })
  return (
    <div className="breadcrumbs">
      <Link href={`/`} className="breadcrumb active cursor-pointer ">
        <PageLogo />
        <span className="hidden md:block  ">Zykson.com</span>
      </Link>
    </div>
  )
}

export default Breadcrumbs
