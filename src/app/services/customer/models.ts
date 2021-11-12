export interface ListCustomerResponse {
    customers: Customer[]
}

export interface Customer {
    id?: number;
    name?: string;
    lastname?: string;
    birthdate?: string;
    state?: boolean;
    gender?: number;
} 

export interface AddCustomerRequest {
    name: string;
    lastname: string;
    birthdate: string;
    gender?: number;
}

export interface CustomerServiceResponse {
    id: number
    name: string;
    lastname: string;
    birthdate: string;
    state: boolean;
    gender?: number;
}

export interface AverageResponse {
    avg: number
}

export interface AverageMaleFemaleResponse {
    male: {
        count: number,
        avg: number
    },
    female: {
        count: number,
        avg: number
    }
}