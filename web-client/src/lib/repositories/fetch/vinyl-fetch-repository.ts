import {
  AddVinylRepository,
  LoadVinylByIdRepository,
  LoadVinylsRepository,
  Vinyl,
  RemoveVinylByIdRepository,
  UpdateVinylByIdRepository,
  AddVinylRepositoryParams,
  UpdateVinylByIdRepositoryData,
} from "../../../core";

export class VinylFetchRepository
  implements
    AddVinylRepository,
    LoadVinylByIdRepository,
    LoadVinylsRepository,
    RemoveVinylByIdRepository,
    UpdateVinylByIdRepository
{
  constructor(
    private readonly hostAddress: string,
    private readonly authorizationToken: string = "",
  ) {}

  private toModel(vinyl: any): Vinyl {
    return {
      id: vinyl.id,
      name: vinyl.name,
      createdAt: new Date(vinyl.createdAt),
      updatedAt: vinyl.updatedAt ? new Date(vinyl.updatedAt) : undefined,
    };
  }

  async removeById(id: string): Promise<void> {
    const response = await fetch(`${this.hostAddress}/vinyls/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${this.authorizationToken}`,
      },
    });

    if (!response.ok) {
      const body = await response.json();
      throw new Error(body.message);
    }
  }

  async add(params: AddVinylRepositoryParams): Promise<Vinyl> {
    const response = await fetch(`${this.hostAddress}/vinyls`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.authorizationToken}`,
      },
    });

    const body = await response.json();

    if (!response.ok) {
      throw new Error(body.message);
    }

    return this.toModel(body);
  }

  async updateById(
    id: string,
    data: UpdateVinylByIdRepositoryData,
  ): Promise<Vinyl> {
    const response = await fetch(`${this.hostAddress}/vinyls/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.authorizationToken}`,
      },
    });

    const body = await response.json();

    if (!response.ok) {
      throw new Error(body.message);
    }

    return this.toModel(body);
  }

  async loadOneById(id: string): Promise<Vinyl> {
    const response = await fetch(`${this.hostAddress}/vinyls/${id}`);
    const body = await response.json();

    if (!response.ok) {
      throw new Error(body.message);
    }

    return this.toModel(body);
  }

  async loadAll(): Promise<Vinyl[]> {
    const response = await fetch(`${this.hostAddress}/vinyls`);
    const body = await response.json();

    if (!response.ok) {
      throw new Error(body.message);
    }

    return body.map(this.toModel);
  }
}
