var navBarNameStyle = {
    position: "absolute",
    right: "20px",
    top: "10px"
};

var NavBar = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
		        <div className="container center-block" id="banner_title">
			        <h3 className="text-center">[302poignees]</h3>
		        </div>
		        <p style={navBarNameStyle} className="navbar-text text-right">villev_h</p>
	        </nav>
      );
    }
});
ReactDOM.render(
  <NavBar />,
  document.getElementById('navbar')
);