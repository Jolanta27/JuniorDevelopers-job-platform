import Layout from './components/Layout';
import Link from 'next/link';

const Home = () => {
  return (
    <Layout>
      <nav className="flex justify-between p-8">
        <div>{/*I will insert logo here later*/}</div>
        <div>
          <ul className="flex space-x-4 ">
            <li>
              <Link href="/Employer">Employer</Link>
            </li>
            <li>
              <Link href="/SignIn">Sign In</Link>
            </li>
            <li>
              <Link href="/Registration">Registration</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex flex-col justify-center items-center py-10">
        <h1 className="text-4xl">Launch Your Career in Tech</h1>
        <p className="text-2xl">Empowering Junior Developers</p>
        <p className="text-xl">Your Gateaway To Exciting Tech Opportunities</p>
      </div>
    </Layout>
  );
};
export default Home;
