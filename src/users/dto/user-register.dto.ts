import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Invalid email' })
	email: string;

	@IsString({ message: 'no password specified' })
	password: string;

	@IsString({ message: 'no name specified' })
	name: string;
}
