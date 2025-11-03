import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react'

interface FooterProps {
	providerCount: number
}

export function Footer({ providerCount }: FooterProps) {
	return (
		<footer className='border-t bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mt-8'>
			<div className='container mx-auto px-4 py-6'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-4'>
					<div className='text-sm text-muted-foreground text-center md:text-left'>
						<p className='flex items-center gap-2 justify-center md:justify-start'>
							Built by Matteo Zamuner
							<a href='https://github.com/matteozamu' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
								<Github className='w-4 h-4 hover:text-black transition' />
							</a>
							<a
								href='https://linkedin.com/in/matteozamuner'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='LinkedIn'
							>
								<Linkedin className='w-4 h-4 hover:text-blue-700 transition' />
							</a>
							<a
								href='https://instagram.com/matteozamuner'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Instagram'
							>
								<Instagram className='w-4 h-4 hover:text-pink-500 transition' />
							</a>
							<a href='https://x.com/matteozamu' target='_blank' rel='noopener noreferrer' aria-label='X'>
								<Twitter className='w-4 h-4 hover:text-slate-800 transition' />
							</a>
						</p>
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
