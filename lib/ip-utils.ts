import { Address4 } from 'ip-address'

export function checkIpInRange(ip: string, ranges: string[]): boolean {
	let ipAddress: Address4 | null = null

	try {
		ipAddress = new Address4(ip)
	} catch (e) {
		return false
	}

	if (!ipAddress) {
		return false
	}

	const ipBigInt = ipAddress.bigInteger()

	for (const range of ranges) {
		try {
			const cidr = new Address4(range)

			const networkBigInt = cidr.startAddress().bigInteger()
			const broadcastBigInt = cidr.endAddress().bigInteger()

			if (ipBigInt.compareTo(networkBigInt) >= 0 && ipBigInt.compareTo(broadcastBigInt) <= 0) {
				return true
			}
		} catch (e) {
			continue
		}
	}

	return false
}
