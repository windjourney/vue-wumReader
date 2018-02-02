import qs from 'querystring'
import axios from 'axios'
export default {
	//获取带书籍数量的父分类
	getCategories(){
		return axios.get('/api/cats/lv2/statistics')
	},
	//获取排名分类
	getRankCategory(){
		return axios.get('/api/ranking/gender')
	},
	//获取带子分类的分类
	getSubCategory(){
		return axios.get('/api/cats/lv2')
	},
	//获取分类详情
	getCategoryInfo(category_type){
		//{
		//  gender=male, type=hot, major(主分类), minor(子分类), start, limit
		// }
		let query = qs.stringify(category_type);
		return axios.get('/api/book/by-categories?'+query)
	},
	//获取书籍详情
	getBookInfo(id){
		return axios.get('/api/book/'+id)
	},
	//获取书籍相关推荐
	getRecommend(id){
		return axios.get('/api/book/'+id+'/recommend')
	},
	//获取作者名下的书籍
	getAuthorBook(author){
		let author_query = qs.stringify(author);
		return axios.get(url+'/author-books?'+author_query)
	},
	//获取书籍源
	getBookSources(bookid){
		//view=summary
		//book=bookid
		let book_source = qs.stringify(bookid);
		return axios.get('/api/atoc?'+book_source)
	},
	//获取书籍章节
	getChapters(id){
		return axios.get('/api/atoc/'+id+'?view=chapters')
	},
	//获取章节详细内容
	getBookChapter(link){
		return axios.get('/content/chapter/'+link)
	},
	//获取搜索结果
	getSearchResult(word){
		let keyword = qs.stringify(word);
		return axios.get('/api/book/fuzzy-search?'+keyword)
	},
	getSearchHotwords(){
		return axios.get('/api/book/search-hotwords');
	},
	//获取排名详情
	getRank(categoryid){
		//return axios.get(url+'/rank/'+categoryid)
		return axios.get('/api/ranking/'+categoryid)
	}		
}