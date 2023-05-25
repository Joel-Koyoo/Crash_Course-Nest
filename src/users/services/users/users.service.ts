import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class UsersService {

    private fakeUsers = [{username : "Joel",email:"nyambok97@gmail.com"}, {username : "James",email:"james@gmail.com"}]

    fetchUsers(){
        return this.fakeUsers
    }


    createUser(userData: CreateUserDto){
        this.fakeUsers.push(userData)
        return;
    }

    fetchUserById(id:number){
        return {id, username:"JOel"}
    }
}