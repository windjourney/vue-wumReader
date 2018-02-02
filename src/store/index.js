import Vue from 'vue'
import Vuex from 'vuex'
import api from '../service/api.js'
Vue.use(Vuex);

let state ={
	SourceId:'',
	isShowCatlog:false,
	isShowSource:false,
	BookInfo:{},
	RankList:{},
	CategoryList:{},
	SearchResult:{}
}
let mutations ={
		SetCategoryList(state,list){
			state.CategoryList=list;
		},
		SetRankList(state,list){
			state.RankList=list;
		},
		ChangeDetail(state,name){
			if(name == 'catlog'){
				state.isShowCatlog =true;
				state.isShowSource = false;
			}else if(name == 'source'){
				state.isShowSource = true;
				state.isShowCatlog =false;
			}else{
				state.isShowSource = false;
				state.isShowCatlog =false;
			}
		},
		SetSourceId(state,index){
			state.SourceId=index;
		},
		SetBookInfo(state,book){
			state.BookInfo=book;
		},
		SetSearchResult(state,books){
			state.SearchResult = books;
		}
	}


function booksort(books){
	var by = function(name){
	 return function(o, p){
	   var a, b;
	   if (typeof o === "object" && typeof p === "object" && o && p) {
	     a = o[name];
	     b = p[name];
	     if (a === b) {
	       return 0;
	     }
	     if (typeof a === typeof b) {
	       return a < b ? -1 : 1;
	     }
	     return typeof a < typeof b ? -1 : 1;
	   }
	   else {
	     throw ("error");
	   }
	 }
	}
	books.sort(by('updated'));
}


export default new Vuex.Store({
	state,
	mutations
})