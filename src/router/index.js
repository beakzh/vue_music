import { createRouter, createWebHistory } from 'vue-router'
import { Pages } from './page'

const routes = [
	{
		path: '/',
		name: Pages.home,
		component: _ => import('../views/Root.vue'),
		redirect: { name: Pages.discover },
		children: [
			{
				path: 'discover',
				name: 'discover',
				component: () => import('@/views/discover/Discover.vue'),
				meta: { menu: 'discover', keepAlive: true },
			},
			{
				path: 'music',
				name: 'music',
				component: () => import('@/views/music/Music.vue'),
				redirect: { name: 'picked' },
				meta: { menu: 'music' },
				children: [
					{
						path: 'picked',
						name: 'picked',
						component: () => import('@/views/music/picked/Picked.vue'),
						meta: {
							menu: 'music',
							keepAlive: true,
						},
					},
					{
						path: 'artist',
						name: 'artist',
						component: () => import('@/views/music/artist/Artist.vue'),
						meta: {
							menu: 'music',
							keepAlive: true,
						},
					},
					{
						path: 'category',
						name: 'category',
						component: () => import('@/views/music/category/Category.vue'),
						meta: {
							menu: 'music',
							keepAlive: true,
						},
					},
					{
						path: 'toplist',
						name: 'toplist',
						component: () => import('@/views/music/toplist/TopList.vue'),
						meta: {
							menu: 'music',
							keepAlive: true,
						},
					},
					{
						path: 'zj',
						name: 'zj',
						component: () => import('@/views/music/zj/Zj.vue'),
						meta: {
							menu: 'music',
							keepAlive: true,
						},
					},
					{
						path: 'radio',
						name: 'radio',
						component: () => import('@/views/music/radio/Radio.vue'),
						meta: {
							menu: 'music',
							keepAlive: true,
						},
					},
				],
			},
			{
				path: 'playlist',
				name: 'playlist',
				component: () => import('@/views/playlist/PlayList.vue'),
			},
			{
				path: 'artistDetail',
				name: 'artistDetail',
				component: () => import('@/views/artist/ArtistDetail.vue'),
			},

			{
				path: 'album',
				name: 'album',
				component: () => import('@/views/album/Album.vue'),
			},
			{
				path: 'video',
				name: 'video',
				component: () => import('@/views/video/Video.vue'),
				meta: { menu: 'video', title: '视频', keepAlive: true },
			},
			{
				path: 'dj',
				name: 'dj',
				component: () => import('@/views/dj/DJ.vue'),
				meta: { menu: 'dj', title: '电台', keepAlive: true },
			},
			{
				path: Pages.mvDetail,
				name: Pages.mvDetail,
				component: () => import('@/views/mv/mvDetail.vue'),
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
