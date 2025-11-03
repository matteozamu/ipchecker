'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TabNavigation } from '@/components/TabNavigation'
import { CheckIPSection } from '@/components/CheckIPSection'
import { BrowseIPRangesSection } from '@/components/BrowseIPRangesSection'
import { cloudProviders } from '@/lib/constants'

export default function Home() {
	const [activeTab, setActiveTab] = useState<'check' | 'browse'>('check')

	return (
		<div className='min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900'>
			<Header />

			<main className='flex-1 container mx-auto px-4 py-8'>
				<div className='max-w-4xl mx-auto'>
					<TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

					{activeTab === 'check' && <CheckIPSection />}
					{activeTab === 'browse' && <BrowseIPRangesSection />}
				</div>
			</main>

			<Footer providerCount={Object.keys(cloudProviders).length} />
		</div>
	)
}
