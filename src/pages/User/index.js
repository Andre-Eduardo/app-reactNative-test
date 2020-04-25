import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import api from '../../services/api';
// import { Container } from './styles';

export default class User extends Component {
  state = {
    stars: [],
  };

  static propTypes = {
    route: PropTypes.shape().isRequired,
  };

  async componentDidMount() {
    this.setTitle();
    const { route } = this.props;
    const users = route.params.user;
    console.tron.log(users);
    const response = await api.get(`/users/${users.login}/starred`);
    this.setState({ stars: response.data });
  }

  setTitle = () => {
    const { navigation, route } = this.props;
    navigation.setOptions({
      title: route.params.user.name,
    });
  };

  render() {
    const { stars } = this.state;
    return <View />;
  }
}
