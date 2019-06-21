import bcrypt from 'bcrypt';

export class HashingService {

    private readonly saltRounds: number = 10;

    constructor() {}
    
    public async generatePassword(password: string): Promise<string> {
        try {
            return await bcrypt.hash(password,this.saltRounds);
        } catch (error) {
            // TODO - add logger service and log errors
            return error;
        }
    }

    public async comparePasswords(password:string, hashedPassword:string): Promise<boolean> {
        try {
            return await bcrypt.compare(password, hashedPassword);
        } catch (error) {
            // TODO - add logger service and log errors
            return false;
        }
    }
}