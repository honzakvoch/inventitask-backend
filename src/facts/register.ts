import {Router} from 'express'

import {getFacts} from './getFacts'


export function register(router: Router) {
	router.get('/facts/:city', getFacts)
}
