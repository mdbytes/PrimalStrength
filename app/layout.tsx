import type { Metadata } from 'next';
import { Navbar } from './_assets/components/layout/NavBar';
import { Footer } from './_assets/components/layout/Footer';
import CookiesApproval from './_assets/components/layout/CookiesApproval';

// Import font families
import '@fontsource/nunito';
import '@fontsource/josefin-sans';
import '@fontsource/aclonica';

// Import global styles
import './_assets/styles/scss/globals.scss';

const dotenv = require('dotenv');
dotenv.config();

export const metadata: Metadata = {
    metadataBase: new URL('https://metabolize.us'),
    title: 'Home | Metabolize.us',
    description:
        'Metabolize.us providing information research and experience for metabolic health',
    keywords:
        'metabolic syndrome metabolize obesity diabetes heart disease keto ketogenic fasting intermittent weightlifting conditioning fitness longevity',
    openGraph: {
        title: 'Metabolize.us',
        type: 'website',
        url: 'https://metabolize.us',
        images: '/images/web-view-metabolize.jpeg',
    },

    twitter: {
        images: '/images/web-view-metabolize.jpeg',
        card: 'summary_large_image',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </head>
            <body>
                <Navbar />
                {children}
                <Footer />
                <CookiesApproval />
            </body>
        </html>
    );
}
