import {expect} from 'chai'
import sinon from 'sinon'
import {Request, Response} from 'express'

import {getFacts} from './getFacts'
import data from './data.json'


describe('facts/getFacts', () => {
	describe('with valid request', () => {
		let req: Request
		let res: Response

		beforeEach(() => {
			req = {
				params: {city: 'Paris'},
			} as any
			res = {
				json: sinon.fake(),
			} as any
		})

		it('selects a fact based on the "city" parameter', () => {
			getFacts(req, res)

			expect(res.json).to.be.calledOnceWithExactly({fact: data.Paris})
		})
	})

	describe('with invalid request', () => {
		let req: Request
		let res: Response

		beforeEach(() => {
			req = {
				params: {city: 'Foo'},
			} as any
			res = {
				send: sinon.fake(),
			} as any
		})

		it('responds with status code 204 for unknown cities', () => {
			getFacts(req, res)

			expect(res.statusCode).to.deep.equal(204)
		})

		it('sends the response in case of 204 response code', () => {
			getFacts(req, res)

			expect(res.statusCode).to.deep.equal(204)
		})
	})
})
