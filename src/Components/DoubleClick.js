import { fromEvent,  } from 'rxjs';
import { map, buffer, filter, debounceTime } from 'rxjs/operators';


function DoubleClick(ref, callbackDoubleClick) {
    const mouse$ = fromEvent(ref, 'click')

    const buff$ = mouse$.pipe(
        debounceTime(299),
    )

    const doubleClick$ = mouse$.pipe(
        buffer(buff$),
        map(list => {
            return list.length;
        }),
        filter(x => x === 2),
    )

    doubleClick$.subscribe(() => {
        console.log('doubleclick')
       if(callbackDoubleClick) {
           callbackDoubleClick()
       }
    })
}
export default DoubleClick;