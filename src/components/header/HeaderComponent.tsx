import React from 'react';
import NavLinkClient from "@/components/nav-link-client-component/NavLinkClient";
import "@/styles/style.navigator.css"
import "@/styles/style.header.css"
import Person3Icon from '@mui/icons-material/Person3';
import ThemeSwitcher from "@/components/themeSwitcher/themeSwitcher";

const HeaderComponent = () => {
    return (
        <div className={"header-wrap"}>
            <div className={"navigator-wrap"}>
                <NavLinkClient path={"/movies/"}> <button className={"navigator-button"}>movies</button> </NavLinkClient>
            </div>
            <div className={"icons-wrap"}>
                <Person3Icon className={"icon"} />
                <ThemeSwitcher />
            </div>
        </div>
    );
};

export default HeaderComponent;
