import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Card,
  Stack,
  Button,
  Container,
  Typography,
} from '@mui/material';

// components
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';


function App() {
  return (
    <Page title="Dagangan">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Dagangan
          </Typography>
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Dagangan
          </Button>
        </Stack>
        <Card>
          <h1>
            hallo
          </h1>
        </Card>
      </Container>
    </Page>
  );
}


export default App;
