import React, { useState, useEffect } from 'react';
import { getContrastRatio } from '../../apiCall';
import AppThemeColor from '../../AppThemeColor';
import FillStar from './DataFiles/fillStar.png';
import EmptyStar from './DataFiles/emptyStar.png';

const MainContent = () => {
  const [_textColor, setTextColor] = useState('#0E2239');

  const [_backgroundColor, setBackgroundColor] = useState('#D9C485');

  const [_contrastRatio, setContrastRatio] = useState(0);

  const [_contrastRating, setContrastRating] = useState('---');

  const [AA, setAA] = useState('---');

  const [AAA, setAAA] = useState('---');

  const [AAL, setAAL] = useState('---');

  const [AAAL, setAAAL] = useState('---');

  const windowWidth = window.innerWidth;

  const { primaryColor, textColor, secondaryColor } = AppThemeColor.dark;

  const getContrastratio = () => {
    let backgroundColor = _backgroundColor.split('#')[1];
    let foregroundColor = _textColor.split('#')[1];

    getContrastRatio(backgroundColor, foregroundColor)
      .then((data) => {
        console.log('🚀data :', data);
        if (data.ratio) {
          setContrastRatio(data.ratio);
          setAA(data.AA);
          setAAA(data.AAA);
          setAAL(data.AALarge);
          setAAAL(data.AAALarge);
        }
      })
      .catch();
  };

  useEffect(() => {
    getContrastratio();
    setContrastRatioRating();
  });

  const setBGColor = (colorValue) => {
    setBackgroundColor(colorValue);
    getContrastratio();
  };

  const setTxtColor = (colorValue) => {
    setTextColor(colorValue);
    getContrastratio();
  };

  const setContrastRatioRating = () => {
    if (_contrastRatio <= 5) setContrastRating('Very Poor');
    else if (_contrastRatio > 5 && _contrastRatio <= 10)
      setContrastRating('Poor');
    else if (_contrastRatio > 10 && _contrastRatio <= 15)
      setContrastRating('Good');
    else setContrastRating('Very Good');
  };

  return (
    <div className='MainContent'>
      <div
        className={`main-content-child-dv input-parent-dv ${
          windowWidth < 1450 ? 'width-40' : 'width-30'
        }`}>
        <div className='input-color-row'>
          <div className='input-color input-col-1 input-group'>
            <label
              htmlFor='Background Color'
              style={{ color: primaryColor }}
              className='mb-8'>
              Background Color
            </label>
            <div className='input-color-parent-dv'>
              <label htmlFor='backgroundColor' style={{ color: textColor }}>
                {_backgroundColor}
              </label>
              <input
                type='color'
                name='color'
                id='textColorPicker'
                value={_backgroundColor}
                onInput={(e) => setBGColor(e.target.value)}
              />
            </div>
          </div>
          <div className='input-color input-col-2 input-group'>
            <label
              htmlFor='Text Color'
              style={{ color: primaryColor }}
              className='mb-8'>
              Text Color
            </label>
            <div className='input-color-parent-dv'>
              <label htmlFor='textColor' style={{ color: textColor }}>
                {_textColor}
              </label>
              <input
                type='color'
                name='color'
                id='textColorPicker'
                value={_textColor}
                onInput={(e) => setTxtColor(e.target.value)}
              />
            </div>
          </div>
          <div></div>
        </div>
        <div className='contrast-marking-row1'>
          <label
            htmlFor='Background Color'
            style={{ color: primaryColor }}
            className='contrast-marking-label mb-8'>
            Contrast
          </label>
          <div className='contrast-checker_contrast'>
            <div className='cc_top' style={{ background: secondaryColor }}>
              <label
                htmlFor='contrastRatioLabel'
                id='contrastRatioLabel'
                style={{ color: '#0E2239' }}>
                {_contrastRatio}
              </label>
              <div>
                <label htmlFor='ratingLabel' className='ratingLabel'>
                  {_contrastRating}
                </label>
                <div>
                  {Array.from(Array(7), (e, item) => {
                    return (
                      <img
                        key={_contrastRatio + item + ''}
                        src={
                          item + 1 < _contrastRatio / 3 ? FillStar : EmptyStar
                        }
                        className='rating-star'
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className='cc_bottom'>
              <div className='cc_left' style={{ background: secondaryColor }}>
                <label className='cc_bottom_label'>AA / AA-Large</label>
                <label className='cc_bottom_label'>
                  {AA} / {AAL}
                </label>
              </div>
              <div className='cc_right' style={{ background: secondaryColor }}>
                <label className='cc_bottom_label'>AAA / AAA-Large</label>
                <label className='cc_bottom_label'>
                  {AAA} / {AAAL}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='contrast-result-row2'>
          <p className='contrast-result-p' style={{ color: textColor }}>
            If ratio is less than 5 than contrast will be very poor or if ratio
            greater than 15 than it will be very good else it will be average.
          </p>
        </div>
      </div>
      <div
        className={`main-content-child-dv display-result-dv ${
          windowWidth < 1450 ? 'width-40' : 'width-30'
        }`}
        style={{
          background: _backgroundColor,
          borderColor: _backgroundColor,
        }}>
        <h1 style={{ color: _textColor }}>Quote n. 16</h1>
        <h5 style={{ color: _textColor }}>
          Even if you’re on the right track, you’ll get run over if you just sit
          there.
        </h5>
        <h6 style={{ color: _textColor, letterSpacing: '1px' }}>
          - Twinkle Goyal
        </h6>
      </div>
    </div>
  );
};

export default MainContent;
