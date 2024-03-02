// rafce
import { Modal } from 'antd';

const ModalCustom = ({ title, content, isModalOpen, handleCancel }) => {
  return (
    <Modal
      footer={null}
      title={title}
      open={isModalOpen}
      onCancel={handleCancel}
    >
      {content}
    </Modal>
  );
};

export default ModalCustom;
