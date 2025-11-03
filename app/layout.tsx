import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

export const metadata: Metadata = {
	title: 'IP Range Checker - Verify IP Addresses Against Various Service Ranges',
	description:
		'Free online tool to check if an IP address belongs to various service provider IP ranges including Cloudflare, AWS, Google, and more. Instantly verify IPv4 and IPv6 addresses.',
	keywords: [
		'IP checker',
		'IP range checker',
		'IP address verification',
		'IPv4 checker',
		'IPv6 checker',
		'network tools',
		'IP range lookup',
		'cloud provider IP ranges',
		'CDN IP ranges'
	],
	authors: [{ name: 'IP Range Checker' }],
	creator: 'IP Range Checker',
	publisher: 'IP Range Checker',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://ipchecker.matteozamuner.com',
		siteName: 'IP Range Checker',
		title: 'IP Range Checker - Verify IP Addresses Against Various Service Ranges',
		description:
			'Free online tool to check if an IP address belongs to various service provider IP ranges. Instantly verify IPv4 and IPv6 addresses against cloud providers and CDNs.',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'IP Range Checker Tool'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'IP Range Checker - Verify IP Addresses Against Various Service Ranges',
		description:
			'Free online tool to check if an IP address belongs to various service provider IP ranges. Instantly verify IPv4 and IPv6 addresses.',
		images: ['/og-image.png'],
		creator: '@matteozamu'
	},
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 5
	},
	alternates: {
		canonical: 'https://ipchecker.matteozamuner.com'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				{/* Google Analytics */}
				<Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
				<Script
					id='google-analytics'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${GA_MEASUREMENT_ID}', {
								page_path: window.location.pathname,
							});
						`
					}}
				/>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
