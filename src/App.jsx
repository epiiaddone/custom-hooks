import './App.css'
import ToggleComponent from './1-useToggle/ToggleComponent';
import TimeoutComponent from './2-useTimeout/TimeoutComponent';
import DebounceComponent from './3-useDebounce/DebounceComponent';
import UpdateEffectComponent from './4-useUpdateEffect/UpdateEffectComponent';
import ArrayComponent from './5-useArray/ArrayComponent';
import PreviousComponent from './6-usePrevious/PreviousComponent';
import StateWithHistoryComponent from './7-useStateWithHistory/StateWithHistoryComponent';
import StorageComponent from './8-useStorage/StorageComponent';
import AsyncComponent from './9-useAsync/AsyncComponent';
import FetchComponent from './10-useFetch/FetchComponent';
import ScriptComponent from './11-useScript/ScriptComponent';
import DeepCompareEffectComponent from './12-useDeepCompareEffect/DeepCompareEffectComponent';
import EventListenerComponent from './13-useEventListener/EventListenerComponent';
import OnScreenComponent from './14-useOnScreen/OnScreenComponent';
import WindowSizeComponent from './15-useWindowSize/WindowSizeComponent';
import MediaQueryComponent from './16-useMediaQuery/MediaQueryComponent';
import GeolocationComponent from './17-useGeolocation/GeolocationComponent';
import StateWithValidationComponent from './18-useStateWithValidation/StateWithValidationComponent';
import SizeComponent from './19-useSize/SizeComponent';
import EffectOnceComponent from './20-useEffectOnce/EffectOnceComponent';
import ClickOutsideComponent from './21-useClickOutside/ClickOutsideComponent';
import DarkModeComponent from './22-useDarkMode/DarkModeComponent';
import CopyToClipboardComponent from './23-useCopyToClipboard/CopyToClipboardComponent';
import CookieComponent from './24-useCookie/CookieComponent';
import TranslationComponent from './25-useTranslation/TranslationComponent';
import OnlineStatusComponent from './26-useOnlineStatus/OnlineStatusComponent';
import RenderCountComponent from './27-useRenderCount/RenderCountComponent';
import DebugInformationComponent from './28-useDebugInformation/DebugInformationComponent';
import HoverComponent from './29-useHover/HoverComponent';
import LongPressComponent from './30-useLongPress/LongPressComponent';

function App() {

  return (
   <>
   <h5>1-Toggle</h5>
  <ToggleComponent/>
  <hr></hr>
  <h5>2-Timeout</h5>
  <TimeoutComponent/>
  <hr></hr>
  <h5>3-Debounce</h5>
  <DebounceComponent/>
  <hr></hr>
  <h5>4-UpdateEffectComponent</h5>
  <UpdateEffectComponent/>
  <hr></hr>
  <h5>5-ArrayComponent</h5>
  <ArrayComponent/>
  <hr></hr>
  <h5>6-PreviousComponent</h5>
  <PreviousComponent/>
  <hr></hr>
  <h5>7-StateWithHistoryComponent</h5>
  <StateWithHistoryComponent/>
  <hr></hr>
  <h5>8-StorageComponent</h5>
  <StorageComponent/>
  <hr></hr>
  <h5>9-AsyncComponent</h5>
  <AsyncComponent/>
  <hr></hr>
  <h5>10-FetchComponent - not a hook</h5>
  <FetchComponent/>
  <hr></hr>
  <h5>11-ScriptComponent</h5>
  a wrapper around document.body.appendChild(script)
  <ScriptComponent/>
  <hr></hr>
  <h5>12-DeepCompareEffectComponent - uses lodash</h5>
  <DeepCompareEffectComponent/>
  <hr></hr>
  <h5>13-EventListenerComponent</h5>
  <EventListenerComponent/>
  <hr></hr>
  <h5>14-OnScreenComponent - visisble when 200px above bottom of screen</h5>
  <OnScreenComponent/>
  <hr></hr>
  <h5>15-WindowSizeComponent</h5>
  <WindowSizeComponent/>
  <hr></hr>
  <h5>16-MediaQueryComponent</h5>
  <MediaQueryComponent/>
  <hr></hr>
  <h5>17-GeolocationComponent</h5>
  <GeolocationComponent/>
  <hr></hr>
  <h5>18-StateWithValidationComponent</h5>
  <StateWithValidationComponent/>
  <hr></hr>
  <h5>19-SizeComponent</h5>
  <SizeComponent/>
  <hr></hr>
  <h5>20-EffectOnceComponent</h5>
  <EffectOnceComponent/>
  <hr></hr>
  <h5>21-ClickOutsideComponent</h5>
  <ClickOutsideComponent/>
  <hr></hr>
  <h5>22-DarkModeComponent</h5>
  <DarkModeComponent/>
  <hr></hr>
  <h5>23-CopyToClipboardComponent - npm i copy-to-clipboard</h5>
  <CopyToClipboardComponent/>
  <hr></hr>
  <h5>24-CookieComponent - npm i js-cookie</h5>
  <CookieComponent/>
  <hr></hr>
  <h5>25- TranslationComponent</h5>
  <TranslationComponent/>
  <hr></hr>
  <h5>26- OnlineStatusComponent</h5>
  <OnlineStatusComponent/>
  <hr></hr>
  <h5>27- RenderCountComponent</h5>
  <RenderCountComponent/>
  <hr></hr>
  <h5>28- DebugInformationComponent</h5>
  <DebugInformationComponent/>
  <hr></hr>
  <h5>29- HoverComponent</h5>
  <HoverComponent/>
  <hr></hr>
  <h5>30- LongPressComponent</h5>
  <LongPressComponent/>
  </>
  )
}

export default App
