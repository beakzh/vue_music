import { useSongUrl, useDetail } from '@/utils/api'

const KEYS = {
	volume: 'PLAYER-VOLUME',
}

const player = {
	namespaced: true,
	state: {
		audio: new Audio(), //播放器
		loopType: 0, //循环模式 0 单曲循环 1 列表循环 2随机播放
		volume: +localStorage.getItem(KEYS.volume) || 60, //音量
		showPlayList: false, //播放列表展示
		playList: [], //播放列表
		id: 0,
		url: '',
		songUrl: {},
		song: {},
		isPlaying: false, //是否播放中
		isPause: false, //是否暂停
		sliderInput: false, //是否正在拖动进度条
		ended: false, //是否播放结束
		muted: false, //是否静音
		currentTime: 0, //当前播放时间
		duration: 0, //总播放时长
	},
	mutations: {
		init(state) {
			state.audio.volume = state.volume / 100
		},
		changList(state) {
			state.showPlayList = !state.showPlayList
		},
		//切换播放
		toggleLoop(state) {
			state.loopType++
			if (state.loopType > 2) state.loopType = 0
		},
		//修改播放时间
		onSliderChange(state, v) {
			state.currentTime = v
			state.sliderInput = false
			state.audio.currentTime = v
		},
		//播放时间拖动中
		onSliderInput(state) {
			state.sliderInput = true
		},
		//播放暂停
		togglePlay(state) {
			if (!state.id) return
			state.isPlaying = !state.isPlaying
			if (state.isPlaying) {
				state.audio.play()
				state.isPause = false
			} else {
				state.isPause = true
				state.audio.pause()
			}
		},
		//静音切换
		toggleMuted(state) {
			state.muted = !state.muted
			state.audio.muted = state.muted
		},
		//音量设置
		setVolume(state, n) {
			n = n > 100 ? 100 : n
			n = n < 0 ? 0 : n
			state.volume = n
			state.audio.volume = n / 100
			localStorage.setItem(KEYS.volume, n.toString())
		},
		playEnd() {},
		//定时器
		interval(state) {
			if (state.isPlaying && !state.sliderInput) {
				state.duration = +state.audio.duration.toString()
				state.currentTime = +state.audio.currentTime.toString()
				state.ended = state.audio.ended
			}
		},
	},
	actions: {
		// 歌曲播放
		async play(ctx, id) {
			if (ctx.state.id == id) return
			let song = await useSongUrl(id)
			ctx.state.audio.src = song.url
			ctx.state.isPlaying = false
			ctx.state.audio
				.play()
				.then(_ => {
					ctx.state.isPlaying = true
					ctx.state.id = song.id
					ctx.state.songUrl = song
					ctx.state.url = song.url
					ctx.dispatch('songDetail')
				})
				.catch(e => console.log(e))
		},
		// 歌曲详情
		async songDetail(ctx) {
			ctx.state.song = await useDetail(ctx.state.id)
		},
	},
}
export default player
