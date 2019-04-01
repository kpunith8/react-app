import React, { Component } from 'react'

const sampleList = [{
  name: 'Punith',
  link: 'kpunith8@gmail.com'
},
{
  name: 'Sahana',
  link: 'sahanapunith@gmail.com'
}];

class App1 extends Component {
  state = { isLinkClicked: false }

  onLinkClicked = (event) => {
    event.preventDefault();
    this.setState({ isLinkClicked: !this.state.isLinkClicked })
  }

  render() {

    return (
      <div>
        <ul style={{ fontSize: 30, listStyleType: 'none' }}>
          {
            sampleList.map(item =>
              (<div key={item.name}>
                <li><a href='' onClick={this.onLinkClicked}>{item.link}</a></li>
              </div>)
            )
          }
        </ul>
        {this.state.isLinkClicked && <h1>Link clicked!</h1>}
      </div>
    )
  }
}

export default App1;
