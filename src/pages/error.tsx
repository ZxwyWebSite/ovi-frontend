import { useRouteError } from 'react-router-dom'
import FourOhFour from '../components/FourOhFour'

export default function Error() {
  const error = useRouteError() as any //as { statusText: string | undefined; message: string }
  console.log(error)

  return <FourOhFour errorMsg={error.data} />
}
