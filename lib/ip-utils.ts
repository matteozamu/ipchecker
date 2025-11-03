import { Address4, Address6 } from 'ip-address'
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

export function checkIpInRangeIPv6(ip: string, ranges: string[]): boolean {
	let ipAddress: Address6 | null = null
	try {
		ipAddress = new Address6(ip)
	} catch (e) {
		return false
	}
	if (!ipAddress) {
		return false
	}
	const ipBigInt = ipAddress.bigInteger()
	for (const range of ranges) {
		try {
			const cidr = new Address6(range)
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

export function checkIpInProviderRanges(ip: string, provider: { ranges: string[]; rangesIPv6?: string[] }): boolean {
	// Try IPv4
	try {
		new Address4(ip)
		return checkIpInRange(ip, provider.ranges)
	} catch (e) {
		// Not IPv4, try IPv6
		try {
			new Address6(ip)
			return provider.rangesIPv6 ? checkIpInRangeIPv6(ip, provider.rangesIPv6) : false
		} catch (e2) {
			return false
		}
	}
}
