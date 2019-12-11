import express from 'express'
import serverless from 'serverless-http'

import * as facts from './facts'
import * as cors from './cors'


const app = express()
const router = express.Router()

cors.register(router)
facts.register(router)
app.use('/.netlify/functions/server', router)

export const handler = serverless(app)
