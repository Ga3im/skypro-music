import {timeTrack} from './formatTime';

describe('formatTime', ()=>{
    it('Формат времени', ()=>{
        expect(timeTrack(10)).toBe('0:10');
        expect(timeTrack(60)).toBe('1:00');
    })
})