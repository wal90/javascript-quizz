import { Container, Typography, Stack } from '@mui/material'
import './App.css'
import { JavaScriptLogo } from './JavaScriptLogo'
import { Start } from './Start'

function App() {
  const questions = useQuestionsStore(state => state.questions)
  return (
    <main>
      <Container maxWidth='sm'>
        <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
          <JavaScriptLogo />
            <Typography variant='h2' component='h1'>
              JavaScript Quizz 
            </Typography>
        </Stack>

        <Start />
      
      </Container>
    
    </main>
  )
}

export default App
