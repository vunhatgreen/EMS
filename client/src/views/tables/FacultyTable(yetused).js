import React from 'react'
import {Table} from 'reactstrap'

export default class DepartmentTable extends React.Component {
    render() {
        return(
            <Table hover>
            <thead className="text-primary">
                <tr>
                    <th width="20%">ID</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                {
                    departments.map((department) =>
                        <>
                            {
                                department.name.toLowerCase().includes(filter.toLowerCase()) &&
                                <tr onClick={() => this.toggleModal(department)} style={{ cursor: "pointer" }}>
                                    <td>{department.id}</td>
                                    <td>{department.name}</td>
                                </tr>
                            }
                        </>
                    )
                }
            </tbody>
        </Table>
        )
    }
}