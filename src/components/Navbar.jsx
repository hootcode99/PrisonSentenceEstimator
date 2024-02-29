import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.webp';
import { useState, useEffect } from 'react';

export function Navbar() {
    const location = useLocation();
    const [typeDirectory, setTypeDirectory] = useState("")
    const [classDirectory, setClassDirectory] = useState("");
    const [sheetDirectory, setSheetDirectory] = useState("");
    
    // This useEffect hook will update the page labels at the top based on the current URL
    useEffect(() => {
        if (location.pathname.includes('drug')) {
            setTypeDirectory("Drug Offense Worksheets");
        } else if (location.pathname.includes('prop')) {
            setTypeDirectory("Property Offense Worksheets");
        } else if (location.pathname.includes('pers')) {
            setTypeDirectory("Personal Offense Worksheets");
        } else{
            setTypeDirectory("");
        }

        if (location.pathname.includes('ABC')) {
            setClassDirectory("Class ABC");
        } else if (location.pathname.includes('D')) {
            setClassDirectory("Class D");
        } else {
            setClassDirectory("");
        }

        if (location.pathname.includes('inout')) {
            setSheetDirectory("Prison In/Out");
        } else if (location.pathname.includes('len')) {
            setSheetDirectory("Sentence Length");
        } else {
            setSheetDirectory("");
        }

    }, [location.pathname]);    

    return (

        <nav>
            <div className='flex-col'>
                <div className='flex items-center bg-primary-content'>
                    {location.pathname !== "/" && <label htmlFor="my-drawer" className="btn btn-info drawer-button ml-36">Select Worksheet</label>}
                    <div className="text-2xl breadcrumbs m-4">
                    <ul className='ml-2'>
                        <li>Home</li> 
                        {typeDirectory != "" && <li>{typeDirectory}</li>} 
                        {classDirectory != "" && <li>{classDirectory}</li>}
                        {sheetDirectory != "" && <li>{sheetDirectory}</li>}
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export function SideBarNav(props) {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                
                {props.children}
            </div> 

            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-2 w-70 min-h-full bg-base-200 text-base-content">

                    <div className="flex justify-center">
                        <img src={logo} alt="logo" className="w-25 h-40 mt-4 mb-7" />
                    </div>
                    
                    <label className="flex cursor-pointer gap-2 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                        <input type="checkbox" value="dark" className="toggle theme-controller"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>

                    <LinkSectionWrapper title="General">
                        <LinkElement to="/" text="Home" />
                    </LinkSectionWrapper>

                    <LinkSectionWrapper title="Drug Offense Worksheets"> 
                        <LinkElement to="/drugworksheets/ABC_inout" text="Class ABC - Prison In/Out" />
                        <LinkElement to="/drugworksheets/ABC_sentencelength" text="Class ABC - Sentence Length" />
                        <LinkElement to="/drugworksheets/D_inout" text="Class D - Prison In/Out" />
                        <LinkElement to="/drugworksheets/D_sentencelength" text="Class D - Sentence Length" />
                    </LinkSectionWrapper>

                    <LinkSectionWrapper title="Property Offense Worksheets">
                        <LinkElement to="/propertyworksheets/ABC_inout" text="Class ABC - Prison In/Out" />
                        <LinkElement to="/propertyworksheets/ABC_sentencelength" text="Class ABC - Sentence Length" />
                        <LinkElement to="/propertyworksheets/D_inout" text="Class D - Prison In/Out" />
                        <LinkElement to="/propertyworksheets/D_sentencelength" text="Class D - Sentence Length" />
                    </LinkSectionWrapper>

                    <LinkSectionWrapper title="Personal Offense Worksheets">
                        <LinkElement to="/personalworksheets/inout" text="Prison In/Out" />
                        <LinkElement to="/personalworksheets/sentencelength" text="Sentence Length" />
                    </LinkSectionWrapper>

                </ul>
            </div>
        </div>
    )
}

function LinkElement(props) {
    return (
        <li>
            <NavLink to={props.to}>{props.text}</NavLink>
        </li>
    )
}

function LinkSectionWrapper(props) {
    return (
        <ul className="menu bg-base-200 w-70 rounded-box">
            <li>
                <h2 className="menu-title text-lg text-info">{props.title}</h2>
                <ul>
                    {props.children}
                </ul>
            </li>
        </ul>
    )
}