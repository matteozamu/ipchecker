'use client'

import { useState, FormEvent } from 'react'
import { Address4, Address6 } from 'ip-address'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, XCircle, Info } from 'lucide-react'
import { cloudProviders } from '@/lib/constants'
import { checkIpInRange } from '@/lib/ip-utils'
import { ResultState } from '@/lib/types'

export function CheckIPSection() {
	const [ipInput, setIpInput] = useState('')
	const [result, setResult] = useState<ResultState>(null)

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		const trimmedIp = ipInput.trim()

		if (!trimmedIp) {
			setResult({
				type: 'invalid',
				message: 'Please enter a valid IP address.'
			})
			return
		}

		let isValid = false
		try {
			const ipv4 = new Address4(trimmedIp)
			isValid = true
		} catch (e) {
			try {
				const ipv6 = new Address6(trimmedIp)
				isValid = true
			} catch (e2) {
				isValid = false
			}
		}

		if (!isValid) {
			setResult({
				type: 'invalid',
				message: 'Please enter a valid IP address.'
			})
			return
		}

		const matchingProviders: string[] = []

		Object.entries(cloudProviders).forEach(([key, provider]) => {
			if (checkIpInRange(trimmedIp, provider.ranges)) {
				matchingProviders.push(provider.name)
			}
		})

		setResult({
			ip: trimmedIp,
			found: matchingProviders.length > 0,
			providers: matchingProviders
		})
	}

	return (
		<Card className='shadow-xl'>
			<CardHeader className='text-center space-y-3'>
				<CardTitle className='text-3xl'>Check IP Address</CardTitle>
				<CardDescription>Enter an IP address to check which cloud provider it belongs to.</CardDescription>
			</CardHeader>
			<CardContent className='space-y-6'>
				<form onSubmit={handleSubmit} className='space-y-4'>
					<div className='space-y-2'>
						<label className='text-sm font-medium'>IP Address</label>
						<Input
							type='text'
							placeholder='Enter IP address (e.g., 104.16.123.45)...'
							value={ipInput}
							onChange={(e) => setIpInput(e.target.value)}
							className='text-base'
						/>
					</div>
					<Button type='submit' className='w-full' size='lg'>
						<CheckCircle className='w-4 h-4 mr-2' />
						Check IP
					</Button>
				</form>

				{result && (
					<div className='space-y-3'>
						{'type' in result && result.type === 'invalid' ? (
							<Alert variant='destructive'>
								<XCircle className='h-4 w-4' />
								<AlertTitle>Invalid Input</AlertTitle>
								<AlertDescription>{result.message}</AlertDescription>
							</Alert>
						) : 'found' in result ? (
							result.found ? (
								<Alert variant='default'>
									<CheckCircle className='h-4 w-4' />
									<AlertTitle>IP Found!</AlertTitle>
									<AlertDescription className='flex flex-wrap items-center gap-2'>
										<span>
											<span className='font-semibold'>{result.ip}</span> belongs to:
										</span>
										{result.providers.map((providerName, index) => {
											const providerEntry = Object.entries(cloudProviders).find(([_, p]) => p.name === providerName)
											const color = providerEntry ? providerEntry[1].color : 'bg-gray-500'
											return (
												<Badge key={index} className={`${color} text-white border-0 px-2.5 py-0.5`}>
													{providerName}
												</Badge>
											)
										})}
									</AlertDescription>
								</Alert>
							) : (
								<Alert variant='destructive'>
									<XCircle className='h-4 w-4' />
									<AlertTitle>IP Not Found</AlertTitle>
									<AlertDescription>
										<span className='font-semibold'>{result.ip}</span> does not belong to any of the configured cloud
										providers.
									</AlertDescription>
								</Alert>
							)
						) : null}
					</div>
				)}

				<div className='p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800'>
					<div className='flex gap-2'>
						<Info className='w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5' />
						<div className='text-sm text-blue-900 dark:text-blue-100'>
							<p className='font-semibold mb-1'>How it works</p>
							<p>
								Enter any IP address and we&apos;ll check it against all {Object.keys(cloudProviders).length} cloud
								provider IP ranges simultaneously. Results show which provider the IP belongs to.
							</p>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
