import { QueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      onError: (error: any) => {
        const message =
          error.apiMessage || error.message || 'Something went wrong';
        toast.error(message);
      },
      onSuccess: (data: any) => {
        if (data?.apiMessage) {
          toast.success(data.apiMessage);
        }
      },
    },
  },
});
