import { Constants } from '../../common/constant'
import './TopBar.css'


export function TopBar() {
    return <div id="top-tab-bar" style={{height:`${Constants.dimensions.topBarHeight}px`}}>
        <div id='colored-circle' className='red'></div>
        <div id='colored-circle' className='yellow'></div>
        <div id='colored-circle' className='green'></div>
    </div>
}