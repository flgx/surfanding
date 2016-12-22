import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Profile from './components/users/Profile.vue';
import ProductDetail from './components/products/ProductDetail.vue';

const Products = resolve => {
    require.ensure(['./components/products/Products.vue'], () => {
        resolve(require('./components/products/Products.vue'));
    }, 'products');
};
const Category = resolve => {
    require.ensure(['./components/products/Category.vue'], () => {
        resolve(require('./components/products/Category.vue'));
    }, 'products');
};
export const routes = [
    {
	    path: '/', components: {
	        default: Products,
	        'header-top': Header
	    }

	},
	{
	    path: '/surfshop/:category?', components: {
	        default: Category,
	        'header-top': Header
	    },
	},
	{
	    path: '/surfshop/:category?/:slug?', components: {
	        default: ProductDetail,
	        'header-top': Header
	    },
	},
	{
		path: '*',redirect:'/'
	}
];