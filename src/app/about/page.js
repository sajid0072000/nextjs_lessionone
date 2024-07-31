'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const About = () => {
  const route = useRouter()
  return (
    <div>
      <h1>About Page</h1>
      <br/>
      <Link href='/'>Back to Home</Link>
      <button onClick={() => route.push('/about/aboutstudent')}>Go to Aboutstudent</button>
    </div>
  )
}

export default About