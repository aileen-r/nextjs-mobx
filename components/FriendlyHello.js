import { inject, observer } from 'mobx-react';

const FriendlyHello = ({ BaseStore }) => {
  return <h1>{BaseStore.helloMessage}</h1>;
};

// export default class FriendlyHello extends Component {
//   componentDidMount() {
//     this.props.BaseStore.start();
//   }

//   componentWillUnmount() {
//     this.props.BaseStore.stop();
//   }

//   render() {
//     return <div>{this.props.BaseStore.helloMessage}</div>;
//   }
// }

export default inject('BaseStore')(observer(FriendlyHello));
