import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.server'
import { CreateAccountController } from './controllers/create-account.controller'

@Module({
  controllers: [CreateAccountController],
  providers: [PrismaService],
})
export class AppModule {}
