import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {

    constructor (private readonly productosServices: ProductosService){}

    @Get()
    getProductos(){
        return this.productosServices.findAll();
    }

    @Get(':id')
    getProductosById(@Param('id', ParseIntPipe) id: number){

        console.log(`el id a buscar es ${id}`)

        return this.productosServices.findById(id);
    }
    
    @Put(':id')
    updateProducto(@Param('id', ParseIntPipe) id: number, @Body() body){

        console.log(`el id a actualizar es ${id}`)
        console.log(body);

        return this.productosServices.updateProductos(body, id);
    }

    @Delete(':id')
    deleteById(@Param('id', ParseIntPipe) id: number){

        console.log(`el id a eliminar es ${id}`)

        return this.productosServices.deleteProductos(id);
    }

    @Post()
    createProductos(@Body() body){
        
        console.log(body);

        return this.productosServices.createProductos(body);
    }

}
