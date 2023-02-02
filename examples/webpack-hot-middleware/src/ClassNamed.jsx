import { Component } from 'react';
import { FunctionNamedInsideClassNamed } from './FunctionNamedInsideClassNamed';

export class ClassNamed extends Component {
  render() {
    return (
      <div style={{ background: 'green' }}>
        <h3>Class Named ahaha</h3>
        <div style={{ marginLeft: 32 }}>
          <FunctionNamedInsideClassNamed />
        </div>
      </div>
    );
  }
}
