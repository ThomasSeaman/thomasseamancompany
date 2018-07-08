import React from 'react';
import {Navbar,NavItem} from 'react-materialize';
import './Nav.css';

const Nav = () => (
    <div>
        <Navbar brand='Thomas Seaman Company' right>
            <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
            <NavItem href='components.html'>Components</NavItem>
        </Navbar>
    </div>
);

export default Nav;