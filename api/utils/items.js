const serializeCategories = (data) => {
    categories = [];
    data.filters.map(filter => {
        return filter.values.map(value => {
            categories.push(value['name']);
        })
    })

    return categories;
}

const serializeItems = (data) => {
    return data.results.map(result => {
        return {
            id: result.id,
            title: result.title,
            price: {
                currency: result.installments.currency_id,
                amount: result.installments.amount,
                decimals: 2
            },
            picture: result.thumbnail,
            condition: result.condition,
            free_shipping: result.shipping.free_shipping,
            address: {
                city: result.address.city_name,
                state: result.address.state_name
            }
        }
    })
}

const serializeItem = (item, description) => {
    return {
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: 2
        },
        picture: item.pictures[0].url,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        description: description.plain_text
    }
}


module.exports = Object.freeze({
    serializeCategories,
    serializeItems,
    serializeItem
});
