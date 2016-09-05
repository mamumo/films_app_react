var React = require('react')

var Film = React.createClass({

  // propTypes:{
  //   title:React.PropTypes.string.isRequired
  // },

  // handleDelete: function(){
  //   this.props.handleCommentDelete(this.props.id)
  // },

  render:function(){
    return(
      <div className='film'>
      <h2 className='film-title'>
      {this.props.title}
      </h2>
      {this.props.children}
      </div>
      
      )
  }

})

module.exports = Film