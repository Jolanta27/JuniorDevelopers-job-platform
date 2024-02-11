import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <div>
            <nav className="flex justify-between p-8">
            <div>{/*I will insert logo here later*/}
            </div>
                <div>
                <ul  className='flex space-x-4 '>
                    <li>
                        <Link href="/Employer">
                            Employer
                        </Link>
                    </li>
                    <li>
                        <Link href="/Signin">
                        Sign In
                        </Link>
                    </li>
                    <li>
                        <Link href="/Registration">
                            Registration
                        </Link>
                    </li>
                </ul>
                </div>
            </nav>
            <div>
                <h1>Launch Your Career in Tech</h1>
                <p>Empowering Junior Developers</p>
                <p>Your Gateaway to Exciting Tech Opportunities</p>
            </div>
            <main>
                {children}
            </main>
            <footer>
            </footer>
        </div>
    )
}
export default Layout;