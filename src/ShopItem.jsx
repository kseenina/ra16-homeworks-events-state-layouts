export default function ShopItem({product}) {
    const { name, price, color, img } = product;
    return (
        <div className="shop-item">
            <img src={img} alt={name + " " + color} className="img" />
            <p className="name">{name}</p>
            <p className="color">{color}</p>
            <p className="price">${price}</p>
            <button className="add-to-cart">add to cart</button>
        </div>
    );
}