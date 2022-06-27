import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export function useMusicMenu() {
	let menus = [
		{
			label: '精选',
			name: 'picked',
		},
		{
			label: '有声电台',
			name: 'radio',
		},
		{
			label: '排行',
			name: 'toplist',
		},
		{
			label: '歌手',
			name: 'artist',
		},
		{
			label: '分类歌单',
			name: 'category',
		},
		{
			label: '数字专辑',
			name: 'zj',
		},
	]

	let router = useRouter()
	let route = useRoute()
	let currentMenu = ref(route.name)
	watch(
		_ => route.name,
		v => (currentMenu.value = v)
	)
	let onTabClick = ({ props }) => router.push({ name: props.name, replace: true })

	return {
		menus,
		currentMenu,
		onTabClick,
	}
}
