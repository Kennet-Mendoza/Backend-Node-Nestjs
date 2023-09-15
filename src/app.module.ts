import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [ClientModule, ProductosModule],
  controllers: [],
  providers: [],
  exports:[]
})
export class AppModule {}
