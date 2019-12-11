import {expect} from 'chai'
import {Router} from 'express'
import sinon from 'sinon'

import {register} from './register'
import {getFacts} from './getFacts'


describe('facts/register', () => {
	let app: Router

	beforeEach(() => {
		app = {
			get: sinon.fake(),
		} as any
	})

	describe('getFacts route', () => {
		it('has correct path', () => {
			register(app)

			expect(app.get).to.be.calledWithExactly('/facts/:city', getFacts)
		})
	})
})
