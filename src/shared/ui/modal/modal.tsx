import { FC, useState } from "react";
import {
  Button,
  Divider,
  Group,
  Modal,
  Rating,
  Stack,
  Text,
} from "@mantine/core";
import classes from "./modal.module.css";

interface ModalProps {
  opened: boolean;
  original_title: string;
  close: () => void;
  onSave: (ratingModal: number) => void;
  onRemove: () => void;
}

export const ModalUI: FC<ModalProps> = ({
  opened,
  original_title,
  close,
  onSave,
  onRemove,
}) => {
  const [ratingModal, setRatingModal] = useState(0);
  return (
    <Modal.Root opened={opened} onClose={close} centered size="sm">
      <Modal.Overlay />
      <Modal.Content radius="md">
        <Modal.Header p={16} mih={54}>
          <Modal.Title>Your rating</Modal.Title>
          <Modal.CloseButton size="xs" c="gray.4" />
        </Modal.Header>
        <Divider size="xs" color="gray.2" />
        <Modal.Body p={16}>
          <Stack>
            <Text fw={700}>{original_title}</Text>
            <Rating
              w="100%"
              classNames={{ root: classes.root_rating }}
              count={10}
              size="lg"
              onChange={setRatingModal}
              value={ratingModal}
            />
            <Group>
              <Button
                radius="md"
                color="purple.5"
                fw={600}
                classNames={{ root: classes.root_save }}
                onClick={() => onSave(ratingModal)}
              >
                Save
              </Button>
              <Button
                variant="transparent"
                fw={500}
                classNames={{ root: classes.root_remove }}
                onClick={() => {
                  setRatingModal(0);
                  onRemove();
                }}
              >
                Remove rating
              </Button>
            </Group>
          </Stack>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
