import React from "react";

const Layout = ({ children, header, sidebar }) => {
    return (
        <div>
            <header>{header}</header>
            <aside>{sidebar}</aside>
            <main>{children}</main>
        </div>
    )
}
export default Layout;