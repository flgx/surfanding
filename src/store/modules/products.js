import products from '../../data/products'
const state = {
	title: '',
	filterText:'',
	products:[]
};

const mutations = {
	'SET_TITLE'(state,title){
		state.title = title;
	},
	'SET_FILTER_TEXT'(state,text){
		state.filterText = text;
	},
	'SET_PRODUCTS'(state,products){
		state.products = products;
	},
	'SEARCH'(state,search){
		state.filterText = search;
	}	
};

const actions = {
	setTitle ({commit},title){
		commit('SET_TITLE',title);
	},
	startSearch({commit},search){
		commit('SEARCH',search);
	},
	setProducts({commit}){
		commit('SET_PRODUCTS',products);
	},
	setFilterText({commit},text){
		console.log(text);
		commit('SET_FILTER_TEXT',text);
	}
};

const getters = {
	products: state => {		
        return state.products.filter((element) => {
            return element.description.toLowerCase().match(state.filterText.toLowerCase()) || 
            element.title.toLowerCase().match(state.filterText.toLowerCase())|| 
            element.category.toLowerCase().match(state.filterText.toLowerCase());
            console.log(search);
        });
	}
};

export default{
	state,
	mutations,
	actions,
	getters
};