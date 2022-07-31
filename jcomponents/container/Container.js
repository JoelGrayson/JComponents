export default function JContainer({maxWidth, children, ...props}) {
    return <div {...props}>{children}</div>;
}
