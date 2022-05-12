import { Button } from '@mui/material';

function App(props) {
  const { product, handleChangeAngka } = props

  return (
    <>
        <Button
          onClick={handleChangeAngka}
        >
          change angka
        </Button>
        <h1>
          angka: {product.angka}
        </h1>
    </>
  );
}

export default App