'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select } from '@/components/ui/select'
import { cloudProviders } from '@/lib/constants'
import { CloudProviderKey } from '@/lib/types'

export function BrowseIPRangesSection() {
	const [selectedProvider, setSelectedProvider] = useState<CloudProviderKey>('cloudflare')

	const currentProvider = cloudProviders[selectedProvider]

	return (
		<Card className='shadow-xl'>
			<CardHeader className='space-y-3'>
				<CardTitle className='text-3xl'>Browse IP Ranges</CardTitle>
				<CardDescription>View IP ranges for each cloud provider</CardDescription>
			</CardHeader>
			<CardContent className='space-y-6'>
				<div className='space-y-2'>
					<label className='text-sm font-medium'>Select Cloud Provider</label>
					<Select
						value={selectedProvider}
						onChange={(e) => setSelectedProvider(e.target.value as CloudProviderKey)}
						className='w-full'
					>
						{Object.entries(cloudProviders).map(([key, provider]) => (
							<option key={key} value={key}>
								{provider.name}
							</option>
						))}
					</Select>
				</div>

				<div className='p-4 bg-muted rounded-lg border'>
					<div className='flex items-center justify-between mb-4'>
						<div>
							<h3 className='font-semibold text-lg'>{currentProvider.name}</h3>
							<p className='text-sm text-muted-foreground'>{currentProvider.ranges.length} IP ranges configured</p>
						</div>
						<Badge className={`${currentProvider.color} text-white border-0`}>
							{Object.keys(cloudProviders)
								.find((key) => cloudProviders[key as CloudProviderKey] === currentProvider)
								?.toUpperCase()}
						</Badge>
					</div>

					<div className='space-y-2 max-h-96 overflow-y-auto'>
						{currentProvider.ranges.map((range, index) => (
							<div
								key={index}
								className='text-sm font-mono bg-background px-4 py-3 rounded border flex items-center justify-between hover:bg-accent transition-colors'
							>
								<span>{range}</span>
								<Badge variant='outline' className='text-xs'>
									CIDR
								</Badge>
							</div>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
