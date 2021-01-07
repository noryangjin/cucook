import { useEffect, useState } from 'react';
import CreateRoomModal from '../../../components/home/modal/CreateRoomModal';

const CreateRoomModalContainer = () => {
  const [passwordButton, setPasswordButton] = useState<boolean | null>(null);

  const onPasswordButton = () => {
    setPasswordButton(true);
    if (passwordButton) {
      setPasswordButton(false);
    }
  };

  return (
    <CreateRoomModal
      passwordButton={passwordButton}
      onPasswordButton={onPasswordButton}
    />
  );
};

export default CreateRoomModalContainer;
