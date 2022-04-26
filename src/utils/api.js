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
	const result = (await http.get('search/suggest', { keywords })).data.result
	return result
}

/* 
	音乐播放
*/
export async function useSongUrl(id) {
	const { data } = await http.get('/song/url', { id })
	return data.first()
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

// 推荐新音乐
export async function usePersonalizedNewSong() {
	const result = (await http.get('/personalized/newsong')).data.result
	return result
}

//推荐MV
export async function usePersonalizedMv() {
	const result = (await http.get('personalized/mv')).data.result
	return result
}
