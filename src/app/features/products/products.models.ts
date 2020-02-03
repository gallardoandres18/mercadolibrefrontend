export class SearchList {
    author: Author;
    items: Product[];
    categories: string[];
}

export class Product {
    id: string;
    title: string;
    price: Price;
    picture: string;
    free_shipping: boolean;
    condition: boolean;
    address: Address;
}

export class ProductDetail {
    author: Author;
    item: ProductItem;
}

class ProductItem extends Product {
    sold_quantity: number;
    description: string;
}

class Author {
    name: string;
    lastname: string;
}

class Price {
    currency: string;
    amount: number;
    decimals: number;
}

class Address {
    city: string;
    state: string;
}