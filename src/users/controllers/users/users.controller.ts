import { Controller, Get , Post, Body, Param, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto} from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')

export class UsersController {

    constructor(private userService: UsersService){}

    @Get()
    @UseGuards(AuthGuard)
    getUsers(){
        return this.userService.fetchUsers()
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto ){
         return  this.userService.createUser(userData)
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe)  id: number){
        return this.userService.fetchUserById(id)
    }

    


}

