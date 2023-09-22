import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { WeaponAttribute } from '../constants/weapon-attribute.enum';

export class CreateWeaponDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  attackPower: number;

  @ApiProperty({ enum: WeaponAttribute }) // https://stackoverflow.com/questions/62306451/nestjs-isenum-dto-validation-and-swagger
  @IsNotEmpty()
  @IsEnum(WeaponAttribute)
  attribute: WeaponAttribute;
}
