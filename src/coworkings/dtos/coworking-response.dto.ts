export class CoworkingResponseDto {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;

  constructor(id: string, name: string, active?: boolean) {
    this.id = id;
    this.name = name;
    this.active = active;
  }
}