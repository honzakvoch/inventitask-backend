import {expect} from 'chai'
import {Express, Request, Response, Router} from 'express'
import sinon from 'sinon'

import {register} from './cors'


describe('cors/register', () => {
    let app: Router
    let middleware: Middleware
    let req: Request
    let res: Response & MockResponse
    let next: () => void

    beforeEach(() => {
        app = {
            use: (cors: Middleware) => {
                middleware = cors
            },
        } as any
        req = {
            headers: {},
            method: 'GET',
        } as any
        res = new MockResponse() as any
        next = sinon.fake()
    })

    it('disallows credentials', () => {
        register(app)
        middleware(req, res, next)

        expect(res.headers.get('Access-Control-Allow-Credentials')).to.be.undefined
    })

    it('allows origin only from ENV var ALLOW_ORIGIN', () => {
        process.env.ALLOW_ORIGIN = 'test'

        register(app)
        middleware(req, res, next)

        expect(res.headers.get('Access-Control-Allow-Origin')).to.deep.equal('test')
    })
})


type Middleware = (req: Request, res: Response, next: Function) => void

class MockResponse {
    public readonly headers = new Map<string, string>()

    public getHeader(header: string) {
        return this.headers.get(header)
    }

    public setHeader(header: string, value: string) {
        this.headers.set(header, value)
    }
}
