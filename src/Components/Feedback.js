import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Text,
  Button,
} from "@chakra-ui/react";

const Feedback = (props) => {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalContent>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalBody>
          <Text>{props.description}</Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClose}>
            <Text>Close</Text>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Feedback;
