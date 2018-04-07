import React, { Component } from 'react';
import Header from '../containers/Header';
import { connect } from 'react-redux';
import { fetchPhoto } from '../actions';

class LandingPage extends Component {
    
  componentDidMount() {
    this.props.fetchPhoto();
  }

  render() {
    const { photo } = this.props;

    return (
      <div
        className='photo-container'
        style={{ backgroundImage: `url(${photo})` }}
      >
        <Header />
        <div className='title-container'>
          <h1 className='app-title'>Jetsetter</h1>
          <p className='tag-line'>The ultimate app for the travel enthusiast</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ photo, photoIsLoading, photoError }) => ({
  photo,
  photoIsLoading,
  photoError
})

const mapDispatchToProps = (dispatch) => ({
  fetchPhoto: () => dispatch(fetchPhoto())
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
