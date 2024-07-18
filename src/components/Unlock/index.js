import {useState} from 'react'
import {
  UnlockContainer,
  UnlockImage,
  UnlockPara,
  UnlockButton,
} from './styledComponents'

const Unlock = () => {
  const [isLock, setLock] = useState(true)
  const lockImage = isLock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  return (
    <UnlockContainer>
      <UnlockImage src={lockImage} alt={isLock ? 'lock' : 'unlock'} />
      <UnlockPara>Your Device is {isLock ? 'Locked' : 'Unlocked'}</UnlockPara>
      <UnlockButton
        type="button"
        onClick={() => setLock(prevLock => !prevLock)}
      >
        {isLock ? 'Unlock' : 'Lock'}
      </UnlockButton>
    </UnlockContainer>
  )
}

export default Unlock
