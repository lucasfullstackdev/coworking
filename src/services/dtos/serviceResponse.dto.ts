export class ServiceResponseDto {
  readonly id: string;
  readonly title: string;
  readonly active: boolean;

  constructor(id: string, title: string, active?: boolean) {
    this.id = id;
    this.title = title;
    this.active = active;
  }
}
