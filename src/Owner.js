import React from 'react';
import Firebase from 'firebase';
import config from './config';

class Owner extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      listings: []
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
    let own = this.own.value;
    let addr = this.addr.value;
    let price = this.price.value;
    let uid = this.uid.value;

    if (uid && own && addr && price) {
      const { listings } = this.state;
      const spaceIndex = listings.findIndex(data => {
        return data.uid === uid;
      });
      listings[spaceIndex].own = own;
      listings[spaceIndex].addr = addr;
      listings[spaceIndex].price = price;
      this.setState({ listings });
    } else if (own && addr && price) {
      const uid = new Date().getTime().toString();
      const { listings } = this.state;
      listings.push({ uid, own, addr, price });
      this.setState({ listings });
    }

    this.own.value = "";
    this.addr.value = "";
    this.price.value = "";
    this.uid.value = "";
  };

  removeData = listing => {
    const { listings } = this.state;
    const newState = listings.filter(data => {
      return data.uid !== listing.uid;
    });
    this.setState({ listings: newState });
  };

  updateData = listing => {
    this.uid.value = listing.uid;
    this.own.value = listing.own;
    this.addr.value = listing.addr;
    this.price.value = listing.price;
  };

  /*render() {
    const { listings } = this.state;
    return (
      <div className="container">
        <h1>Owner Spaces</h1>
        <p>Add a listing below to show your space to a farmer.</p>
        <Table listingData={listings} removeListing={this.removeListing} updateListing={this.updateListing}/>
        <h3>Add New Listing</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  };*/
  render() {
    const { listings } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>Firebase Development Team</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {listings.map(listing => (
                <div
                  key={listing.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{listing.own}</h5>
                    <p className="card-text">{listing.addr}</p>
                    <p className="card-text">{listing.price}</p>
                    <button
                      onClick={() => this.removeData(listing)}
                      className="btn btn-link"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.updateData(listing)}
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
              <h1>Add new team member here</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <input type="hidden" ref="uid" />
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      ref="own"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Role</label>
                    <input
                      type="text"
                      ref="role"
                      className="form-control"
                      placeholder="Role"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h3>
                Tutorial{" "}
                <a href="https://www.educative.io/edpresso/firebase-as-simple-database-to-react-app">
                  here
                </a>
              </h3>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default Owner;