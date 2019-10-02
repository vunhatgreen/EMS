import React from 'react'
import {Table} from 'reactstrap'

export default class FacultyTable extends React.Component {
    render() {
        return(
            <Table hover>
            <thead className="text-primary">
                <tr>
                    <th width="20%">ID</th>
                    <th>Faculty</th>
                </tr>
            </thead>
            <tbody>
                {
                    faculties.map((faculty) =>
                        <>
                            {
                                faculty.name.toLowerCase().includes(filter.toLowerCase()) &&
                                <tr onClick={() => this.toggleModal(faculty)} style={{ cursor: "pointer" }}>
                                    <td>{faculty.id}</td>
                                    <td>{faculty.name}</td>
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