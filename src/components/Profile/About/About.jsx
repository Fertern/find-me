import s from "./About.module.css";
import React, { Component } from "react";

export default class About extends Component {
  state = {
    isStatusEditing: false,
    status: this.props.status
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }
  editStatus = () => {
    this.setState({ isStatusEditing: !this.state.isStatusEditing });
    this.props.updateUpStatus(this.state.status);
  };
  onStatusChange = e => {
    this.setState({ status: e.currentTarget.value });
  };
  render() {
    const { name, job } = this.props;
    const { isStatusEditing, status } = this.state;
    return (
      <div className={s.wrapper}>
        <div className={s.name}>{name}</div>
        <div className={s.lookingForAJob}>
          {job ? (
            <span className={s.lookTrue}>Searching for a job!</span>
          ) : (
            <span className={s.lookFalse}>Already has a job</span>
          )}
        </div>
        {isStatusEditing ? (
          <div className={s.changeStatus}>
            <input
              onChange={this.onStatusChange}
              autoFocus
              onBlur={this.editStatus}
              placeholder={"Write new status here!"}
              value={this.state.status}
            />
          </div>
        ) : (
          <div onDoubleClick={this.editStatus} className={s.status}>
            {status || "No status("}
          </div>
        )}
      </div>
    );
  }
}
