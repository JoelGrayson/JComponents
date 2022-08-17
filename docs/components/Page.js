import Header from '@jcomponents/header';
import Container from '@jcomponents/container';
import { Nav, NavItem } from '@jcomponents/nav';
import Link from 'next/link';

export default function Home({children}) {
    return (<>
        <Header color='#a9ceff'>
            <div> {/* Left */}
                <img src='/logo.png' width='80px' height='80px' />
            </div>
            <div> {/* Right */}
                <Nav>
                    <NavItem Link={Link} href='/'>All</NavItem>
                    <NavItem Link={Link} href='/header'>Header</NavItem>
                    <NavItem Link={Link} href='/modal'>Modal</NavItem>
                    <NavItem Link={Link} href='/button'>Button</NavItem>
                    <NavItem Link={Link} href='/link'>Link</NavItem>
                    <NavItem Link={Link} href='/nav'>Nav</NavItem>
                    <NavItem Link={Link} href='/container'>Container</NavItem>
                </Nav>
            </div>
        </Header>
        
        <Container>
            {children}
        </Container>
        <div style={{height: 100}}></div>
    </>);
}
