const KEYS = {
	volume: 'PLAYER-VOLUME',
}

const player = {
	namespaced: true,
	state: {
		audio: new Audio(), //播放器
		loopType: 0, //循环模式 0 单曲循环 1 列表循环 2随机播放
		volume: localStorage.getItem(KEYS.volume)?.toInt() || 60, //音量
		showPlayList: false, //播放列表展示
		playList: [],
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
		changList(state) {
			state.showPlayList = !state.showPlayList
		},
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
	},
	actions: {
		play(ctx, v) {},
	},
}
export default player
