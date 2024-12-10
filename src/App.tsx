import { ChakraProvider } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
// import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider >
      <Button>Click me</Button>
      
    </ChakraProvider>
  );
}

export default App;