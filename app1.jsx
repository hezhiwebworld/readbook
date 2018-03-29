import throttle from 'lodsah.throttle';

class LoadMoreButton extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleClickThrottled = throttle(this.handleClick, 1000);
    }

    componentWillUnmount() {
      this.handleClickThrottled.cancel();
    }

    render() {
      return <button onClick={this.handleClickThrottled} > load More</button>
    }

    handleChange( e ) {
      this.emitChangeDebouned
    } 


}