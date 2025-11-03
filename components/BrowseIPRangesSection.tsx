'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select } from '@/components/ui/select'
import { cloudProviders } from '@/lib/constants'
import { CloudProviderKey } from '@/lib/types'

export function BrowseIPRangesSection() {
	const [selectedProvider, setSelectedProvider] = useState<CloudProviderKey>('cloudflare')
	const [ipVersion, setIpVersion] = useState<'ipv4' | 'ipv6'>('ipv4')

	const currentProvider = cloudProviders[selectedProvider]
	const ranges = ipVersion === 'ipv4' ? currentProvider.ranges : currentProvider.rangesIPv6 ?? []

	return (
		<Card className='shadow-xl'>
			<CardHeader className='space-y-3'>
				<CardTitle className='text-3xl'>Browse IP Ranges</CardTitle>
				<CardDescription>View IP ranges for each cloud provider</CardDescription>
			</CardHeader>
			<CardContent className='space-y-6'>
				<div className='flex flex-row items-center gap-4 mb-4'>
					<div className='flex-1 flex flex-col justify-center'>
						<label className='text-sm font-medium mb-1'>Cloud Provider</label>
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
					<div className='flex flex-col justify-center h-full'>
						<label className='text-sm font-medium mb-1'>IP Version</label>
						<div className='flex gap-1 h-10'>
							<button
								type='button'
								className={`px-3 py-1 rounded border text-xs font-semibold ${
									ipVersion === 'ipv4' ? 'bg-primary text-white' : 'bg-muted text-foreground'
								} transition`}
								onClick={() => setIpVersion('ipv4')}
							>
								IPv4
							</button>
							<button
								type='button'
								className={`px-3 py-1 rounded border text-xs font-semibold ${
									ipVersion === 'ipv6' ? 'bg-primary text-white' : 'bg-muted text-foreground'
								} transition`}
								onClick={() => setIpVersion('ipv6')}
							>
								IPv6
							</button>
						</div>
					</div>
				</div>

				<div className='p-4 bg-muted rounded-lg border'>
					<div className='flex items-center justify-between mb-4'>
						<div>
							<h3 className='font-semibold text-lg'>{currentProvider.name}</h3>
							<p className='text-sm text-muted-foreground'>{ranges.length} IP ranges configured</p>
						</div>
						<Badge className={`${currentProvider.color} text-white border-0`}>
							{Object.keys(cloudProviders)
								.find((key) => cloudProviders[key as CloudProviderKey] === currentProvider)
								?.toUpperCase()}
						</Badge>
					</div>

					<div className='space-y-2 max-h-96 overflow-y-auto'>
						{ranges.map((range, index) => (
							<div
								key={index}
								className='text-sm font-mono bg-background px-4 py-3 rounded border flex items-center justify-between hover:bg-accent transition-colors'
							>
								<span>{range}</span>
								<Badge variant='outline' className='text-xs'>
									{ipVersion.toUpperCase()} CIDR
								</Badge>
							</div>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
