import { Client } from "src/app/clients/clients";

export class ServiceProvidedSearch {
    id: number;
    description: string;
    amount: number;
    date: string;
    client: Client;
}