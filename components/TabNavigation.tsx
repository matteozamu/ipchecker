import { Button } from '@/components/ui/button'
import { CheckCircle, Info } from 'lucide-react'

interface TabNavigationProps {
	activeTab: 'check' | 'browse'
	onTabChange: (tab: 'check' | 'browse') => void
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
	return (
		<div className='flex gap-2 mb-6'>
			<Button
				variant={activeTab === 'check' ? 'default' : 'outline'}
				onClick={() => onTabChange('check')}
				className='flex-1'
			>
				<CheckCircle className='w-4 h-4 mr-2' />
				Check IP Address
			</Button>
			<Button
				variant={activeTab === 'browse' ? 'default' : 'outline'}
				onClick={() => onTabChange('browse')}
				className='flex-1'
			>
				<Info className='w-4 h-4 mr-2' />
				Browse IP Ranges
			</Button>
		</div>
	)
}
