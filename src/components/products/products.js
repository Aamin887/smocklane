import '../../assets/styles/products.css'
import ProductCard from '../../shared/productCard'
import bg from '../../assets/images/product_1.png'
// import bgImage from './assets/images/product_1.png'


const productDetails = [
    {
        name: 'Smock',
        image: bg,
        category: 'mens',
        price: '100.00'
    },
    {
        name: 'Smock',
        image: bg,
        category: 'mens',
        price: '100.00'
    },
    {
        name: 'Smock',
        image: bg,
        category: 'mens',
        price: '100.00'
    },
    {
        name: 'Smock',
        image: bg,
        category: 'mens',
        price: '100.00'
    },
    {
        name: 'Smock',
        image: bg,
        category: 'mens',
        price: '100.00'
    },
    {
        name: 'Smock',
        image: bg,
        category: 'mens',
        price: '100.00'
    },
    {
        name: 'Smock',
        image: bg,
        category: 'mens',
        price: '100.00'
    },
    {
        name: 'Smock',
        image: bg,
        category: 'mens',
        price: '100.00'
    },
]


const productsFormatted = productDetails.map(({name, category, image, price}) => {
return <ProductCard name={name} image={image} category={category} price={price}/>

})

const Products = () => {
    return(
        <div className='products-page'>
            <h2>Feaured Products</h2>
            <p>The best and quality smocks for everyday people</p>
            <div className="products-content">
                {productsFormatted}
            </div>
        </div>
    )
}

export default Products;