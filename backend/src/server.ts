import express, { Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import cors from 'cors';

import { router } from './routes';

const app = express();
app.use(express.json()); // estamos falando que vamos usar o JSON
app.use(cors()) // Para qualquer ip conseguir fazer requisição


// Falar que nós vamos usar as rotas
app.use(router);

//Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        // Se for uma instancia do tipo error
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })

})

app.listen(3434, () => console.log('servidor Online!!'));