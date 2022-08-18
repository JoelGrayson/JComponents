import Header from '@jcomponents/header';
import Container from '@jcomponents/container';
import Nav from '@jcomponents/nav';
import Link from 'next/link';

export default function Home({children}) {
    return (<>
        <Header color='#a9ceff'>
            <div> {/* Left */}
                <Link href='/'><a>
                    <img src='/logo.png' width='80px' height='80px' />
                </a></Link>
            </div>
            <div> {/* Right */}
                <Nav>
                    <Nav.Item Link={Link} href='/'>All</Nav.Item>
                    <Nav.Item Link={Link} href='/header'>Header</Nav.Item>
                    <Nav.Item Link={Link} href='/modal'>Modal</Nav.Item>
                    <Nav.Item Link={Link} href='/button'>Button</Nav.Item>
                    <Nav.Item Link={Link} href='/link'>Link</Nav.Item>
                    <Nav.Item Link={Link} href='/nav'>Nav</Nav.Item>
                    <Nav.Item Link={Link} href='/container'>Container</Nav.Item>
                </Nav>
            </div>
        </Header>
        
        <Container>
            {children}
        </Container>
        <div style={{height: 100}}></div>
    </>);
}
