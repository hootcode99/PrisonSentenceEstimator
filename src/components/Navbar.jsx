import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.webp';

export default function Navbar() {
    return (

        <nav>
            <div className='flex bg-primary-content items-center'>
            <img src={logo} alt="logo" className="w-30 h-40 m-4" />
            <details className="dropdown">
                <summary className="m-4 btn text-xl">Drug Offenses</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <LinkElement to="/DrugWorksheetABC_InOut" text="Class ABC - Prison In/Out" />
                    <LinkElement to="/DrugWorksheetABC_SentenceLength" text="Class ABC - Sent. Length" />
                    <LinkElement to="/DrugWorksheetD_InOut" text="Class D - Prison In/Out" />
                    <LinkElement to="/DrugWorksheetD_SentenceLength" text="Class D - Sent. Length" />
                </ul>
            </details>

            <details className="dropdown">
                <summary className="m-4 btn text-xl">Property Offenses</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <LinkElement to="/PropertyWorksheetABC_InOut" text="Class ABC - Prison In/Out" />
                    <LinkElement to="/PropertyWorksheetABC_SentenceLength" text="Class ABC - Sent. Length" />
                    <LinkElement to="/PropertyWorksheetD_InOut" text="Class D - Prison In/Out" />
                    <LinkElement to="/PropertyWorksheetD_SentenceLength" text="Class D - Sent. Length" />
                </ul>
            </details>

            <details className="dropdown">
                <summary className="m-4 btn text-xl">Personal Offenses</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <LinkElement to="/PersonalWorksheet_InOut" text="Prison In/Out" />
                    <LinkElement to="/PersonalWorksheet_SentenceLength" text="Sentence Length" />
                </ul>
            </details>

            <label className="flex cursor-pointer gap-2 ml-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
            </div>
        </nav>
    )
}

function LinkElement(props) {
    return (
        <li>
            <NavLink to={props.to}>{props.text}</NavLink>
        </li>
    )
}