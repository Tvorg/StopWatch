import { fromEvent,  } from 'rxjs';
import { map, buffer, filter, debounceTime } from 'rxjs/operators';

function DoubleClick() {
    const mouse$ = fromEvent(document, 'click')

    const buff$ = mouse$.pipe(
        debounceTime(299),
    )

    const click$ = mouse$.pipe(
        buffer(buff$),
        map(list => {
            return list.length;
        }),
        filter(x => x === 2),
    )

    click$.subscribe(() => {
        console.log('doubleclick')
    })
}
export default DoubleClick;