var React = require('react')
var FilmsList = require('./FilmsList')
var sampleData = [
{id:1, title:"Gone with the wind"},
{id:2, title:"James Bond Jnr"}
]


var OpeningsBox = React.createClass({

  getInitialState: function(){
    return {data:sampleData}
  },

  // handleCommentDelete: function(id){
  //   console.log("handling delete: ", id)
  //   var filteredComments = this.state.data.filter(function(comment){
  //     return comment.id != id
  //   })
  //   this.setState({data: filteredComments})
  // },

  // handleCommentSubmit: function(comment){
  //   comment.id = Date.now()
  //   var newComments = this.state.data.concat([comment])
  //   this.setState({data: newComments})
  // },


  render:function(){
    return(
      <div className='openings-box'>
      <h1> <a href="http://www.imdb.com/calendar/?region=gb&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=0WJMJP2CHGKS36522G0X&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_hd">UK Openings This Week</a></h1>
      <FilmsList data={this.state.data}/>
      </div>
      )
  }

})

module.exports = OpeningsBox