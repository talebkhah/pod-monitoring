import React, { useEffect, useState } from 'react';
import healthCheck from './healthCheck';

type monitoringType = {
  apiAddress: string;
};

const MonitoringHealthCheck = (props: monitoringType) => {
  const [status, setStatus] = useState('frontend:successed,backend:waiting');
  const { apiAddress } = props;

  useEffect(() => {
    healthCheck({
      apiAddress: apiAddress,
      onSuccess: successMessage => {
        setStatus(successMessage);
      },
      onFailed: errorMessage => {
        setStatus(errorMessage);
      },
    });
  }, [apiAddress]);

  return <>{status}</>;
};

export default React.memo(MonitoringHealthCheck);
