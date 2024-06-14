import { useDispatch } from 'react-redux'
import { filterTerm } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const term = e.target.value
        dispatch(filterTerm(term))
    }

    const style = {
        marginBottom: 15
    }

    return (
        <div style={style}>
            Filter
            <input 
                type='text'
                onChange={handleChange}
            />
        </div>
    )
}

export default Filter