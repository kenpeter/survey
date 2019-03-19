import React, { Component } from 'react';
import { connect } from 'react-redux';
/* eslint-disable import/no-named-default */
import { default as HomeComponent } from '../../components/Home';
import { loadHomeAPI } from '../../reducers/home';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteColor: "",
      favoriteFruit: "",
      gender: ""
    }
  }

  componentDidMount() {
    /* eslint-disable react/destructuring-assignment */
    this.props.loadHomeAPIProps();
  }

  filterClick = (e) => {
    console.log(this.state);
  }

  favoriteColorChange = (e) => {
    this.setState({favoriteColor: e.target.value});
  }

  favoriteFruitChange = (e) => {
    this.setState({favoriteFruit: e.target.value});
  }

  genderChange = (e) => {
    this.setState({gender: e.target.value});
  }


  render() {
    const { data } = this.props;

    return (
      <div>
        {
          data.length === 0 ?
            <p>Loading....</p>
            :
            <HomeComponent
              data={data}
              favoriteColorChange={this.favoriteColorChange}
              favoriteFruitChange={this.favoriteFruitChange}
              genderChange={this.genderChange}
              filterClick={this.filterClick}
              state={this.state}
            />
        }
      </div>
    );
  }
}

Home.defaultProps = {
  data: []
};

const mapStateToProps = (state) => {
  return {
    data: state.homeReducer.data
  }
};

const mapDispatchToProps = dispatch => ({
  loadHomeAPIProps: () => dispatch(loadHomeAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
