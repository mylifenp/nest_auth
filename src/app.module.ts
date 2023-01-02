import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PokemonModule } from './pokemon/pokemon.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
    }),
    PokemonModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
