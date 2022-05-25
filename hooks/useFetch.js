import React, {useState, useEffect} from 'react'

export default useFetch = (url) => {
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState([])

	const fetchData = async() => {
		const fetchUrl = await fetch(url)
		const json = await fetchUrl.json()
		setLoading(false)
		setData(json)
	}
	
	useEffect(() => {
		fetchData()
	},[])

	return {loading, data}

}