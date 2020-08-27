interface CreateUserData {
  name?: string; // A interrogação deixa explícito que é um parâmetro opcional.
  email: string;
  password: string;
  techs: string[];
}

export default function createUser({
  name = '',
  email,
  password,
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
