import React, { Component } from 'react'
interface Subject{
    subjects:string[];
}
export default class SubjectList extends Component<{}, Subject> {
    constructor(props:{}){
        super(props);
        this.state = {
            subjects:["Toán", "Văn", "Anh", "Hóa", "Sinh"]
        }
    }
  render() {
    return (
      <div>
        <h2>Danh sách môn học</h2>
        <ul>
            {this.state.subjects.map((subject, index) => (
                <li key={index}>{subject}</li>
            ))}
        </ul>
      </div>
    )
  }
}
