import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.timeout = 20 * 1000
axios.defaults.maxBodyLength = 5 * 1024 * 1024
axios.defaults.withCredentials = true

// 添加请求拦截器
axios.interceptors.request.use(
	config => {
		config.params = { ...config.params, t: Date.now() }
		return config
	},
	error => Promise.reject(error)
)
// 添加响应拦截器
axios.interceptors.response.use(
	response => {
		return response
	},
	error => Promise.reject(error)
)
const http = {
	get(url, params) {
		return new Promise((resolve, reject) => {
			axios
				.get(url, { params })
				.then(res => resolve(res))
				.catch(err => reject(err))
		})
	},
	post(url, data) {
		return new Promise((resolve, reject) => {
			axios
				.post(url, JSON.stringify(data))
				.then(res => resolve(res))
				.catch(err => reject(err))
		})
	},
	put(url, data) {
		return new Promise((resolve, reject) => {
			axios
				.put(url, JSON.stringify(data))
				.then(res => resolve(res))
				.catch(err => reject(err))
		})
	},
	delete(url, params) {
		return new Promise((resolve, reject) => {
			axios
				.delete(url, { params })
				.then(res => resolve(res))
				.catch(err => reject(err))
		})
	},
}
export default http
