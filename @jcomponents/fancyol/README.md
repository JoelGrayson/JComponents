# Usage
```jsx
<Nav>
    <Nav.Item>Home</Nav.Item>
    <Nav.Item>About</Nav.Item>
    <Nav.Item>Contact</Nav.Item>
    ...
</Nav>
```

If using Next.js, you can pass `Link` as a property into `<Nav>` to get the benefits of 'next/link'.
```jsx
import Link from 'next/link';

<Nav Link={Link}>
    <Nav.Item>Home</Nav.Item>
    <Nav.Item>About</Nav.Item>
    <Nav.Item>Contact</Nav.Item>
    ...
</Nav>
```
