import React, { useState } from 'react';
import { Modal, Button } from "semantic-ui-react";

function ModalError(props) {
    const {setError} = props;
    const [open, setOpen] = useState(true);

    return (
        <Modal
            onClose={() => (setOpen(false), setError(false))}
            onOpen={() => setOpen(true)}
            open={open}
        >
            <Modal.Content image>
                Something went wrong with your authorization, your booking hasn't been registered.
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={() => (setOpen(false), setError(false))}>
                    Back to booking
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default ModalError