import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';
import img0 from '../../method_0_img.png';
import imgEssence from '../../method_essence_img.png';
import imgMovement from '../../method_movement_img.png';
import imgResonance from '../../method_resonance_img.png';

const FadeSection = ({ children, delay = '0s' }) => {
  const [ref, isVisible] = useScrollFade();
  return (
    <div ref={ref} className={`scroll-fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: delay }}>
      {children}
    </div>
  );
};

const Method = () => {
  return (
    <section style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      <div style={{ padding: '0 40px' }}>
        
        {/* Top Block */}
        <div className="method-top-block fade-up-seq" style={{ animationDelay: '0.1s' }}>
          <div className="method-top-left">
            <h2 className="page-title en-text" style={{ marginBottom: '60px' }}>01. METHOD</h2>
            
            <p className="method-para en-text" style={{ fontSize: '1.5rem', marginBottom: '40px' }}>
              Our Point of View<br/>
              : The Glance Method
            </p>
            <p className="method-para">
              가치를 제대로 전하지 못하는 이유.<br/>
              가장 중요한 3 가지를<br/>
              선명히 만들어내지 못하기 때문입니다.
            </p>
            <p className="method-para kr-bold" style={{ fontSize: '1.5rem', marginTop: '40px' }}>
              본질 . 움직임 . 울림
            </p>
            <p className="method-para" style={{ marginTop: '40px' }}>
              Great stories do not spread by themselves.
            </p>
          </div>
          
          <div className="method-top-right">
            <img src={img0} alt="Method Intro" className="method-top-img" />
          </div>
        </div>

      </div>

      <div style={{ padding: '0 40px' }}>
        
        {/* Essence */}
        <FadeSection>
          <div className="method-row">
            <div className="method-col-img">
              <img src={imgEssence} alt="Essence" />
            </div>
            <div className="method-col-text">
              <div className="method-item-subtitle">- Branding</div>
              <h3 className="method-item-title en-text">ESSENCE</h3>
              <div className="method-item-desc">- 본질을 캐내어 다듬는 일.</div>
              <p className="method-item-body">
                왜 존재하는지, 어떤 생각을 하는지.<br/>
                그만의 고유한 가치를 캐내어 날카롭게 다듬지않으면<br/>
                좋은 이야기도 쉽게 평범해집니다.<br/>
                브랜딩은, 꾸며내는 것이 아닌 내재된 본질을 발견하는 데서 시작합니다.
              </p>
              <ul style={{ paddingLeft: '0', fontSize: '1.1rem', lineHeight: '2' }}>
                <li>Brand World Building</li>
                <li>Positioning & Narrative Architecture</li>
                <li>Logo, Color, Typo, Tone&manner System</li>
                <li>Package, Store, Goods, etc.</li>
              </ul>
            </div>
          </div>
        </FadeSection>

        {/* Movement */}
        <FadeSection>
          <div className="method-row">
            <div className="method-col-img">
              <img src={imgMovement} alt="Movement" />
            </div>
            <div className="method-col-text">
              <div className="method-item-subtitle">- Marketing</div>
              <h3 className="method-item-title en-text">MOVEMENT</h3>
              <div className="method-item-desc">— 움직임을 만들어내는 힘.</div>
              <p className="method-item-body">
                메시지는 스스로 퍼지지 않습니다.<br/>
                누구에게 닿을지. 어디에서 말을 걸지. 어떻게 움직이게 할지.<br/>
                관찰하고 고민하는 힘을 더해, 우리는 메시지가 더 많은 이들에게 가 닿도록 합니다.
              </p>
              <ul style={{ paddingLeft: '0', fontSize: '1.1rem', lineHeight: '2' }}>
                <li>Audience Architecture</li>
                <li>Cultural Distribution</li>
                <li>Growth Pathways</li>
              </ul>
            </div>
          </div>
        </FadeSection>

        {/* Resonance */}
        <FadeSection>
          <div className="method-row">
            <div className="method-col-img">
              <img src={imgResonance} alt="Resonance" />
            </div>
            <div className="method-col-text">
              <div className="method-item-subtitle">- Producing</div>
              <h3 className="method-item-title en-text">RESONANCE</h3>
              <div className="method-item-desc">* 울림이 느껴질 때에, 비로소 남는 이야기.</div>
              <p className="method-item-body">
                마음으로 느껴지지 않는 이야기는 쉽게 소비되고 잊혀집니다.<br/>
                좋은 이야기는 전달되는 것을 넘어 울림을 남겨야 합니다.<br/>
                그 울림이 있을 때 이야기는 기억이 됩니다.
              </p>
              <ul style={{ paddingLeft: '0', fontSize: '1.1rem', lineHeight: '2' }}>
                <li>Film</li>
                <li>Creative Direction</li>
                <li>Editorial & Visual Systems<br/>Visual Storytelling</li>
              </ul>
            </div>
          </div>
        </FadeSection>

        {/* Footer */}
        <FadeSection>
          <div className="method-footer-text">
            <div className="en-text" style={{ marginBottom: '32px' }}>Essence, Movement, Resonance</div>
            <div style={{ marginBottom: '32px' }}>
              glance 는 이 3 개의 레이어를 쌓아,<br/>
              작업에 깊이를 더합니다.
            </div>
            <div style={{ marginBottom: '48px' }}>
              우리는 모든 프로젝트에<br/>
              정형화 된 솔루션을 적용하기보다,<br/>
              각 프로젝트에 가장 적절한 레이어를 택하고, 입힙니다.
            </div>
            <div className="en-text" style={{ marginBottom: '8px' }}>As needed. In the right form.</div>
            <div>필요한 만큼, 가장 적절한 형태로.</div>
          </div>
        </FadeSection>

      </div>
    </section>
  );
};

export default Method;
