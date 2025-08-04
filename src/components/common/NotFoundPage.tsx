// src/components/common/NotFoundPage.tsx
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Box className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-gray-50">
      <Typography variant="h2" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" className="mb-6">
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
