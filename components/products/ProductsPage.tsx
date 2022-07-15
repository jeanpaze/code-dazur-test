import ProductsList from './ProductsList';

const ProductsPage = (props) => {
	return (
		<section>
			<ProductsList products={props.products} />
		</section>
	);
};

export default ProductsPage;
