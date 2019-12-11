import {Request, Response} from 'express'

import data from './data.json'


export function getFacts(req: Request, res: Response) {
	const city = req.params.city

	if (!(city in data)) {
		res.statusCode = 204
		res.send()
		return
	}

	const fact = data[city as keyof typeof data]
	res.json({fact})
}
