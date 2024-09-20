import hyRequest  from './index.js'

export const getHomeData = () => {
	return hyRequest.get('/recommend', {})
}

export const getJuanpiHomeData = () => {
	return hyRequest.post('/goods', {
		page:1,
		count: 10
	})
}