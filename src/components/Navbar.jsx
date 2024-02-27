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