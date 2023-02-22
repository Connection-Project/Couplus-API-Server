import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardImage } from 'src/models/BoardImage.entity';
import { Calendar } from 'src/models/Calendar.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CalendarRepository {
    constructor(
        @InjectRepository(Calendar)
        private calendarRepository: Repository<Calendar>,
    ) {}

    create(): Calendar {
        const calendar: Calendar = this.calendarRepository.create();
        return calendar;
    }

    async save(calendar: Calendar): Promise<void> {
        await this.calendarRepository.save(calendar);
        return;
    }
}
