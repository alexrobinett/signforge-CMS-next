import './globals.css';

export default function Rootlayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head></head>
            <body>
                {children}
            </body>
        </html>
    )
}