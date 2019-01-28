import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'shorttext' })
export class ShortTextPipe implements PipeTransform{

    transform(text: string, size: number = 250): any{
        if(size > text.length)
            return text
        else
            return text.slice(0,size)
    }

}