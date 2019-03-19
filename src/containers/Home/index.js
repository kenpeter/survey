import React, { Component } from 'react';
import { connect } from 'react-redux';
/* eslint-disable import/no-named-default */
import { default as HomeComponent } from '../../components/Home';
import { loadHomeAPI } from '../../reducers/home';
import { filterGenderColor, filterGenderFruit } from '../../helpers/filter';

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
    this.props.loadHomeAPIProps(this.state);
  }

  filterClick = (e) => {
    // fire reducer
    this.props.loadHomeAPIProps(this.state);
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

    let colorChartData = {
      labels: ["purple", "turquoise", "aquamarine"],
      datasets: [
        {
          label: "male_data",
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: [
            filterGenderColor(data, 'male', 'purple'),
            filterGenderColor(data, 'male', 'turquoise'),
            filterGenderColor(data, 'male', 'aquamarine')
          ]
        },
        {
          label: "female_data",
          fillColor: "rgba(151,187,205,0.5)",
          strokeColor: "rgba(151,187,205,0.8)",
          highlightFill: "rgba(151,187,205,0.75)",
          highlightStroke: "rgba(151,187,205,1)",
          data: [
            filterGenderColor(data, 'female', 'purple'),
            filterGenderColor(data, 'female', 'turquoise'),
            filterGenderColor(data, 'female', 'aquamarine')
          ]
        }
      ]
    };

    let fruitChartData = {
      labels: ["mango", "banana", "lychee"],
      datasets: [
        {
          label: "male_data",
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: [
            filterGenderFruit(data, 'male', 'mango'),
            filterGenderFruit(data, 'male', 'banana'),
            filterGenderFruit(data, 'male', 'lychee')
          ]
        },
        {
          label: "female_data",
          fillColor: "rgba(151,187,205,0.5)",
          strokeColor: "rgba(151,187,205,0.8)",
          highlightFill: "rgba(151,187,205,0.75)",
          highlightStroke: "rgba(151,187,205,1)",
          data: [
            filterGenderFruit(data, 'female', 'mango'),
            filterGenderFruit(data, 'female', 'banana'),
            filterGenderFruit(data, 'female', 'lychee')
          ]
        }
      ]
    };

    return (
      <div>
        {
          data.length === 0 ?
            <p>Loading....</p>
            :
            <HomeComponent
              data={data}
              colorChartData={colorChartData}
              fruitChartData={fruitChartData}
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
  loadHomeAPIProps: (obj) => dispatch(loadHomeAPI(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
