import { useState } from 'react';
import './Metronome.css';

function Metronome() {
  const [tempo, setTempo] = useState(20);

  function handleChange(e) {
    const { value } = e.target;
    setTempo(value);
  }

  function handleClick(e) {
    const { name } = e.target;
    name === 'decrease'
      ? setTempo((prevTempo) => +prevTempo - 1)
      : setTempo((prevTempo) => +prevTempo + 1);
  }

  return (
    <>
      <div className='container'>
        <div className='metronome'>
          <div className='bpm-display'>
            <span className='tempo'>{tempo}</span>
            <span className='bpm'>BPM</span>
          </div>
          <div className='tempo-text'>Fast</div>
          <div className='tempo-settings'>
            <button
              className='tempo-adjust-btn tempo-decrease'
              name='decrease'
              onClick={handleClick}
            >
              -
            </button>
            <input
              name='tempo'
              type='range'
              min={20}
              max={280}
              step={1}
              className='slider'
              value={tempo}
              onChange={handleChange}
            />
            <button
              className='tempo-adjust-btn tempo-increase'
              name='increase'
              onClick={handleClick}
            >
              +
            </button>
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
