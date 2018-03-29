
import rafSchedule from 'raf-schd';

class ScrollListener extends React.Component {
   constructor( props ) {
      
      super( props )  
      this.handleScroll = this.handleScroll.bind(this);

      this.scheduleUpdate = rafSchedule(
        point  => this.props.onScroll( point )
      )

      
   }

   ComponentWillUnmount() {
      this.scheduleUpdate.cancel()
   }

   render() {
     return (
       <div
          style= {{ overflow : 'scroll' }}
          onScroll = { this.handleScroll }
       >
         <img src="./" alt="" srcset=""/>
       </div>
     )
   }

   
}


function treeTraversal(data, str) {
    if (str) {
        for (i in data) {
            if (data[i] == '[object Object]') {
                treeTraversal(data[i], str);
            } else {
                console.log(data[i]);
            }
        }
    } else {
        for (i in data) {
            if (data[i] == '[object Object]') {
                treeTraversal(data[i], i);
            } else {
                console.log(data[i]);
            }
        }
    }
}