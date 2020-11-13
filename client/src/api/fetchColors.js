import{ axiosWithAuth} from '../utils/axiosWithAuth'

export const fetchColors = () => {
    return axiosWithAuth()
    .get('/colors')
    .then((res) => {
        console.log ('fetchColors.js is happening, res: ', res)
        return res.data
    })
    .catch((error) => {
        console.log("error with fetchColors in fetchColors.js: ", error)
    })
} 