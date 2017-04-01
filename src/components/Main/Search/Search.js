import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {

  //change state for redux on user inputs
  handleChange = (e) => {
    console.log(e.target.value);
  }

  render() {
    return(
    	<div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="input-group col-md-12">
              <input type="text" className="form-control input" placeholder="Search Pokemon"
               onChange={this.handleChange} />
              <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                      <i className="glyphicon glyphicon-search"></i>
                  </button>
              </span>
          </div>
        </div>
    	</div>
    )
  }
}

export default connect()(Search);
