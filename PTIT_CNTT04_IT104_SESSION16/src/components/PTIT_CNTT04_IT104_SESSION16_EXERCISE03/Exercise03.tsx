import React, { Component } from 'react'

interface Color {
  label: string;
  name: string;
}

interface State {
  colors: Color[];
}

export default class Exercise03 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      colors: [
        { label: "Primary", name: "blue" },
        { label: "Secondary", name: "gray" },
        { label: "Success", name: "green" },
        { label: "Warning", name: "orange" },
        { label: "Danger", name: "red" },
        { label: "Info", name: "skyblue" },
        { label: "Light", name: "lightgray" },
        { label: "Dark", name: "black" },
      ]
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.colors.map((color, index) => (
            <button style={{backgroundColor: color.name}} key={index}>{color.label}</button>
          ))}
        </ul>
      </div>
    );
  }
}
