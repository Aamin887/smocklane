import '../assets/styles/product.css'

const ProductCard = ({image, name, category, price}) => {
    return(
        <article className="product">
            <div className="product-image">
                <img src= {image} alt=""/>
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <small>{category}</small>
                <p>Gh¢{price}</p>
            </div>
        </article>
    )
}

export default ProductCard;