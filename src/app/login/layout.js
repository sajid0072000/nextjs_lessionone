'use client'
import Link from "next/link";
import './login.css'

// get path
import { usePathname } from "next/navigation";

export default function layout({ children }) {
  const pathName = usePathname()

  return (
    <div>
      <h1 className="heading">Common Layout for all Login component</h1>
      {
        pathName !=="/login/loginteacher" ? 
        <ul className="login-menu">
        <li><h4>Login Navbar</h4></li>
        <li><Link href='/login/loginstudent'>Student Login</Link></li>
        <li><Link href='/login/loginteacher'>Teacher Login</Link></li>
      </ul>:"Nothing Here"
      }
      {children}
    </div>
  );
}
