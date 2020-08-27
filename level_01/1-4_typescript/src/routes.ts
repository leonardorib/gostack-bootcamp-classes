import { Request, Response } from 'express';
import createUser from './services/createUser';

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    name: 'Leonardo',
    email: 'leonardo.rib@hotmail.com',
    password: 'password',
    techs: ['Node.js', 'ReactJS', 'React Native'],
  });

  console.log(user);

  return res.status(200).json({ message: 'Hello World' });
}
