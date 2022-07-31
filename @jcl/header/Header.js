import styles from '../styles/header.module.css';

export default function Header(props) {
    let maxWidth=props.maxWidth || 800;

    return (<header style={{
        display: 'flex',
        justifyContent: 'center',
        height: 100,
        backgroundImage: linear-gradient(0, #96d2ab, #abefc3)
    }}>
        {children}
    </header>);
}
