import { fromEvent,  } from 'rxjs';
import { map } from 'rxjs/operators';


function Click(){
    const button = document.querySelector('.button');
    const clickEventSource = fromEvent(button, 'click').pipe(
        map(() => timer()));
}
export default Click;
