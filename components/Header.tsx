import { Github } from 'lucide-react'

export function Header() {
	return (
		<header className='border-b bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50'>
			<div className='container mx-auto px-4 py-4'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center space-x-3'>
						{/* <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg'>
							<Cloud className='w-6 h-6 text-white' />
						</div> */}
						<img src='/logo.webp' alt='Logo' className='w-10 h-10' />
						<div>
							<h1 className='text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent'>
								IP Range Checker
							</h1>
							<p className='text-xs text-muted-foreground'>Verify cloud provider IPs</p>
						</div>
					</div>
					<a
						href='https://github.com'
						target='_blank'
						rel='noopener noreferrer'
						className='text-muted-foreground hover:text-foreground transition-colors'
					>
						<Github className='w-5 h-5' />
					</a>
				</div>
			</div>
		</header>
	)
}
