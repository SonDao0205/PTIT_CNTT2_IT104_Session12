import React, { Component } from 'react';
import StudentControls from './StudentControls';
import StudentTable from './StudentTable';
import StudentForm from './StudentForm';
import '../styles/style.css';

export default class PTIT_CNTT2_IT104_Session12_Bai10 extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <StudentControls />
            <StudentTable />
          </div>
        </div>

        <div className="col-5 grid-margin">
          <StudentForm />
        </div>
      </div>
    );
  }
}
