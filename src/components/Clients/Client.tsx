import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';

import { deleteClient, getClientByID } from '../../Api/clientsService';
import ConfirmAlert from '../ConfirmAlert/ConfirmAlert';
import style from './Clients.module.css';

// const useDeleteClientMutation = (id: string, onSuccess?:()=>void,onError:()=>void)=> useMutation({
//     mutationFn: () => {
//       if (!id) throw new Error('No id');
//       return deleteClient(id);
//     },
//     onSuccess: onSucces,
//     onError: onError
//   });

const Client = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [confirmAlertIsOpen, setConfirmAlertIsOpen] = useState(false);

  const handleGetClientById = (id: string) => {
    return getClientByID(id);
  };

  const navigateBackIndex = -1;
  const { data, error, isError, isLoading } = useQuery({
    queryFn: () => {
      if (id) return handleGetClientById(id);
    },
    queryKey: ['client', id],
  });

  const deleteClientMutation = useMutation({
    mutationFn: () => {
      if (!id) throw new Error('No id');
      return deleteClient(id);
    },
    onError: () => {
      // notify("Nie udalo się usunac klienta")
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      navigate('/clients');
    },
  });

  const handleDeleteClient = async () => {
    deleteClientMutation.mutate();
  };

  const handleOpenCofirmAlert = () => {
    setConfirmAlertIsOpen(true);
  };

  const handleCloseConfirmAlert = () => {
    setConfirmAlertIsOpen(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (!data) {
    return <div>Cant find any data</div>;
  }

  const clientDataElements = Object.entries(data.data).map(([key, value]) => {
    if (key === 'imgSrc') {
      return null;
    }

    return (
      <p key={key} className={style.clientProps}>
        <span className={style.propTitle}>{key}</span>
        <span className={style.propValue}>{value}</span>
      </p>
    );
  });

  return (
    <div className={style.client}>
      <ConfirmAlert
        confirmedAction={handleDeleteClient}
        handleClose={handleCloseConfirmAlert}
        open={confirmAlertIsOpen}
        title='You are about to delete the client. This action cannot be undone.'
      />
      <button
        className={`${style.goBackBtn} ${style.btn}`}
        onClick={() => navigate(navigateBackIndex)}
      >
        <IoMdArrowBack />
        Back
      </button>
      <h3 className={style.clientTitle}>Client</h3>
      <img alt='client' className={style.clientImg} src={data.data.imgSrc} />
      <div className={style.propsContainer}>{clientDataElements}</div>
      <div className={style.actionBtnsContainer}>
        <button className={style.deleteBtn} onClick={handleOpenCofirmAlert}>
          Delete
        </button>
        <button
          className={`${style.editBtn} ${style.btn}`}
          onClick={() => navigate(`/clients/${id}/edit`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};
export default Client;
