import React from 'react';
import NavLinkClient from "@/components/nav-link-client-component/NavLinkClient";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLinkClient path={"/"}>home</NavLinkClient>
                </li>

                <li>
                    <NavLinkClient path={"/movies"}>movies</NavLinkClient>
                </li>

                <li>
                    <NavLinkClient path={"/tv"}>tv</NavLinkClient>
                </li>
            </ul>
        </div>
    );
};

export default HeaderComponent;