import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AddCircleOutline, Edit } from '@material-ui/icons';

export class AddEditModal extends Component {
  state = {
    open: false,
    description: '',
  };

  componentWillReceiveProps(newProps) {
    if (!newProps.Item) {
      this.setState({ description: '' });
    } else if (newProps.Item !== this.props.Item) {
      this.setState({ description: newProps.Item.name });
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  saveChanges = () => {
    if (this.props.Action === 'add') {
      this.props.SaveChanges({ description: this.state.description });
    } else {
      this.props.SaveChanges({
        description: this.state.description,
        itemId: this.props.Item.id,
        locationId: this.props.LocationId,
      });
      this.handleClose();
    }
  };

  renderButton() {
    if (this.props.Action === 'add') {
      return <AddCircleOutline onClick={this.handleClickOpen} />;
    } else {
      return <Edit onClick={this.handleClickOpen} />;
    }
  }

  render() {
    return (
      <div>
        {this.renderButton()}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add or Edit</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="text"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.saveChanges} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default AddEditModal;
