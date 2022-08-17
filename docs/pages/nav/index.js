import Page from '../../components/Page';

export default function NavDoc() {
    return (<Page>
        <h1 style={{textAlign: 'center'}}>Nav</h1>
        <div style={{
            display: 'flex',
            gap: 30
        }}>
            <div> {/* Left */}
                <h3>Description</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa praesentium voluptate doloribus vel eaque a amet veniam repudiandae at facilis eum aliquid doloremque quo voluptatem, iste molestiae asperiores quisquam, aspernatur officiis voluptatibus porro minus nobis. Numquam saepe magnam exercitationem iste. Obcaecati aspernatur minima saepe incidunt est, sapiente illum voluptas corporis?
                </p>
            </div>
            <div> {/* Right */}
                <h3>Installation</h3>
                <div style={{
                    display: 'flex',
                    gap: 10,
                }}>
                    <code className='light' style={{width: 'max-content'}}>npm i @jcomponents/nav</code>
                    <button onClick={_=>navigator.clipboard.writeText('npm i @jcomponents/nav')}>Copy</button>
                </div>
            </div>
        </div>
        <br/>

        <h3>Demo</h3>
        <code style={{whiteSpace: 'pre'}}>{`
<Nav>
    <NavItem Link={Link} href='/'>All</NavItem>
    <NavItem Link={Link} href='/header'>Header</NavItem>
    <NavItem Link={Link} href='/modal'>Modal</NavItem>
    <NavItem Link={Link} href='/button'>Button</NavItem>
    <NavItem Link={Link} href='/link'>Link</NavItem>
    <NavItem Link={Link} href='/nav'>Nav</NavItem>
    <NavItem Link={Link} href='/container'>Container</NavItem>
</Nav>
        `.trim()}</code>
        
        <div>
            <p>The rendered result is the header you see at the top of the page</p>
        </div>
    </Page>);
}
