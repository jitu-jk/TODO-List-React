import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


class TodoFilter extends Component {

  render() {

    const allClass = (this.props.status==="none") ? "filterSelected" : "";
    const completeClass = (this.props.status==="complete") ? "filterSelected" : "";
    const todoClass = (this.props.status==="todo") ? "filterSelected" : "";

    return(
        <div>
          <RaisedButton className={allClass} label="All Task" onClick={this.props.onSelectFilter.bind(this,"none")} />
          <RaisedButton className={completeClass} label="Task Completed" onClick={this.props.onSelectFilter.bind(this,"complete")} />
          <RaisedButton className={todoClass} label="Task Remaining" onClick={this.props.onSelectFilter.bind(this,"todo")} />
        </div>
    )
  }
}

TodoFilter.propTypes = {
  status: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
}

export default TodoFilter;
