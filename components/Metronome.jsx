import { useState } from 'react';
import './Metronome.css';

function Metronome() {
  return (
    <>
      <div className='container'>
        <div className='metronome'>
          <div className='bpm-display'>
            <span className='tempo'>120</span>
            <span className='bpm'>BPM</span>
          </div>
          <div className='tempo-text'>Fast</div>
          <div className='tempo-settings'>
            <button className='tempo-adjust-btn tempo-decrease'>-</button>
            <input
              type='range'
              min={20}
              max={280}
              step={1}
              className='slider'
            />
            <button className='tempo-adjust-btn tempo-increase'>+</button>
          </div>
          <button className='start-stop'>START</button>
          <div className='measures'>
            <button className='subtract-beats stepper-btn'>-</button>
            <div className='measure-count'>4</div>
            <button className='add-beats stepper-btn'>+</button>
          </div>
          <span className='beats-per-measure-text'>Beats per measure</span>
        </div>
      </div>
    </>
  );
}

export default Metronome;
