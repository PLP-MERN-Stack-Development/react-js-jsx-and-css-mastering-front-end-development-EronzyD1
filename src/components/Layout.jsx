import Header from './Header.jsx';
import Footer from './Footer.jsx';
export default function Layout({ children }){ return (<div className='min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100'><Header /><main className='mx-auto max-w-6xl px-4 py-6'>{children}</main><Footer /></div>);}