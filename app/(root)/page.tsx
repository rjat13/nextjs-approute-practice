import { UserButton } from '@clerk/nextjs'


export default function Home() {
  return (
    <main>
      <p className='text-white'>Spread</p>
      <UserButton afterSignOutUrl='/' />
    </main>
  )
}
