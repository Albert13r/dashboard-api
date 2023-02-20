import { NextFunction, Response, Request } from 'express';

export interface IUserController {
	loging: (req: Request, res: Response, next: NextFunction) => void;
	register: (req: Request, res: Response, next: NextFunction) => void;
}
