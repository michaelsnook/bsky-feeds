import { NextResponse } from 'next/server'

export async function GET() {
	let data = {}
	try {
		const res = await fetch(
			'at://did:plc:4yawo46bsobbzd55b7uxdvmo/app.bsky.feed.generator/aaacjfe2xhorq',
			{
				method: 'GET',
			}
		)
		data = await res.json()
		return NextResponse.json(data)
	} catch (e) {
		data.message = e.message || 'Some error occurred 🤷'
	}
	return NextResponse.json(data)
}
