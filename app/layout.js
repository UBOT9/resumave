import './globals.scss';
import ReduxProvider from '@/store/ReduxProvider';

export const metadata = {
    title: 'Resume Builder',
    description: 'Simple resume builder',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ReduxProvider>
                    {children}
                </ReduxProvider>
            </body>
        </html>
    );
}