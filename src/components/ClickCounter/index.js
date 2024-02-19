import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  click = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div>
          <h1>
            The Button has been clicked <span>{count}</span> times
          </h1>
          <p>Click the button to increase the count</p>
          <button type="button" onClick={this.click}>
            Click me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
