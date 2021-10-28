import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {
    children: React.ReactNode
}
/* <AppShell/> =========================================================== */
export default function AppShell(prop: Prop) {
    const { children } = prop;
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}
AppShell.defaultProps = {}