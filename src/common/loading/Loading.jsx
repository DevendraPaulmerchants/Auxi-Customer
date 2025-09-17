import { CircularProgress } from '@mui/joy';

function Loading() {
  return (
    <div className='flex items-center justify-center'>
       <CircularProgress thickness={4} size="md" />
    </div>
  )
}

export default Loading;