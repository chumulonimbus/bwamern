import React from 'react'
import Fade from 'react-reveal/Fade';
import ImageHero from 'assets/images/img-hero.png'
import ImageHero_ from 'assets/images/img-hero-frame.png'
import IconCities from 'assets/images/icons/ic_city.svg'
import IconTraveler from 'assets/images/icons/ic_travel.svg'
import IconTreasure from 'assets/images/icons/ic_treasure.svg'
import Button from 'element/Button'
import formatNumber from 'utils/formatNumber'

export default function Hero(props) {
    function showMostPicked(){
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }

    return (
        <Fade bottom>
            <section className="container pt-4">
                <div className="row align-items-center">
                    <div className="col-6 pr-5">
                        <h1 className="h2 font-weight-bold line-height-1 mb-3">
                        Forget the bussy work,<br/> start your next vacation
                        </h1>
                        <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight: "170%"}}>
                        We provide what you need to enjoy your holiday with family,
                        Time to make another memorable moments. Your money can 
                        return but your time is not. What are you thingking?
                        </p>
                        <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                            Show Me Now
                        </Button>
                        <div className="row" style={{marginTop: 80}}>
                            <div className="col-auto" style={{marginRight: 35}}>
                                <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers}Travelers`}/>
                                <h6 className="mt-3">
                                    {formatNumber(props.data.travelers )} <span className="text-gray-500 font-weight-light">Travelers</span>
                                </h6>
                            </div>
                            <div className="col-auto" style={{marginRight: 35}}>
                                <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures}Treasure`}/>
                                <h6 className="mt-3">
                                    {formatNumber(props.data.treasures)} <span className="text-gray-500 font-weight-light">Treasure</span>
                                </h6>
                            </div>
                            <div className="col-auto" style={{marginRight: 35}}>
                                <img width="36" height="36" src={IconCities} alt={`${props.data.cities}Cities`}/>
                                <h6 className="mt-3">
                                    {formatNumber(props.data.cities)} <span className="text-gray-500 font-weight-light">Cities</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 pl-5">
                        <div className="position-relative" style={{width: 520, height: 410}}>
                            <img src={ImageHero} alt="room with couches" className="img-fluid position-absolute" style={{margin: '-30px 0 0 -30px', zIndex: 1}}/>
                            <img src={ImageHero_} alt="room with couches frame" className="img-fluid position-absolute" style={{margin: '0 -15px -15px 0'}}/>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    )
}
