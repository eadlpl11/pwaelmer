import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href='https://www.youtube.com/channel/UCoyWu0wI1grKLGmwFngd9eg/videos'>
                    <Image
                      src={require('./../../assets/images/youtube.svg')}
                      width={64}
                      height={64} />
                    </a>                   
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Youtube Channel
                    </h4>
                  <p className="m-0 text-sm">
                    Films documentation of schoolar projects talking about tech topics
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href='https://github.com/eadlpl11'>
                    <Image
                      src={require('./../../assets/images/github.svg')}
                      width={64}
                      height={64} />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    GitHub
                    </h4>
                  <p className="m-0 text-sm">
                    Repository profile to see personal and schoolar projects
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href='https://detlos-web.herokuapp.com/'>
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-03.svg')}
                        width={64}
                        height={64}                                            
                      />
                    </a>
                  </div>
                </div>

                <div className="features-tiles-item-content">
                <h4 className="mt-0 mb-8">
                    Detlos Security
                </h4>
                <p className="m-0 text-sm">
                  5th Grade School Project that let you connect ESP32-CAM and other IP camera technologies
                </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="mailto: elmeraarondelapenalopez@gmail.com">
                    <Image
                      src={require('./../../assets/images/email.svg')}
                      width={64}
                      height={64} />  
                    </a>                    
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Email
                    </h4>
                  <p className="m-0 text-sm">
                    Contact information, let me know if you have any doubt
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href='https://utch.edu.mx'>
                    <Image
                      src={require('./../../assets/images/mortarboard.svg')}                      
                      width={64}
                      height={64} />
                    </a>
                    
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    UTCH
                    </h4>
                  <p className="m-0 text-sm">
                    Current school institution, 10th grade of software development
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href='https://github.com/eadlpl11/detlos_pet/raw/main/CV-Elmer-DelaPe%C3%B1a.pdf'>
                    <Image
                      src={require('./../../assets/images/google-docs.svg')}                      
                      width={64}
                      height={64} />
                    </a>
                    
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    CV
                    </h4>
                  <p className="m-0 text-sm">
                    PDF file with a resume download ready
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;