import React, { Component } from 'react';
import Firebase from "firebase";
import config from "./config";

class Farmer extends Component {
  constructor(props) {
    super(props);
    if (Firebase.apps.length === 0) {
      Firebase.initializeApp(config);
  }

    this.state = {
      developers: []
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  render() {
    const { developers } = this.state;
    return (
      <React.Fragment>
        <div>
          <h1>Farmer Portal</h1>
          <p>This is the Farmer's viewing portal.</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h3>Owner's Listings</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {developers.map(developer => (
                <div
                  key={developer.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{developer.name}</h5>
                    <p className="card-text">{developer.addr}</p>
                    <p className="card-text">{developer.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Farmer;