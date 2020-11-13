import React, { ChangeEvent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { TextareaAutosize, Button } from '@material-ui/core';
import { createFeedbackClient } from './Client';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    textArea: {
      width: '100%',
      marginBottom: 8,
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  })
);

type Props = {
  isModalOpen: boolean;
  toggleModal: (open: boolean) => void;
};

export default function SimpleModal(props: Props) {
  const { isModalOpen, toggleModal } = props;
  const [formState, setFormState] = React.useState({
    content: '',
  });

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  const handleClose = () => {
    toggleModal(false);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    createFeedbackClient(formState);
    handleClose();
  };

  const handleFeedbackChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormState({ ...formState, content: event.target.value });
  };

  const body = (
    <form className={classes.paper} onSubmit={handleSubmit}>
      <h2 id="simple-modal-title">Feedback</h2>
      <TextareaAutosize
        aria-label="Feedback input"
        rowsMin={3}
        placeholder="Share your thoughts!"
        className={classes.textArea}
        onChange={handleFeedbackChange}
      />
      <div className={classes.buttonContainer}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </form>
  );

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
