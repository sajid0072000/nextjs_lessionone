'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

const Login = () => {
  const router = useRouter()
  const navigate = (path) => {
    router.push('/login'+ path)
  }

  return (
    <div>Login
      <p>
        <Link href='/'>Go to Home</Link>
        </p>
        {/* <button onClick={() => router.push('/')}>Back to Home</button>
        <br/>
        <Link href='/login/loginteacher'>Go to Login Teacher</Link>
        <br/>
        <Link href='/login/loginstudent'>Go to Login Student</Link>
        <br/>
        <button onClick={() => navigate('/loginteacher')}>Login Teacher</button>
        <br/>
        <button onClick={() => navigate('/loginstudent')}>Login Student</button> */}
    </div>
  )
}

export default Login