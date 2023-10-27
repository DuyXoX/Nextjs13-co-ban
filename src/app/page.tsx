import Link from 'next/link'
import css from '@/styles/app.module.css'
import x from '@/styles/x.module.css'
import y from "@/styles/y.module.css"

export default function Home() {
  return (
    <div>
      <div className={x['red']}>Test css X
        <Link href={'/admin'} className={css['red']}>Admin</Link>
      </div>
      <div>
        <Link href={'/user'}>User</Link>
      </div>
    </div>
  )
}
