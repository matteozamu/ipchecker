import { SiCloudflare, SiAmazon, SiGooglecloud, SiDigitalocean } from 'react-icons/si'
import { CloudProvider, CloudProviderKey } from './types'
import { IconType } from 'react-icons'

export const AzureIcon: IconType = ({ className }: { className?: string }) => (
	<svg className={className} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
		<path d='M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892 4.947 3.675c.28.208.618.32.966.32m-3.084-12.531 3.624 10.739a.54.54 0 0 1-.51.713v-.001h-.03a.54.54 0 0 1-.322-.106l-9.287-6.9h4.853m-6.485-1.945-4.377-7.37a.54.54 0 0 1 .461-.816h5.887z' />
	</svg>
)

export const cloudProviders: Record<CloudProviderKey, CloudProvider> = {
       cloudflare: {
	       name: 'Cloudflare',
	       ranges: [
		       // IPv4
		       '173.245.48.0/20',
		       '103.21.244.0/22',
		       '103.22.200.0/22',
		       '103.31.4.0/22',
		       '141.101.64.0/18',
		       '108.162.192.0/18',
		       '190.93.240.0/20',
		       '188.114.96.0/20',
		       '197.234.240.0/22',
		       '198.41.128.0/17',
		       '162.158.0.0/15',
		       '104.16.0.0/13',
		       '104.24.0.0/14',
		       '172.64.0.0/13',
		       '131.0.72.0/22'
	       ],
	       rangesIPv6: [
		       '2400:cb00::/32',
		       '2606:4700::/32',
		       '2803:f800::/32',
		       '2405:b500::/32',
		       '2405:8100::/32',
		       '2a06:98c0::/29',
		       '2c0f:f248::/32'
	       ],
	       color: 'bg-orange-500',
	       icon: SiCloudflare
       },
       aws: {
	       name: 'Amazon Web Services (AWS)',
	       ranges: [
		       '3.5.0.0/16',
		       '13.34.0.0/16',
		       '18.208.0.0/13',
		       '52.94.0.0/16',
		       '54.239.0.0/16',
		       '99.77.0.0/16',
		       '52.46.0.0/16',
		       '52.82.0.0/16'
	       ],
	       rangesIPv6: [
		       '2600:1f00::/36',
		       '2406:da00::/32',
		       '2a05:d000::/29'
	       ],
	       color: 'bg-amber-500',
	       icon: SiAmazon
       },
       gcp: {
	       name: 'Google Cloud Platform (GCP)',
	       ranges: [
		       '34.64.0.0/10',
		       '35.184.0.0/13',
		       '35.192.0.0/12',
		       '35.208.0.0/12',
		       '104.154.0.0/15',
		       '104.196.0.0/14',
		       '107.167.160.0/19',
		       '130.211.0.0/16'
	       ],
	       rangesIPv6: [
		       '2600:1900::/28',
		       '2001:4860:8000::/33'
	       ],
	       color: 'bg-blue-500',
	       icon: SiGooglecloud
       },
       azure: {
	       name: 'Microsoft Azure',
	       ranges: [
		       '13.64.0.0/11',
		       '13.104.0.0/14',
		       '20.33.0.0/16',
		       '20.48.0.0/12',
		       '40.64.0.0/10',
		       '52.224.0.0/11',
		       '104.40.0.0/13',
		       '137.116.0.0/15'
	       ],
	       rangesIPv6: [
		       '2603:1000::/18',
		       '2620:1ec:4::/48'
	       ],
	       color: 'bg-sky-500',
	       icon: AzureIcon
       },
       digitalocean: {
	       name: 'DigitalOcean',
	       ranges: [
		       '104.131.0.0/16',
		       '138.197.0.0/16',
		       '159.65.0.0/16',
		       '165.227.0.0/16',
		       '167.99.0.0/16',
		       '167.172.0.0/16',
		       '178.128.0.0/16',
		       '188.166.0.0/16'
	       ],
	       rangesIPv6: [
		       '2604:a880::/32',
		       '2a03:b0c0::/32'
	       ],
	       color: 'bg-indigo-500',
	       icon: SiDigitalocean
       }
}
