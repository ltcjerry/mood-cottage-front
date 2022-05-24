import { Input, Select } from "antd"

export const SearchPanel = ({ users, param, setParam}) => {
    return (
        <form>
            <div>
                <Input type="text" value={param.name} onChange={value => setParam({
                    ...param,
                    name: value
                })} />
                <Select value={param.personId} onChange={value => setParam({
                    ...param,
                    personId: value
                })}>
                    <Select.Option value={''}>负责人</Select.Option>
                   {
                       users.map(user => <Select.Option key={user.id} value={user.id}>{user.name}</Select.Option>)
                   }
                </Select>
            </div>
        </form>
    ) 
}