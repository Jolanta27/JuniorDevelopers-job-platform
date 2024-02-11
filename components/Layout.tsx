import Link from 'next/link';
import SearchForm from './nav/SearchForm';

const Layout = ({ children }) => {
    return (
        <>
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
            <div className='flex flex-col justify-center items-center'>
                <h1>Launch Your Career in Tech</h1>
                <p>Empowering Junior Developers</p>
                <p>Your Gateaway to Exciting Tech Opportunities</p>
            </div>
            <SearchForm />
            <main>
                {children}
            </main>
            <footer>
            </footer>
        </>
    )
}
export default Layout;