import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {

    constructor (private readonly clientsService: ClientService){}

    @Get()
    getClients(){
        return this.clientsService.findAll();
    }

    @Get(':id')
    getClientById(@Param('id', ParseIntPipe) id: number){

        console.log(`el id a buscar es ${id}`);

        return this.clientsService.findById(id);

    }

    @Put(':id')
    updateClient(@Param('id', ParseIntPipe) id: number, @Body() body){

        console.log(`el id a buscar es ${id}`);
        console.log(body);

        return this.clientsService.updateClient(body, id);

    } 

    @Delete(':id')
    deleteById(@Param('id', ParseIntPipe) id: number){

        console.log(`el id a elimiar es ${id}`);

        return this.clientsService.deleteClient(id);

    }

    @Post()
    createClient(@Body() body){
        
        console.log(body);

        return this.clientsService.createCliente(body);

    }

}