import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

import { getClientByID } from '../../Api/clientsService';
import {
  deleteOrder,
  getOrderByID,
  markOrderAsPaided,
  markOrderAsUnpaided,
} from '../../Api/ordersService';
import { TClient, TOrder } from '../../types/customTypes';
import ConfirmAlert from '../ConfirmAlert/ConfirmAlert';

const Order = () => {
  const { id } = useParams();
  const [confirmAlertIsOpen, setConfirmAlertIsOpen] = useState(false);
  const [order, setOrder] = useState<TOrder | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [client, setClient] = useState<TClient | null>(null);

  const fetchOrder = async (id: string) => {
    try {
      setIsLoading(true);
      const { data } = await getOrderByID(id);
      setOrder(data);
    } catch (error) {
      setError('An unexpected error occurred. Please try again later');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchClient = async (id: string) => {
    try {
      setIsLoading(true);
      const { data } = await getClientByID(id);
      setClient(data);
    } catch (error) {
      setError('An unexpected errro occurred!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchOrder(id);
    }
  }, [id]);

  useEffect(() => {
    if (order) {
      fetchClient(order.client);
    }
  }, [order]);

  const handleDeleteOrder = async () => {
    try {
      setIsLoading(true);
      if (id) {
        await deleteOrder(id);
      } else {
        throw new Error();
      }
      navigate('/orders');
    } catch (error) {
      setError(
        'An unexpected error uccurred while trying to delete an order. Please try again later',
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseConfirmAlert = () => {
    setConfirmAlertIsOpen(false);
  };

  const handleOpenCofirmAlert = () => {
    setConfirmAlertIsOpen(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleMakePaided = async () => {
    if (order?.id) {
      const id = order?.id.toString();
      await markOrderAsPaided(id);
    }
  };

  const handleMakeUnpaid = async () => {
    if (order?.id) {
      const id = order?.id.toString();
      await markOrderAsUnpaided(id);
    }
  };

  return (
    <div>
      <ConfirmAlert
        confirmedAction={handleDeleteOrder}
        handleClose={handleCloseConfirmAlert}
        open={confirmAlertIsOpen}
        title='Do you want to delete order?'
      />
      <Link to={`/clients/${client?.id}`}>{`${client?.name} ${client?.surname}`}</Link>
      <br />
      {JSON.stringify(order)}
      <Button
        color='error'
        disabled={isLoading}
        variant='contained'
        onClick={handleOpenCofirmAlert}
      >
        Delete order
      </Button>
      <Button variant='outlined' onClick={handleMakePaided}>
        change order to paided
      </Button>
      <Button variant='outlined' onClick={handleMakeUnpaid}>
        change order to unpaided
      </Button>
    </div>
  );
};
export default Order;
