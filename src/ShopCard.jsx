export default function ShopCard({product}) {
    const { name, price, color, img } = product;
    return (
        <div className="shop-card">
            <p className="name">{name}</p>
            <p className="color">{color}</p>
            <img src={img} alt={name + ' ' + color} className="img" />
            <div className="price-block">
                <p className="price">${price}</p>
                <button className="add-to-cart">add to cart</button>
            </div>
        </div>
    );
}