import cors from 'cors'
import {Router} from 'express'


export function register(router: Router) {
    router.use(cors({
        credentials: false,
        methods: 'GET',
        origin: String(process.env.ALLOW_ORIGIN),
    }))
}
