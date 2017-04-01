import React, { Component } from 'react';
import { connect } from 'react-redux';

class Create  extends Component {

  render() {

    return(
    	<div className="row">
        <div className="col-md-4">
          <div className="input-group col-md-12">
              <input type="text" className="form-control input-lg" placeholder="Search Pokemon" />
              <span className="input-group-btn">
                  <button className="btn btn-info btn-lg" type="button">
                      <i className="glyphicon glyphicon-search"></i>
                  </button>
              </span>
          </div>
        </div>
    	</div>
    )
  }
}

export default connect()(Create);
