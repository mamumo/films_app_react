var React = require('react')
var Film = require('./Film')
var FilmsList = React.createClass({
 
  

  // propTypes: {
  //   data:React.PropTypes.array.isRequired,
  //   handleCommentDelete:React.PropTypes.func.isRequired
  // },


  render:function(){
    var filmNodes = this.props.data.map(function(film){
      return (
        <Film title={film.title} id={film.id} key={film.id}>
        {film.text}
        </Film>
        )
    }.bind(this));



    return(
      <div className='film-list'>
        {filmNodes}
      </div>
      )
  }

})

module.exports = FilmsList