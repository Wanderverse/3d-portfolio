import Loader from '@/components/dom/Loader'
import { generateRandomInteger } from '@/utils/numberUtils'
const Loading = () => {
  return <Loader dotVariant={generateRandomInteger(0, 11)} />
}

export default Loading
