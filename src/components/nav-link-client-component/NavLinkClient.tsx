"use client"
import React, {FC} from 'react';
import Link from "next/link";
interface IProps {
    path: string,
    children : React.ReactNode
}
const NavLinkClient:FC<IProps> = ({path,children}) => {
    return (
        <div>
         <Link href={path}>{children}</Link>
        </div>
    );
};

export default NavLinkClient;