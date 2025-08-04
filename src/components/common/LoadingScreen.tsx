// src/components/common/LoadingScreen.tsx
import { CircularProgress, Box, Typography } from '@mui/material';

const LoadingScreen = () => {
  return (
    <Box className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <CircularProgress color="primary" size={48} />
      <Typography variant="h6" className="mt-4 text-gray-700">
        Loading...
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
