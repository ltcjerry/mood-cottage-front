import { useEffect, useState } from "react"
import { SearchPanel } from './search-panel'
import { ShowList } from './show-list'
import {cleanObject} from 'utils/common'
import { useDebounce } from 'hook/common'
import qs from 'qs'
export const ProjectList = () => {
    const [users, setUsers] = useState([])
    const [param, setParam] = useState({ name: '', personId: ''})
    const debounceParam = useDebounce(param, 3000)
    const [list, setList] = useState([])
    const apiUrl = process.env.REACT_APP_API_URL
    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async res => {
            if (res.ok) {
                setList(await res.json())
            }
        })
    }, [debounceParam])
    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async res => {
            if (res.ok) {
                setUsers(await res.json())
            }
        })
    }, [])
    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam}/>
            <ShowList users={users} list={list}/>
        </div>
    )
}