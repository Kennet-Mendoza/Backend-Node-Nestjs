import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductosService {

    private productos = [
        {
            id: 1,
            nombre:'papalinas',
            precio: 15
        },
        {
            id: 2,
            nombre:'Jamon de Pavoo',
            precio: 9.50
        },
        {
            id: 3,
            nombre:'Mantequilla',
            precio: 3.75
        }
    ]

    findAll(){
        return this.productos;
    }

    findById(id: number){

        const productos = this.productos.find( p => p.id === id);
        
        if (!productos){
            throw new NotFoundException(`Product with id ${id} does not exist`);
        }
        return productos;

    }

    updateProductos(productosBody, id){
        //validaciones del producto
        const productos = this.productos.find( p => p.id === id);
        
        if (!productos){
            throw new NotFoundException(`Product with id ${id} does not exist`);
        }

        //logica para actualizar el producto        

        return {status:'Producto actualizado'}
    }

    deleteProductos(id){
   
        const productos = this.productos.find( p => p.id === id);
        
        if (!productos){
            throw new NotFoundException(`Product with id ${id} does not exist`);
        }

        //logica para eliminar el producto        

        return {status:'Producto eliminado'}
    }

    createProductos(productosBody){
        //validaciones del producto
        const productos = this.productos.find( p => p.id === productosBody.id);
        
        if (productos){
            throw new NotFoundException(`Product with id ${productosBody.id} exist`);
        }

        //logica para crear el producto        

        return {status:'Producto creado'}
    }

}
