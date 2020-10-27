import React, { Component } from 'react';
import Firebase from "firebase";
import config from "./config";

class Owner extends Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      developers: []
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    Firebase.database()
      .ref("/")
      .set(this.state);
    console.log("DATA SAVED");
  };

  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let name = this.refs.name.value;
    let addr = this.refs.addr.value;
    let uid = this.refs.uid.value;
    let price = this.refs.price.value;

    if (uid && name && addr) {
      const { developers } = this.state;
      const devIndex = developers.findIndex(data => {
        return data.uid === uid;
      });
      developers[devIndex].name = name;
      developers[devIndex].addr = addr;
      developers[devIndex].price = price;
      this.setState({ developers });
    } else if (name && addr && price) {
      const uid = new Date().getTime().toString();
      const { developers } = this.state;
      developers.push({ uid, name, addr, price });
      this.setState({ developers });
    }

    this.refs.name.value = "";
    this.refs.addr.value = "";
    this.refs.uid.value = "";
    this.refs.price.value = "";
  };

  removeData = developer => {
    const { developers } = this.state;
    const newState = developers.filter(data => {
      return data.uid !== developer.uid;
    });
    this.setState({ developers: newState });
  };

  updateData = developer => {
    this.refs.uid.value = developer.uid;
    this.refs.name.value = developer.name;
    this.refs.addr.value = developer.addr;
    this.refs.price.value = developer.price;
  };

  render() {
    const { developers } = this.state;
    return (
      <React.Fragment>
        <div>
          <h1>Owner Portal</h1>
          <p>This is the Owner's viewing portal.</p>
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
                    <button
                      onClick={() => this.removeData(developer)}
                      className="btn btn-link"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.updateData(developer)}
                      className="btn btn-link"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h3>Add or edit a listing below:</h3>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <input type="hidden" ref="uid" />
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      ref="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Address</label>
                    <input
                      type="text"
                      ref="addr"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Price</label>
                    <input
                      type="text"
                      ref="price"
                      className="form-control"
                      placeholder="Price"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Owner;