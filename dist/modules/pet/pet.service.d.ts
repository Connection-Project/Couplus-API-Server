import { AwsService } from 'src/lib/aws/src/aws.service';
import { MyPetRepository } from 'src/repositories/myPet.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { CreateMyPetReqDto } from './dto/req/create.req.dto';
import { UpdateMyPetReqDto } from './dto/req/update.req.dto';
export declare class PetService {
    private readonly myPetRepository;
    private readonly userRepository;
    private readonly awsService;
    constructor(myPetRepository: MyPetRepository, userRepository: UserRepository, awsService: AwsService);
    create(userId: number, file: File, body: CreateMyPetReqDto): Promise<any>;
    getMyPets(userId: number): Promise<any>;
    update(myPetId: number, file: File, body: UpdateMyPetReqDto): Promise<any>;
    delete(userId: number, myPetId: number): Promise<any>;
}
