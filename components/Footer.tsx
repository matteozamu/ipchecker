import { Badge } from '@/components/ui/badge'

interface FooterProps {
	providerCount: number
}

export function Footer({ providerCount }: FooterProps) {
	return (
		<footer className='border-t bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mt-8'>
			<div className='container mx-auto px-4 py-6'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-4'>
					<div className='text-sm text-muted-foreground text-center md:text-left'>
						<p>Built by @matteozamuner</p>
					</div>
					<div className='flex items-center gap-4'>
						<Badge variant='outline' className='text-xs'>
							{providerCount} Providers
						</Badge>
					</div>
				</div>
			</div>
		</footer>
	)
}
