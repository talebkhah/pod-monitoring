type dataRequestGetHealthCheck = {
  apiAddress: string;
  onSuccess: (data: string) => void;
  onFailed: (error: string) => void;
};

export default async (callbacks: dataRequestGetHealthCheck) => {
  const { onSuccess, onFailed, apiAddress } = callbacks;

  try {
    await fetch(apiAddress);

    onSuccess('frontend:successed,backend:successed');
  } catch (error) {
    onFailed('frontend:successed,backend:failed');
  }
};
