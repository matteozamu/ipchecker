import { IconType } from 'react-icons'

export interface CloudProvider {
	name: string
	ranges: string[]
	color: string
	icon: IconType
}

export type CloudProviderKey = 'cloudflare' | 'aws' | 'gcp' | 'azure' | 'digitalocean'

export type CheckResult = {
	ip: string
	found: boolean
	providers: string[]
}

export type ResultState = CheckResult | { type: 'invalid'; message: string } | null
