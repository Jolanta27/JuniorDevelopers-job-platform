import Link from 'next/link';

const Button = () => {
    return (
        <Link href='/createJobForm'>
            <div className='mt-10 bg-bg-color'>
             <button className='text-white bg-black p-8 rounded-2xl hover:bg-black/65 transition'>
                Post a Job
            </button>
            </div>
        </Link>
    );
}
export default Button;