import Header from '@jcomponents/header';
import Container from '@jcomponents/container';
import { Nav, NavItem } from '@jcomponents/nav';

export default function Home() {
    return (<>
        <Header color='#a9ceff'>
            <div> {/* Left */}
                <img src='/logo.png' width='80px' height='80px' />
            </div>
            <div> {/* Right */}
                <Nav>
                    <NavItem href='/'>Home</NavItem>
                    <NavItem href='/about'>About</NavItem>
                    <NavItem href='/contact'>Contact</NavItem>
                </Nav>
            </div>
        </Header>
        
        <Container>
            <h1 style={{textAlign: 'center'}}>JComponents</h1>
            <p>Easily integrate custom-made components into your React projects.</p>
            <p>Below is a demo:</p>
        </Container>
    </>);
}
