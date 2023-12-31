import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import React from 'react';

type ProtectedWrapperProps = {
  children: React.ReactNode;
  redirectPath: string;
};

const ProtectedWrapper = ({
  children,
  redirectPath,
}: ProtectedWrapperProps) => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
export default ProtectedWrapper;
