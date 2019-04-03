import React from "react";
import { View } from "react-native";

import SearchNavigate from "../../navigation/SearchNavigate";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <SearchNavigate />;
  }
}
