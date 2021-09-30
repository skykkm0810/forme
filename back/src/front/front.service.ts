import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Front } from './entities/front.entity';

@Injectable()
export class FrontService {
  constructor(
    @InjectRepository(Front)
    private readonly front: Repository<Front>,
  ) {}
  getAll(): Promise<Front[]> {
    return this.front.find();
  }
}
