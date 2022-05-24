import { Table } from "antd"

export const ShowList = ({ users,list }) => {
    return (
        <Table 
            dataSource={list} 
            pagination={false}
            columns={[
                {title: '名称', dataIndex: 'name', sorter: (a, b) => a.name.localecompare(b.name)},
                {   title: '负责人', 
                    render(value, project) {
                        return <span>{users.find(user => user.id === project.personId)?.name || '未知'}</span>
                    }
                }
            ]}
        />
        
    )
}