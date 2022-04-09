import http from './http'

/*
    header请求
*/

//热门搜索
export async function useSearchHotDetail() {
	const data = (await http.get('search/hot/detail')).data.data
	return data
}
export async function useSearchSuggest(keywords) {
    const result = (await http.get('search/suggest', {keywords})).data.result
    return result
}

/*
    discover请求
*/

// 推荐轮播
export async function useBanner() {
	const banners = (await http.get('/banner', { type: 1 })).data.banners
	return banners
}

// 你的专属歌单
export async function usePersonalized() {
    const result = (await http.get('/personalized')).data.result
    return result
}
