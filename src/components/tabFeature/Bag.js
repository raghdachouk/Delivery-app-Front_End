import React from "react";

import Title from "../common/Title";
import CommandeNavigation from "../../navigation/CommandeNavigation";

export default class Bag extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    headerTitle: <Title />
  };
  render() {
    return <CommandeNavigation />;
  }
}
