export class Product {
    id: string;
    title: string;
    price: number;
    currency_id: string;
    address: Address;
    thumbnail: string;
    shipping: Shipping;
}

class Address {
    state_name: string;
}

class Shipping {
    free_shipping: boolean;
}
