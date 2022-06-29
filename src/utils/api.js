import http from './http'

/*
    header请求
*/

// 热门搜索
export async function useSearchHotDetail() {
	const data = (await http.get('search/hot/detail')).data
	return data
}
export async function useSearchSuggest(keywords) {
	const result = (await http.get('search/suggest', { keywords })).result
	return result
}

/* 
	音乐播放
*/
export async function useSongUrl(id) {
	const data = (await http.get('/song/url', { id })).data
	return data.first()
}
export async function useDetail(id) {
	const { songs } = await http.get('/song/detail', { ids: id })
	return songs.first()
}
/*
    discover请求（推荐）
*/

// 推荐轮播
export async function useBanner() {
	const banners = (await http.get('/banner', { type: 1 })).banners
	return banners
}

// 你的专属歌单
export async function usePersonalized() {
	const result = (await http.get('/personalized')).result
	return result
}

// 推荐新音乐
export async function usePersonalizedNewSong() {
	const result = (await http.get('/personalized/newsong')).result
	return result
}

// 推荐MV
export async function usePersonalizedMv() {
	const result = (await http.get('personalized/mv')).result
	return result
}

/* 
	音乐馆
*/

/* 
	精选
*/
// 独家放送
export async function usePersonalizedPrivateContentList(limit = 10, offset = 0) {
	const result = (await http.get('personalized/privatecontent/list', { limit, offset })).result
	return result
}
// 推荐电台
export async function usePersonalizedDjProgram() {
	const result = (await http.get('personalized/djprogram')).result
	return result
}
// 排行特色榜
export async function useTopListDetail() {
	const result = (await http.get('/toplist/detail')).list
	return result
}
// 歌手搜索
export async function userArtistList(pageData) {
	const result = (
		await http.get('artist/list', {
			type: pageData.type,
			area: pageData.area,
			initial: pageData.initial,
			limit: pageData.limit,
			offset: (pageData.page - 1) * pageData.limit,
		})
	).artists
	return result
}
// 分类歌单标签list
export async function usePlaylistHighqualityTags() {
	const result = (await http.get('playlist/highquality/tags')).tags
	return result
}
// 精品分类歌单
export async function useTopPlaylistHighquality() {
	const result = await http.get('useTopPlaylistHighquality')
	return result
}
