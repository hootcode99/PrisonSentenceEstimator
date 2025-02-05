import logo_github from '../assets/githublogo.svg';
import logo_linkedin from '../assets/linkedin.svg';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer footer-center p-10 bg-base-100 text-base-content rounded mt-12">
            <div className="grid grid-flow-col gap-4">
                <a href="https://github.com/hootcode99/PrisonSentenceEstimator"><img src={logo_github} alt="github link" className='h-12 w-12'/></a>
                <a href="https://www.linkedin.com/in/mwilliams2023/"><img src={logo_linkedin} alt="github link" className='h-12 w-12'/></a>
            </div>

            <aside>
                <p>Copyright © {currentYear} - All right reserved by Michael Williams</p>
                <p className="text-md">To report bugs, please contact me at mwilliams606@protonmail.com</p>
            </aside>
        </footer>
    )
}